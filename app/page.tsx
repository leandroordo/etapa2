import Banner from "@/components/banner/banner";
import SectionTitle from "@/components/sectiontitle/sectiontitle";
import ProductCard from "@/components/productCard/productCard";
import { fetchProducts } from "./lib/data";

const Home = async () => {
  const products = await fetchProducts();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="cart"
          viewBox="0 0 21 21"
        >
          <g fill="none" fillRule="evenodd">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 6.5h12.5l-1.586 5.55a2 2 0 0 1-1.923 1.45h-6.7a2 2 0 0 1-1.989-1.78L4.5 4.5h-2"
            ></path>
            <g fill="currentColor" transform="translate(2 4)">
              <circle cx="5" cy="12" r="1"></circle>
              <circle cx="13" cy="12" r="1"></circle>
            </g>
          </g>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="search"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
          ></path>
        </symbol>
      </svg>
      <section>
        <div className="container">
          <Banner />
        </div>
      </section>
      <section className="container">
        <div className="products__main">
          <SectionTitle title="Nuestros productos" />
          <div className="products__container" id="products_container">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
