import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, socket}) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a messge..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => (event.key === "Enter" ? (event) => {
          event.preventDefault();
          if(message){
            socket.emit('sendMessage', message, ()=>setMessage(''));
          };
        }: null)}
      />
      <button className="sendButton" onClick={(event) => {
        event.preventDefault();
          if(message){
            socket.emit('sendMessage', message, ()=>setMessage(''));
          };
      }}>send</button>
    </form>
  );
};

export default Input;
