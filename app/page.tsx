import Header from "./pages/header";
import Events from "./pages/events";
import ThingsToKnow from "./pages/thingsToKnow";
import Ad from "./pages/ads";
import FAQ from './pages/faq';
import Pharmacies from './pages/pharmacies';

export default function Page() {
  return (
    <div>
        <Header></Header>
        <main className="min-w-fit flex flex-col items-center">
          <div className="max-w-fit">
            <h1></h1>
            <Events></Events>
            <ThingsToKnow></ThingsToKnow>
            <Ad></Ad>
            <FAQ></FAQ>
            <Pharmacies></Pharmacies>
          </div>
        </main>
        <footer>
        </footer>
    </div>
  );
}
