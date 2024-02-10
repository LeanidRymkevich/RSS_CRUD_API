import 'dotenv/config';
import { multiply } from './folder/multiply';

console.log(process.env.PORT);

export const sum = (a: number, b: number) => multiply(a, b) + a;

console.log(multiply(2, 4));
