export default function Hello({socket}) {

    const handleClick = () => {
        console.log("HAndle press");
        socket.emit("hello");
    }

    return <div>
        <button onClick = {handleClick}>Press for Hello World</button>
    </div>
}