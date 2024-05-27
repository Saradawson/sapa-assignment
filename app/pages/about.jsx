import Image from "next/image";

export default function About() {
    return(
        <section className="w-full">
            <div className="w-full flex sm:flex-col md:flex-col">
                <div className="lg:w-1/2 flex flex-col justify-around">
                    <div>
                        <h2 className="text-4xl text-greenTwo leading-normal">{"About Utah Grown"}</h2>
                        <p className="break-words hyphens-auto max-w-prose text-xl leading-relaxed text-greyTwo">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore."}</p>
                    </div>
                    <div>    
                        <h2 className="text-4xl text-greenTwo leading-normal">{"Utah Grown Office"}</h2> 
                        <h3 className="text-2xl text-greyTwo leading-10">730 State Street <br/> Salt Lake City, Utah 84111</h3>
                    </div>
                </div>
                <div className="lg:w-1/2 flex items-end">
                    <Image
                        src="/assets/NormalizeItUtah@2x.png"
                        alt="normalize Utah"
                        className="w-full h-auto"
                        width={1319}
                        height={1567}
                    />
                </div>
            </div>
        </section>
    );
} 