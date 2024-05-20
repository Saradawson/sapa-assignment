import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-full w-full">
        <header className="w-full h-full" style={{height:'75vh'}} >
          <div className= "h-full w-full relative text-center p-12 pb-0">
            <Image 
              src='/assets/TopHeaderImage.png'
              alt="Utah landscape"
              className="object-sale-down absolute pb-16"
              fill
              sizes="90vh"
            />
            <div className="relative flex flex-col items-center justify-between h-full w-full">
              <nav className="relative w-9/12 flex justify-evenly">
                <Link className="nav-link" href='/appointments'>APPOINTMENTS</Link>
                <Link className="nav-link" href='/medical'>MEDICAL</Link>
                <Link className="nav-link" href='/FAQs'>FAQs</Link>
                <Link className="nav-link" href='/Pharmacies'>PHARMACIES</Link>
                <Link className="nav-link" href='/About'>ABOUT</Link>
              </nav>
              <Image 
                src='/assets/updatedAssets/UtahGrownLogoWhiteBorder.png' 
                alt="Utah Grown logo"
                className="max-w-full relative"
                quality={100}
                width={700}
                height={550}
              />
            </div>
          </div>
        </header>
        <main>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
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
