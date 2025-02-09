import { Navbar } from "../components/storefront/Navbar";
import { Hero } from '../components/storefront/Hero';
import { CategorySelection } from "../components/storefront/CategorySelection";

export default function IndexPage() {
    return (
      <>
       <Hero />
       <CategorySelection/>
      </>
    );
}