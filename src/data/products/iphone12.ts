import type { Product } from '../../types/product';

export const iphone12Series: Product[] = [
  {
    id: 'iphone-12-pro-max',
    name: 'iPhone 12 Pro Max',
    storage: '128GB',
    price: 419.99,
    originalPrice: 503.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Graphite', 'Silver', 'Pacific Blue', 'Gold'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-12-pro-zwart-thumbnail_3.jpg',
    rating: 4.7,
    reviews: 384,
    discount: true,
    warranty: true,
    releaseDate: new Date('2020-10-23')
  },
  {
    id: 'iphone-12-pro',
    name: 'iPhone 12 Pro',
    storage: '128GB',
    price: 369.99,
    originalPrice: 443.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Graphite', 'Silver', 'Pacific Blue', 'Gold'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-12-pro-zwart-thumbnail_1.jpg',
    rating: 4.7,
    reviews: 426,
    discount: true,
    warranty: true,
    releaseDate: new Date('2020-10-23')
  },
  {
    id: 'iphone-12',
    name: 'iPhone 12',
    storage: '64GB',
    price: 279.99,
    originalPrice: 335.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Purple', 'Blue', 'Green', 'Red', 'White', 'Black'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-12-zwart-thumbnail_3_1.jpg',
    rating: 4.6,
    reviews: 528,
    discount: true,
    warranty: true,
    releaseDate: new Date('2020-10-23')
  },
  {
    id: 'iphone-12-mini',
    name: 'iPhone 12 Mini',
    storage: '64GB',
    price: 259.99,
    originalPrice: 311.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Purple', 'Blue', 'Green', 'Red', 'White', 'Black'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-12-mini-zwart-thumbnail_2.jpg',
    rating: 4.5,
    reviews: 284,
    discount: true,
    warranty: true,
    releaseDate: new Date('2020-10-23')
  }
];