const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Cotton T-Shirt',
    price: 299,
    image: '/src/assets/OIP.webp',
    rating: 4.3,
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    price: 1499,
    image: '/src/assets/oip.jpg',
    rating: 4.1,
  },
  {
    id: 3,
    title: 'Handbag',
    price: 999,
    image: '/src/assets/kk.webp',
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Analog Watch',
    price: 1299,
    image: '/src/assets/ak.jpg',
    rating: 4.0,
  },
  {
  id: 5,
  title: 'Bluetooth Speaker',
  price: 1799,
  image: '/src/assets/aa.webp',
  rating: 4.2,
},
{
  id: 6,
  title: 'Running Shoes',
  price: 2499,
  image: '/src/assets/shoes.webp',
  rating: 4.4,
},
{
  id: 7,
  title: 'Smartphone Stand',
  price: 399,
  image: '/src/assets/stand.jpg',
  rating: 4.0,
},
{
  id: 8,
  title: 'Sunglasses',
  price: 799,
  image: '/src/assets/glass.jpg',
  rating: 4.3,
}
];

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 100); // simulate network delay
  });
}
