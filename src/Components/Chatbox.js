import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa'; // Importing AI icon
import './Chatbox.css'; // Include the updated CSS
import axios from 'axios';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: 'user', text: userInput }]);
      setUserInput('');
      setIsLoading(true); // Set loading state to true before API call
      
      try {
        // Make the API call to OpenAI (using chat-based completions)
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo', // Use the GPT-4 model or gpt-3.5-turbo
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: userInput },
            ],
            max_tokens: 150,
            temperature: 0.7,
          },
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Access the key from .env file
              'Content-Type': 'application/json',
            },
          }
        );

        // Retrieve the AI response from OpenAI API
        const aiResponse = response.data.choices[0].message.content.trim();

        // Add the bot's response to the message list
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: aiResponse },
        ]);
      } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Sorry, I couldn’t process your request.' },
        ]);
      } finally {
        setIsLoading(false); // Set loading state to false after API call
      }
    }
  };

  return (
    <>
      <div className="ai-icon" onClick={handleToggle}>
        <FaRobot size={30} color="#9067C6" />
      </div>

      {isOpen && (
        <div className="chatbox">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <strong>{message.sender === 'bot' ? 'Bot:' : 'You:'}</strong>{' '}
                {message.text}
              </div>
            ))}
          </div>

          <div className="input">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Type a message"
              disabled={isLoading} // Disable input while loading
            />
            <button onClick={handleSendMessage} disabled={isLoading}> {/* Disable button while loading */}
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbox;
