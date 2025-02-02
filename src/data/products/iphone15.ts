import type { Product } from '../../types/product';

export const iphone15Series: Product[] = [
  {
    id: 'iphone-15-pro-max-256gb',
    name: 'iPhone 15 Pro Max',
    storage: '256GB',
    price: 889.99,
    originalPrice: 1067.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-15-pro-max-zwart-thumb_1.jpg',
    rating: 5.0,
    reviews: 89,
    discount: true,
    warranty: true,
    releaseDate: new Date('2023-09-22')
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    storage: '128GB',
    price: 689.99,
    originalPrice: 827.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-15-pro-zwart-thumb_2.jpg',
    rating: 4.9,
    reviews: 76,
    discount: true,
    warranty: true,
    releaseDate: new Date('2023-09-22')
  },
  {
    id: 'iphone-15-plus',
    name: 'iPhone 15 Plus',
    storage: '128GB',
    price: 659.00,
    originalPrice: 790.80,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Black', 'Blue', 'Green', 'Pink', 'Yellow'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-15-zwart-thumb_7_7.jpg',
    rating: 4.8,
    reviews: 52,
    discount: true,
    warranty: true,
    releaseDate: new Date('2023-09-22')
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    storage: '128GB',
    price: 589.99,
    originalPrice: 707.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Black', 'Blue', 'Green', 'Pink', 'Yellow'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-15-zwart-thumb_7_7.jpg',
    rating: 4.8,
    reviews: 64,
    discount: true,
    warranty: true,
    releaseDate: new Date('2023-09-22')
  }
];