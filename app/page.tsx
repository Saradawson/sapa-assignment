import Header from "./pages/header";
import Events from "./pages/events";
import ThingsToKnow from "./pages/thingsToKnow";
import Ad from "./pages/ads"

export default function Page() {
  return (
    <div>
        <Header></Header>
        <main>
          <h1></h1>
          <Events></Events>
          <ThingsToKnow></ThingsToKnow>
          <Ad></Ad>
        </main>

        <footer>
        </footer>
    </div>
  );
}
