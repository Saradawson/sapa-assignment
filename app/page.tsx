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
    <div className="min-w-screen min-h-screen">
        <Header></Header>
        <main className="min-w-fit flex flex-col items-center px-20">
          <div className="max-w-fit">
            <h1></h1>
            <Events></Events>
            <ThingsToKnow></ThingsToKnow>
            <Ad></Ad>
            <FAQ></FAQ>
            <Pharmacies></Pharmacies>
            <About></About>
          </div>
        </main>
        <Footer></Footer>
    </div>
  );
}
