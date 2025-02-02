import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            required
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          >
            <option value="">Select a subject</option>
            <option value="order">Order Inquiry</option>
            <option value="product">Product Information</option>
            <option value="warranty">Warranty Claim</option>
            <option value="return">Return Request</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows={6}
            required
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full flex items-center justify-center gap-2"
        >
          Send Message <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}