import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header style={{textAlign: 'center'}} >
          <div>
            <Image 
              src='/assets/TopHeaderImage.png'
              alt="Utah landscape"
              quality={100}
              fill
              sizes='100vw'
              style={{
                position: 'absolute'
              }}
            />
            <div>
              <nav style={{position: 'relative'}}>
                <Link className="nav-link" href='/appointments'>APPOINTMENTS</Link>
                <Link className="nav-link" href='/medical'>MEDICAL</Link>
                <Link className="nav-link" href='/FAQs'>FAQs</Link>
                <Link className="nav-link" href='/Pharmacies'>PHARMACIES</Link>
                <Link className="nav-link" href='/About'>ABOUT</Link>
              </nav>
              <Image 
                src='/assets/updatedAssets/UtahGrownLogoWhiteBorder.png' 
                alt="Utah Grown logo"
                quality={100}
                width={700}
                height={550}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  position: 'relative'
                  }}
              />
            </div>
          </div>
        </header>
    </main>
  );
}
