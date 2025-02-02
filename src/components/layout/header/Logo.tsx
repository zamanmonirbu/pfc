import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <Smartphone className="w-6 h-6 text-emerald-500" />
      <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent hidden lg:inline">
        PhoneFlex
      </span>
    </Link>
  );
}