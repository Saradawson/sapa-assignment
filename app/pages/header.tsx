import Image from "next/image";
import Link from "next/link";

export default function Header() {  
  
  
    return (
        <header className="bg-greenOne h-full">
              <div className="h-full relative text-center p-12 pb-0 block sm:hidden" style={{height:'75vh'}}>
                  <Image 
                    src='/assets/TopHeaderImage@2x.png'
                    alt="Utah landscape"
                    className=" absolute pb-16 w-full h-auto"
                    fill
                  />
                  <div className=" h-full relative flex flex-col items-center justify-between font-semibold">
                    <nav className="w-full lg:w-3/4 text-xl relative flex justify-between p-10 text-greenOne sm:flex-col">
                      <Link href='/appointments'>APPOINTMENTS</Link>
                      <Link href='/medical'>MEDICAL</Link>
                      <Link href='/FAQs'>FAQs</Link>
                      <Link href='/Pharmacies'>PHARMACIES</Link>
                      <Link href='/About'>ABOUT</Link>
                    </nav>
                    <Image 
                      src='/assets/updatedAssets/UtahGrownLogoWhiteBorder@2x.png' 
                      alt="Utah Grown logo"
                      className="sm:hidden h-3/5 w-auto relative"
                      width={685}
                      height={340}
                    />
                </div>
              </div>
              <div className="h-1/2 relative text-center p-12 pb-0 hidden sm:block">
                <Image 
                  src='/assets/TopHeaderImage.png'
                  alt="Utah landscape"
                  className="absolute pb-16"
                  fill
                />
                <div className=" h-full relative flex flex-col items-center justify-between font-semibold">
                <nav className="h-full text-xl leading-relaxed relative flex flex-col justify-between pb-10 text-greenOne">
                  <Link href='/appointments'>APPOINTMENTS</Link>
                  <Link href='/medical'>MEDICAL</Link>
                  <Link href='/FAQs'>FAQs</Link>
                  <Link href='/Pharmacies'>PHARMACIES</Link>
                  <Link href='/About'>ABOUT</Link>
                </nav>
                <Image 
                  src='/assets/updatedAssets/UtahGrownLogoWhiteBorder.png' 
                  alt="Utah Grown logo"
                  className="hidden sm:block h-1/4 w-auto relative"
                  width={685}
                  height={340}
                />
              </div>
            </div>
        </header>
    )
};