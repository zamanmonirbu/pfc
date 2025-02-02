import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactHero } from '../../components/contact/ContactHero';
import { ContactInfoCard } from '../../components/contact/ContactInfoCard';
import { ContactForm } from '../../components/contact/ContactForm';
import { LocationMap } from '../../components/contact/LocationMap';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+31 (0) 20 123 4567',
      subtext: 'Mon-Fri, 9:00-17:00 CET'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'support@phoneflex.com',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'Amsterdam, Netherlands',
      subtext: 'Tech District, 1234 AB'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday',
      subtext: '9:00 AM - 5:00 PM CET'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHero />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info) => (
              <ContactInfoCard key={info.title} {...info} />
            ))}
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        <LocationMap />
      </div>
    </div>
  );
}