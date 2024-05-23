import Image from "next/image";

export default function About() {
    return(
        <section className="min-w-full pt-10 pb-20">
            <div className="flex min-w-full justify-between">
                <div className="flex flex-col gap-20 pt-20">
                    <div>
                        <h2 className="text-7xl text-greenTwo leading-normal">{"About Utah Grown"}</h2>
                        <p className="break-words hyphens-auto max-w-prose text-3xl leading-relaxed text-greyTwo">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore."}</p>
                    </div>
                    <div>    
                        <h2 className="text-7xl text-greenTwo leading-normal">{"Utah Grown Office"}</h2> 
                        <h3 className="text-4xl text-greyTwo leading-10">730 State Street <br/> Salt Lake City, Utah 84111</h3>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <Image
                        src="/assets/NormalizeItUtah.png"
                        alt="normalize Utah"
                        className="absolute"
                        width={800}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    );
} 