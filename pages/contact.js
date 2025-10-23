import { NextSeo } from 'next-seo';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with your actual submission logic
      console.log('📨 Form submitted:', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('❌ Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <>
      <NextSeo
        title="Contact"
        description="Get in touch with Jochen Mertens"
        openGraph={{
          title: 'Contact',
          description: 'Get in touch with Jochen Mertens',
        }}
      />
      <main className="mx-auto max-w-3xl px-4 py-24">
        <div className="pb-12 text-center">
          <h1 className="bg-linear-to-r from-titleg1 to-titleg2 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Let's Connect
          </h1>
          <p className="pt-4 text-xl text-gray-300">
            Whether it's a collaboration, a question, or just a hello — I’d love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 rounded-md bg-gray-900 p-8 shadow-xl"
        >
          <label className="block">
            <span className="text-gray-200 font-semibold">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>

          <label className="block">
            <span className="text-gray-200 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>

          <label className="block">
            <span className="text-gray-200 font-semibold">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-2 w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>

          <button
            type="submit"
            className="rounded-md bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent-dark"
          >
            Send Message
          </button>

          {status === 'success' && (
            <p className="text-green-400 font-semibold">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 font-semibold">Something went wrong. Please try again.</p>
          )}
        </form>
      </main>
    </>
  );
}
