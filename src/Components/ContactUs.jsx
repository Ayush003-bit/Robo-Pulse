
  import React, { useState } from "react";
import Logo from "../assets/Logo.png"; // adjust path if needed

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const ownerWhatsAppNumber = "91 9792888007"; // 👈 Replace with actual number (with country code, no +)

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const whatsappMessage = `
Hello, I would like to connect.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 px-6 py-12">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side Image */}
        <div className="hidden md:flex items-center justify-center bg-blue-50 p-10">
          <img src={Logo} alt="Robopulse Intelligence" className="w-80" />
        </div>

        {/* Contact Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-6">
            We'd love to hear from you. Fill out the form and we’ll connect with you on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
