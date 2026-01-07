import OIP from '../assets/OIP.webp';
import oip from '../assets/oip.jpg';
import kk from '../assets/kk.webp';
import ak from '../assets/ak.jpg';
import aa from '../assets/aa.webp';
import shoes from '../assets/shoes.webp';
import stand from '../assets/stand.jpg';
import glass from '../assets/glass.jpg';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Cotton T-Shirt',
    price: 299,
    image: OIP,
    rating: 4.3,
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    price: 1499,
    image: oip,
    rating: 4.1,
  },
  {
    id: 3,
    title: 'Handbag',
    price: 999,
    image: kk,
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Analog Watch',
    price: 1299,
    image: ak,
    rating: 4.0,
  },
  {
    id: 5,
    title: 'Bluetooth Speaker',
    price: 1799,
    image: aa,
    rating: 4.2,
  },
  {
    id: 6,
    title: 'Running Shoes',
    price: 2499,
    image: shoes,
    rating: 4.4,
  },
  {
    id: 7,
    title: 'Smartphone Stand',
    price: 399,
    image: stand,
    rating: 4.0,
  },
  {
    id: 8,
    title: 'Sunglasses',
    price: 799,
    image: glass,
    rating: 4.3,
  }
];

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 100);
  });
}
