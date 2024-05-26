import Image from "next/image";
import Link from "next/link";

import HeaderOther from './components/header/headerOther';
import HeaderSm from './components/header/headerSm';

export default function Header() {  
  
  
    return (
        <header className="bg-greenOne h-full">
            <div className="block sm:hidden" style={{height:'75vh'}}>
                <HeaderOther></HeaderOther>
            </div>
            <div className="hidden sm:block">   
              <HeaderSm></HeaderSm>
            </div>
        </header>
    )
};