interface IPhoneColor {
  name: string;
  value: string;
}

const iPhoneColors: Record<string, IPhoneColor[]> = {
  'iPhone 15 Pro Max': [
    { name: 'Natural Titanium', value: '#9A9A9A' },
    { name: 'Blue Titanium', value: '#394E5C' },
    { name: 'White Titanium', value: '#F5F5F0' },
    { name: 'Black Titanium', value: '#3B3B3B' }
  ],
  'iPhone 15 Pro': [
    { name: 'Natural Titanium', value: '#9A9A9A' },
    { name: 'Blue Titanium', value: '#394E5C' },
    { name: 'White Titanium', value: '#F5F5F0' },
    { name: 'Black Titanium', value: '#3B3B3B' }
  ],
  'iPhone 15 Plus': [
    { name: 'Black', value: '#1F2020' },
    { name: 'Blue', value: '#236F8E' },
    { name: 'Green', value: '#505952' },
    { name: 'Pink', value: '#F4D5CC' },
    { name: 'Yellow', value: '#F3E3B6' }
  ],
  'iPhone 15': [
    { name: 'Black', value: '#1F2020' },
    { name: 'Blue', value: '#236F8E' },
    { name: 'Green', value: '#505952' },
    { name: 'Pink', value: '#F4D5CC' },
    { name: 'Yellow', value: '#F3E3B6' }
  ],
  'iPhone 14 Pro Max': [
    { name: 'Space Black', value: '#1F2020' },
    { name: 'Silver', value: '#F5F5F0' },
    { name: 'Gold', value: '#FAE7CF' },
    { name: 'Deep Purple', value: '#635C6D' }
  ],
  'iPhone 14 Pro': [
    { name: 'Space Black', value: '#1F2020' },
    { name: 'Silver', value: '#F5F5F0' },
    { name: 'Gold', value: '#FAE7CF' },
    { name: 'Deep Purple', value: '#635C6D' }
  ],
  'iPhone 14 Plus': [
    { name: 'Blue', value: '#A7C1D9' },
    { name: 'Purple', value: '#E5DDEA' },
    { name: 'Midnight', value: '#1F2020' },
    { name: 'Starlight', value: '#F9F6EF' },
    { name: 'Red', value: '#E71D32' }
  ],
  'iPhone 14': [
    { name: 'Blue', value: '#A7C1D9' },
    { name: 'Purple', value: '#E5DDEA' },
    { name: 'Midnight', value: '#1F2020' },
    { name: 'Starlight', value: '#F9F6EF' },
    { name: 'Red', value: '#E71D32' }
  ],
  'iPhone 13 Pro Max': [
    { name: 'Graphite', value: '#1F2020' },
    { name: 'Silver', value: '#F5F5F0' },
    { name: 'Sierra Blue', value: '#A7C1D9' },
    { name: 'Gold', value: '#FAE7CF' }
  ],
  'iPhone 13 Pro': [
    { name: 'Graphite', value: '#1F2020' },
    { name: 'Silver', value: '#F5F5F0' },
    { name: 'Sierra Blue', value: '#A7C1D9' },
    { name: 'Gold', value: '#FAE7CF' }
  ],
  'iPhone 13': [
    { name: 'Pink', value: '#FDE2DD' },
    { name: 'Blue', value: '#437792' },
    { name: 'Midnight', value: '#1F2020' },
    { name: 'Starlight', value: '#F9F6EF' },
    { name: 'Green', value: '#505952' },
    { name: 'Red', value: '#E71D32' }
  ],
  'iPhone 13 Mini': [
    { name: 'Pink', value: '#FDE2DD' },
    { name: 'Blue', value: '#437792' },
    { name: 'Midnight', value: '#1F2020' },
    { name: 'Starlight', value: '#F9F6EF' },
    { name: 'Green', value: '#505952' },
    { name: 'Red', value: '#E71D32' }
  ],
  'iPhone 12 Pro Max': [
    { name: 'Graphite', value: '#1F2020' },
    { name: 'Silver', value: '#F5F5F0' },
    { name: 'Pacific Blue', value: '#215E7C' },
    { name: 'Gold', value: '#FAE7CF' }
  ],
  'iPhone 12 Pro': [
    { name: 'Graphite', value: '#1F2020' },
    { name: 'Silver', value: '#F5F5F0' },
    { name: 'Pacific Blue', value: '#215E7C' },
    { name: 'Gold', value: '#FAE7CF' }
  ],
  'iPhone 12': [
    { name: 'Purple', value: '#E4D0E3' },
    { name: 'Blue', value: '#215E7C' },
    { name: 'Green', value: '#E3F1E3' },
    { name: 'Red', value: '#E71D32' },
    { name: 'White', value: '#F9F6EF' },
    { name: 'Black', value: '#1F2020' }
  ],
  'iPhone 12 Mini': [
    { name: 'Purple', value: '#E4D0E3' },
    { name: 'Blue', value: '#215E7C' },
    { name: 'Green', value: '#E3F1E3' },
    { name: 'Red', value: '#E71D32' },
    { name: 'White', value: '#F9F6EF' },
    { name: 'Black', value: '#1F2020' }
  ]
};

export function getIPhoneColors(modelName: string): IPhoneColor[] {
  // First try exact match
  if (iPhoneColors[modelName]) {
    return iPhoneColors[modelName];
  }
  
  // Then try to match base model
  const baseModel = modelName.match(/(iPhone \d+)/)?.[1];
  if (baseModel && iPhoneColors[baseModel]) {
    return iPhoneColors[baseModel];
  }
  
  // Default to latest model colors if no match found
  return iPhoneColors['iPhone 15 Pro Max'];
}