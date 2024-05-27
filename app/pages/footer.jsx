import Image from "next/image";

export default function Footer() {
    return(
        <footer className="w-full border-y-4 border-greenOne pt-5">
            <div className="lg:w-2/3 pb-3 w-full flex sm:flex-col sm:items-center items-end justify-center gap-10">
                <Image
                    src="/assets/UtahGrownLogo-Green@2x.png"
                    alt="green Utah Grown logo"
                    className="w-auto h-auto"
                    width={280}
                    height={126}
                />
                <h3 className="text-xl text-greenTwo">{"UTAH'S CANNABIS COMMUNITY"}</h3>
            </div>
            <div className="text-md bg-greenOne text-white flex justify-end gap-10 sm:pb-5 pb-10 sm:pr-0 pr-20">
                <p className="pt-1">&copy;2023 All Rights Reserved.</p>
                <p className="pt-1">Terms and Conditions</p>
                <p className="pt-1">Privacy Policy</p>     
            </div>
        </footer>
    );
}