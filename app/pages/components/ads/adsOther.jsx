import Image from "next/image";

export default function AdsOther(){
    return(
        <div className="w-full flex flex-col items-center ">
            <Image 
            src="/assets/MockBannerAd.png" 
            alt="Leaf Nation"
            className="w-full"
            width={1200}
            height={300}
            />
            <div className="max-w-full flex flex-col-reverse text-center items-center py-20 gap-20">
            <Image 
                src="/assets/Consultation.png"
                alt="consultation"
                className="w-full"
                width={640}
                height={553}
            />
            <div className="w-full p-1 flex flex-col items-center">
                <h2 className="text-3xl leading-relaxed text-greenTwo">Utah Medical Cards</h2>
                <p className="break-words hyphens-auto max-w-prose text-lg leading-loose text-greyTwo">{"A medical cannabis card, also known as a medical marijuana card, is a state-issued identification card that allows qualified patients to legally purchase and use medical cannabis for the treatment of specific medical conditions. In Utah, a card is required to access and purchase medical cannabis products from state-licensed dispensaries. Having a medical card does not allow you to possess any cannabis product but only the products you purchased under your PAT (Medical Card ID number)."}</p> 
            </div>
            </div>
            <Image
            src="/assets/updatedAssets/ReviewBanner.png"
            alt="Review banner"
            className="w-full"
            width={1182}
            height={181}
            />
      </div>     
    );
}