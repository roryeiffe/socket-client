import { io } from 'socket.io-client';
import Hello from './Hello';
import Room from './Room';

function App() {
  const socket = io('localhost:5000');

  return (
    <div>
      <h1>Hello World</h1>
      <Hello socket={socket}/>
      <Room socket = {socket}/>
      
    </div>
  );
}

export default App;
