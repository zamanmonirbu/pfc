import type { Product } from '../../types/product';

export const iphone14Series: Product[] = [
  {
    id: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    storage: '128GB',
    price: 649.99,
    originalPrice: 779.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Space Black', 'Silver', 'Gold', 'Deep Purple'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-14-pro-max-zwart-thumb_12.jpg',
    rating: 4.9,
    reviews: 128,
    discount: true,
    warranty: true,
    releaseDate: new Date('2022-09-16')
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    storage: '128GB',
    price: 529.99,
    originalPrice: 635.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Space Black', 'Silver', 'Gold', 'Deep Purple'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-14-pro-max-zwart-thumb_12.jpg',
    rating: 4.8,
    reviews: 156,
    discount: true,
    warranty: true,
    releaseDate: new Date('2022-09-16')
  },
  {
    id: 'iphone-14-plus',
    name: 'iPhone 14 Plus',
    storage: '128GB',
    price: 479.99,
    originalPrice: 575.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Red'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-14-plus-zwart-thumbnail_1_1_4.jpg',
    rating: 4.7,
    reviews: 92,
    discount: true,
    warranty: true,
    releaseDate: new Date('2022-09-16')
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    storage: '128GB',
    price: 409.99,
    originalPrice: 491.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Red'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-14-zwart-thumbnail_4_2.jpg',
    rating: 4.7,
    reviews: 184,
    discount: true,
    warranty: true,
    releaseDate: new Date('2022-09-16')
  }
];