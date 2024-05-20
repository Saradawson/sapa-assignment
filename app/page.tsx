import Header from "./pages/header";
import Events from "./pages/events"

export default function Page() {
  return (
    <div className="min-h-screen w-screen">
        <Header></Header>
        <main className="flex flex-col items-center max-h-screen w-screen">
          <h1 className="text-4xl text-greenTwo my-2">{"Utah's Cannabis Community"}</h1>
          <Events></Events>
        </main>
        <footer>
          <h2>footer</h2>
          <h2>footer</h2>
          <h2>footer</h2>
          <h2>footer</h2>
        </footer>
    </div>
  );
}
