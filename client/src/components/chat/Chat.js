import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import './Chat.css';

const ENDPOINT = "https://real-time-chat-applcn.herokuapp.com/";

let socket;



const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    // console.log(window.location.search);
    // console.log(name, room);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

    // socket.on("connect_error", (err) => {
    //   console.log(`connect_error due to ${err.message}`);
    // });

    // console.log(socket);

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, window.location.search]);

  

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  },[messages]);

  // function to send message
  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   if(message){
  //       socket.emit('sendMessage', message, ()=>setMessage(''));
  //   };
    
  // };


  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room}/>
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} socket={socket}/>
       
      </div>
    </div>
  );
};

export default Chat;
