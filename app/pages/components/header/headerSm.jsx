import Image from "next/image";
import Link from "next/link";

export default function HeaderSm(){
    return(  
        <div className="h-1/2 relative text-center p-12 pb-0">
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
                className="h-1/4 w-auto relative"
                width={685}
                height={340}
            />
            </div>
        </div>
    );
}