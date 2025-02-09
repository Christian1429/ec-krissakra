import { Navbar } from "../components/storefront/Navbar";
import { Hero } from '../components/storefront/Hero';
import { CategorySelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";

export default function IndexPage() {
    return (
      <>
       <Hero />
       <CategorySelection/>
       <FeaturedProducts/>
      </>
    );
}