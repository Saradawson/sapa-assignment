import Header from "./pages/header";
import Events from "./pages/events";
import ThingsToKnow from "./pages/thingsToKnow";
import Ad from "./pages/ads"
import FAQ from './pages/faq'

export default function Page() {
  return (
    <div>
        <Header></Header>
        <main className="min-w-content p-20 flex flex-col justify-center">
          <h1></h1>
          <Events></Events>
          <ThingsToKnow></ThingsToKnow>
          <Ad></Ad>
          <FAQ></FAQ>
        </main>
        <footer>
        </footer>
    </div>
  );
}
