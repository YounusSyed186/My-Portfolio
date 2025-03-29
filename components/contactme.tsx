"use client";
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:younussyed1011@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact' className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Contact Info Side */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Lets Connect!</h2>
            <p className="mb-8 text-blue-100">
              I am a MERN stack developer open to collaborations and opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-400 rounded-lg p-3">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-blue-100">Younussyed1011@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4">My Socials</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/YounusSyed186" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-400 hover:bg-blue-300 w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <FaGithub className="text-white" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/younus-syed-2b7913295" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-400 hover:bg-blue-300 w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <FaLinkedin className="text-white" />
                  </a>
                  <a 
                    href="https://x.com/YounusSyed89543" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-400 hover:bg-blue-300 w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <FaTwitter className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Side */}
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactme;