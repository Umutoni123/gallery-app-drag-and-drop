import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use react-router for navigation

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials are correct
    if (formData.email === 'user@example.com' && formData.password === '1Password') {
      // Redirect to the gallery page upon successful login
      navigate('/gallery');
    } else {
      // Handle authentication failure (display error message)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login into Gallery app</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
