import React, { useState } from 'react'

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });};


    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-white block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-white block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-white block mb-2">Message</label>
              <textarea
                className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-500"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="bg-yellow-500 text-black py-3 px-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
      );
}

export default Contact