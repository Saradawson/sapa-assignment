import Image from "next/image";

export default function Footer() {
    return(
        <footer className="min-w-full border-y-4 border-greenOne pt-5">
            <div className="w-2/3 flex items-end justify-center gap-10">
                <Image
                    src="/assets/UtahGrownLogo-Green.png"
                    alt="green Utah Grown logo"
                    width={280}
                    height={126}
                />
                <h3 className="text-2xl text-greenTwo">{"UTAH'S CANNABIS COMMUNITY"}</h3>
            </div>
            <div className="w-full text-2xl bg-greenOne text-white flex justify-end gap-20 pr-64 pt-5 pb-20">
                <p>&copy;2023 All Rights Reserved.</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>     
            </div>
        </footer>
    );
}