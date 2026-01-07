import Banner from '../components/Banner.jsx';
import ProductList from '../components/ProductList.jsx';

export default function Home() {
  return (
    <main className="container">
      <Banner />
      <section className="section">
        <h2 className="section-title">Trending Products</h2>
        <ProductList />
      </section>
    </main>
  );
}
