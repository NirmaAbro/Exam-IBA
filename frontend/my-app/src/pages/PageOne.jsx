import React from "react";
import { useState } from "react";

function PageOne() {
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <div className="bg-gray-400 h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-6 underline">
          PageOne
        </h1>
        <div className="mb-4">
          <label htmlFor="inputBox" className="block text-gray-600 border-b border-black">
            Input Box:
          </label>
          <input
            type="text"
            id="inputBox"
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
            value={inputValue}
            onChange={handleInputChange} placeholder="type anything"
          />
        </div>
        <div>
          <label htmlFor="textArea" className="block text-gray-600 border-b border-black">
            Text Area:
          </label>
          <textarea
            id="textArea"
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
            value={textAreaValue}
            onChange={handleTextAreaChange} placeholder="type your text"
          />
        </div>
      </div>
    </div>
  );
}

export default PageOne;
