import React from 'react';
import { MessageCircle, Mail, Globe } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center gap-4 mb-6">
        <MessageCircle className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">For privacy-related inquiries:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-600" />
            <span>privacy@phoneflex.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-emerald-600" />
            <span>www.phoneflex.com/privacy</span>
          </div>
        </div>
      </div>
    </section>
  );
}