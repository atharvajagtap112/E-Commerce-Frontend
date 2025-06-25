// AISearch.jsx
import React, { useState, useEffect, useRef } from 'react';
import * as Chart from 'chart.js';
import SentimentChart from './SentimentChart'; // Make sure path is correct
import { useDispatch } from 'react-redux';
import { findProducts } from '../../../State/Product/Action';
import { useNavigate } from 'react-router-dom';

const AISearch = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSessions, setChatSessions] = useState([]);
  const [socket, setSocket] = useState(null);
  const chatBoxRef = useRef(null);
  
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    const connectWebSocket = () => {
      const ws = new WebSocket("ws://localhost:5454/chat");

      ws.onopen = () => {
        console.log("✅ WebSocket connection established.");
      };

      ws.onmessage = (event) => {
        console.log("🔹 Received WebSocket Message: ", event.data);
        setIsLoading(false);
        
        try {
          let data = JSON.parse(event.data);

          console.log("🔹 Parsed WebSocket Data: ", data);

          dispatch(findProducts(data));

          navigation(`/search/${data.category}`);

        } catch (error) {
          console.error("❌ Error parsing WebSocket response:", error);
          addMessage(event.data, "bot");
        }
      };

      ws.onerror = (error) => {
        console.error("❌ WebSocket Error: ", error);
        setIsLoading(false);
      };

      return ws;
    };

    const newSocket = connectWebSocket();
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, [dispatch]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (message, type, chartData = null) => {
    const newMessage = {
      id: Date.now(),
      text: message,
      type: type,
      chartData: chartData,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessage = () => {
    if (userInput.trim() === "" || !socket) return;

    addMessage(userInput, "user");
    setUserInput("");
    setIsLoading(true);

    socket.send(userInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const startNewChat = () => {
    if (messages.length > 0) {
      setChatSessions(prev => [...prev, { messages: [...messages], date: new Date() }]);
    }
    setMessages([]);
  };

  const formatMessage = (message) => {
    try {
      if (typeof message === "string" && message.trim().startsWith("{")) {
        let data = JSON.parse(message);

        if (data.plans) {
          return (
            <div>
              <b>✅ Matching Plans:</b><br/><br/>
              <div style={{width: '100%', textAlign: 'left'}}>
                {/* Plan formatting logic would go here */}
              </div>
            </div>
          );
        } else if (data.error) {
          return <b>❌ {data.error}</b>;
        }
      } else if (typeof message === "string" && message.toLowerCase().includes("here are some")) {
        const formattedResponse = message.split(":")[0];
        const productText = message.split(":")[1]?.trim() || "";
        const products = productText.split("||").filter(item => item.trim() !== "");

        return (
          <div>
            <b>🛒 {formattedResponse}:</b><br/><br/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {products.map((product, index) => {
                if (product.trim() !== "") {
                  const productParts = product.split(" (₹");
                  const name = productParts[0]?.trim() || "";
                  const price = productParts[1] ? `₹${productParts[1].replace(")", "")}` : "";

                  return (
                    <div key={index} style={{
                      background: '#1e1e1e',
                      padding: '12px',
                      borderRadius: '10px',
                      border: '1px solid #444',
                      boxShadow: '0 0 10px rgba(0,0,0,0.3)'
                    }}>
                      <div style={{fontSize: '16px', fontWeight: 'bold', color: '#00d1b2'}}>{name}</div>
                      <div style={{fontSize: '14px', color: '#ccc'}}>
                        Price: <span style={{fontWeight: 'bold', color: '#ffd700'}}>{price}</span>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        );
      }
    } catch (error) {
      console.error("❌ Error parsing message:", error);
    }

    return message;
  };

  return (
    <div className="app-container">
      {/* sidebar and styles omitted for brevity */}

      <div className="chat-container">
        <div className="chat-header">
          Hello, <span className="username">Ashvani</span>
        </div>

        <div className="chat-box" ref={chatBoxRef}>
          {messages.map((message) => (
            <div key={message.id}>
              {message.type === 'chart' && message.chartData ? (
                <SentimentChart chartData={message.chartData} />
              ) : (
                <div className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}>
                  {typeof formatMessage(message.text) === 'string'
                    ? formatMessage(message.text)
                    : <div>{formatMessage(message.text)}</div>
                  }
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="message loading-message">
              Thinking...
            </div>
          )}
        </div>

        <div className="chat-input">
          <button className="mic-btn">🎤</button>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask Gemini..."
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
};

export default AISearch;
