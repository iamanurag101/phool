import { SquareArrowOutUpRight } from "lucide-react";

import "./styles.scss"
import SearchBar from "@/components/searchbar/page";
import Navlink from "@/components/common/nav-link/page";
import StatsBanner from "@/components/statsBanner/page";
import Reviews from "@/components/reviews/page";
import Faq from "@/components/faq/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="title">Bringing Nature <span>Closer</span> to Home</div>
        <SearchBar />
      </div>
      <div className='text-content'>
        <h1 className='title'>Popular Plants</h1>
        <Navlink href='/catalogue'>View More <SquareArrowOutUpRight className='icons'/></Navlink>
      </div>
      <StatsBanner />
      <Reviews />
      <Faq />
      <Footer />
    </>
  );
}
