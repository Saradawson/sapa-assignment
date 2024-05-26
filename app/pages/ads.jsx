import Image from "next/image";

import AdsLg from './components/ads/adsLg';
import AdsOther from './components/ads/adsOther';

export default function Ads() {
    return (
        <section className="w-full flex flex-col items-center ">
          {/* ads @lg media */}
          <div className="block sm:hidden md:hidden">
            <AdsLg></AdsLg>
          </div>
          {/* ads @md and @sm media */}
          <div className="w-full hidden sm:block md:block">
            <AdsOther></AdsOther> 
          </div>
        </section>
    );
}