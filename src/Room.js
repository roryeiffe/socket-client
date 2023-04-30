import { useState } from "react";

export default function Room({socket}) {
    const [room, setRoom] = useState("Here");
    const [name, setName] = useState("Rory");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const [inRoom, setInRoom] = useState(false);

    socket.on('message', ({user, text}) => {
        console.log(user);
        console.log(text);
    })

    const joinRoom = () => {
        socket.emit("login", {name, room}, (v) => {
            if(v === 'success') {
                setInRoom(true);
            }
            else {
                alert(v);
            }
        }
        );
    }

    const sendMessage = () => {
        setMessages([...messages, message]);
        console.log(messages);
        setMessage("");
        socket.emit('sendMessage', message);
    }

    return <div>
        <label>Name</label>
        <input value = {name} onChange = {e => setName(e.target.value)}/>
        <label>Room</label>
        <input value = {room} onChange = {e => setRoom(e.target.value)}/>

        <button onClick = {joinRoom}>Join Room</button>

        {inRoom && 
        <div>
            <input value = {message} onChange = {e => setMessage(e.target.value)}/>
            <button onClick = {sendMessage}>Send Message</button>
            <h1>Messages:</h1>
            <ul> 
                {messages.map(m => (
                    <li>{m}</li>
                ))}
            </ul>
        </div>
            }

    </div>

}