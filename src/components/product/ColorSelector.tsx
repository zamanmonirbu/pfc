import React from 'react';
import { cn } from '../../utils/cn';

interface ColorOption {
  name: string;
  value: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onChange: (color: string) => void;
}

export function ColorSelector({ colors, selectedColor, onChange }: ColorSelectorProps) {
  // Determine if we need wider spacing based on color name length
  const hasLongNames = colors.some(color => color.name.length > 12);
  
  return (
    <div className="space-y-3">
      <div className={cn(
        "grid gap-8",
        hasLongNames 
          ? "grid-cols-2" 
          : "grid-cols-2 sm:grid-cols-4"
      )}>
        {colors.map(({ name, value }) => (
          <button
            key={name}
            onClick={() => onChange(name)}
            className="group relative flex flex-col items-center"
            aria-label={`Select ${name} color`}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full border-2 transition-all",
                selectedColor === name
                  ? "ring-2 ring-emerald-500 ring-offset-2"
                  : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2"
              )}
              style={{ 
                backgroundColor: value,
                borderColor: value === '#FFFFFF' ? '#E5E7EB' : value 
              }}
            />
            <span className="mt-3 text-sm text-gray-600 text-center whitespace-normal">
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}