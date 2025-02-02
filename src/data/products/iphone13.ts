import type { Product } from '../../types/product';

export const iphone13Series: Product[] = [
  {
    id: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    storage: '128GB',
    price: 529.99,
    originalPrice: 635.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Graphite', 'Silver', 'Sierra Blue', 'Gold'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-13-pro-zwart-thumbnail_1_2_1_1.jpg',
    rating: 4.8,
    reviews: 246,
    discount: true,
    warranty: true,
    releaseDate: new Date('2021-09-24')
  },
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    storage: '128GB',
    price: 429.99,
    originalPrice: 515.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Graphite', 'Silver', 'Sierra Blue', 'Gold'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-13-pro-zwart-thumbnail_1_9_1.jpg',
    rating: 4.8,
    reviews: 312,
    discount: true,
    warranty: true,
    releaseDate: new Date('2021-09-24')
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    storage: '128GB',
    price: 339.99,
    originalPrice: 407.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Pink', 'Blue', 'Midnight', 'Starlight', 'Green', 'Red'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-13-zwart-thumbnail_1.jpg',
    rating: 4.7,
    reviews: 428,
    discount: true,
    warranty: true,
    releaseDate: new Date('2021-09-24')
  },
  {
    id: 'iphone-13-mini',
    name: 'iPhone 13 Mini',
    storage: '128GB',
    price: 329.99,
    originalPrice: 395.99,
    condition: 'Excellent',
    batteryHealth: 'New',
    colors: ['Pink', 'Blue', 'Midnight', 'Starlight', 'Green', 'Red'],
    image: 'https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/r/e/refurbished-iphone-13-mini-zwart-thumbnail_3_2.jpg',
    rating: 4.6,
    reviews: 186,
    discount: true,
    warranty: true,
    releaseDate: new Date('2021-09-24')
  }
];