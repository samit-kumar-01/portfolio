import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
      const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[message,setMessage]=useState("");
    const[subject,setSubject]=useState("");

    function handleSubmit(e){
e.preventDefault();
setEmail("");
setMessage("");
setName("")
setSubject("")
toast.success("I will connect to you shortly!")

    }
  return (
    <div className="max-w-md mx-auto p-6 bg-[#0f0f1c] rounded-xl shadow-lg border border-purple-600 mt-10 w-[90%]">
      <h2 className="text-white text-2xl font-semibold text-center mb-6">
        Connect With Me <span role="img" aria-label="rocket">🚀</span>
      </h2>

      <form className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      >
        <input
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        required
          type="email"
          placeholder="Your Email"
          className="bg-[#151528] text-white p-3 rounded-md outline-none border border-gray-600 focus:border-purple-500"
        />
        <input
        value={name}
        required
        onChange={(e)=>{
            setName(e.target.value)
        }}
          type="text"
          placeholder="Your Name"
          className="bg-[#151528] text-white p-3 rounded-md outline-none border border-gray-600 focus:border-purple-500"
        />
        <input
        value={subject}
        required
        onChange={(e)=>{
            setSubject(e.target.value)
        }}
          type="text"
          placeholder="Subject"
          className="bg-[#151528] text-white p-3 rounded-md outline-none border border-gray-600 focus:border-purple-500"
        />
        <input
        value={message}
        required
        onChange={(e)=>{
            setMessage(e.target.value);
        }}
          placeholder="Message"
          className="bg-[#151528] text-white p-3 rounded-md outline-none border border-gray-600 focus:border-purple-500 resize-none"
        ></input>

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-2 rounded-md hover:opacity-90 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
