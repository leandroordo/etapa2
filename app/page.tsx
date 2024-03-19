import Banner from "@/components/banner/banner";
import SectionTitle from "@/components/sectiontitle/sectiontitle";
import ProductCard from "@/components/productCard/productCard";
import Toast from "@/components/toast/toast";
import { fetchProducts } from "./lib/data";
import "react-toastify/dist/ReactToastify.css";

const Home = async () => {
  const products = await fetchProducts();

  return (
    <>
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
              <ProductCard
                key={product.id}
                product={JSON.parse(JSON.stringify(product))}
              />
            ))}
          </div>
        </div>
        <Toast />
      </section>
    </>
  );
};

export default Home;
