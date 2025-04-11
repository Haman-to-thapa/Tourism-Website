import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-white py-6 "
      style={{
        backgroundColor: 'rgba(34, 56, 45, 0.6)',
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter size={20} />
          </a>
        </div>

        <p className="text-sm text-gray-300">© 2025 Arunachal Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

