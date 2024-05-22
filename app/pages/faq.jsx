import Link from "next/link";

export default function FAQ() {
    return (
        <section className="flex w-full py-20">
            <div className="flex flex-col max-w-fit">
                <h2 className="text-5xl leading-loose text-greenTwo max-w-fit">{"FAQs..."}</h2>
                <div className="flex flex-col max-w-fit">  
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"If I don’t qualify, do i still have to pay the QMP?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"What are Utah’s qualifying medical conditions?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"Is documentation required to prove you have a medical condition?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"If I have a medical cannabis card, can I consume in public?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"What are the eligiblity requirements for a Utah medical cannabis card?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"What is the complete cost to get a medical cannabis card?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"How long does it take to receive your card?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"Where can I purchase medical cannabis in Utah?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"Can I grow my own cannabis plants with a medical cannabis card?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"How long is a medical cannabis card valid?"}</Link>
                    <Link href="/FAQs" className="leading-relaxed max-w-prose text-3xl text-greenThree" >{"Is my personal information confidential when applying for a medical cannabis card?"}</Link>
                </div>
            </div>
        </section>
    );
};