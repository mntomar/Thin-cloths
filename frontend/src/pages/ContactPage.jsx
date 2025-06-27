import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/contact-bg.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 backdrop-blur-sm bg-white/70 rounded shadow-md">
         
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="border p-2 rounded"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Right - Contact Info */}
          <div className="flex flex-col space-y-4 text-black">
            <h3 className="text-xl font-semibold">Our Office</h3>
            <p>
            Think Cloths E-Commerce Pvt Ltd
              <br />
              132, Fashion Street,
              <br />
              Noida, Uttar Pradesh, India
            </p>

            <h3 className="text-xl font-semibold">Email</h3>
            <p>support@Think Cloths.shop</p>

            <h3 className="text-xl font-semibold">Phone</h3>
            <p>+91 9876555567</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
