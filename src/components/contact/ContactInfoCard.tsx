import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  subtext: string;
}

export function ContactInfoCard({ icon: Icon, title, content, subtext }: ContactInfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-emerald-100 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-gray-600">{content}</p>
          <p className="text-sm text-gray-500">{subtext}</p>
        </div>
      </div>
    </div>
  );
}