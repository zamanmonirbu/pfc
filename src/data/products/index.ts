import { iphone15Series } from './iphone15';
import { iphone14Series } from './iphone14';
import { iphone13Series } from './iphone13';
import { iphone12Series } from './iphone12';
import type { Product } from '../../types/product';

// Combine all iPhone series into one array
export const products: Product[] = [
  ...iphone15Series,
  ...iphone14Series, 
  ...iphone13Series,
  ...iphone12Series
];