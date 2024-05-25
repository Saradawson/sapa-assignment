import Header from "./pages/header";
import Events from "./pages/events";
import ThingsToKnow from "./pages/thingsToKnow";
import Ad from "./pages/ads";
import FAQ from './pages/faq';
import Pharmacies from './pages/pharmacies';
import About from "./pages/about";
import Footer from "./pages/footer";

export default function Page() {
  return (
    <div className="min-h-screen">
        <Header></Header>
        {/* <main className="mx- flex flex-col items-center px-20">
          <div className="">
            <h1 className="text-center  text-4xl leading-relaxed pb-10 text-greenTwo">{"Utah's Cannabis Community"}</h1>
            <Events></Events>
            <ThingsToKnow></ThingsToKnow>
            <Ad></Ad>
            <FAQ></FAQ> 
            <Pharmacies></Pharmacies>
            <About></About>
          </div>
        </main>
        <Footer></Footer> */}
    </div>
  );
}
