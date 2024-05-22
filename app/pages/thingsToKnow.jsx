import Image from "next/image";

export default function ThingsToKnow(){
    return (
        <section className="w-full py-8 flex flex-col items-center justify-evenly">
            <h2 className="text-4xl text-greenTwo">Things to know before your appointment</h2>
            <div>
                <div className="py-6 w-full flex items-center justify-start">
                    <Image
                        src="/assets/updatedAssets/Number1.png"
                        alt="number 1"
                        width={68}
                        height={69}
                    />
                    <h3 className="p-8 text-3xl text-greenTwo text-center">
                        {"You're going to register with the state of Utah. You can start this before you arrive."}
                    </h3>
                </div>
                <div>
                    <ui className="pl-40 flex flex-col gap-4">
                        <div className="flex items-center gap-6">
                            <button className="text-xl text-greenTwo border-color-tanTwo rounded-full p-2 w-60 bg-tanTwo">
                                UtahID.org
                            </button>
                            <h4 className="text-2xl text-greenTwo">Obtain access to your Utah Digital ID</h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="text-xl text-greenTwo border-color-tanTwo rounded-full p-2 w-60 bg-tanTwo">
                                EVS.Utah.gov
                            </button>
                            <h4 className="text-2xl text-greenTwo">Fill out all the fields until you get to “Awaiting Certification” status</h4>
                        </div>
                        <div className="pl-60">
                            <Image 
                                src="/assets/updatedAssets/AwaitingCert-Image.png" 
                                alt="Awaiting Certificate"
                                width={256}
                                height={108}
                            />
                        </div>
                    </ui>
                </div>
                <div className="py-6 w-full flex items-start">
                    <ui className="flex items-center">
                        <Image
                            src="/assets/updatedAssets/Number2.png"
                            alt="number 1"
                            width={68}
                            height={69}
                        />
                        <h3 className="mx-6 text-3xl text-greenTwo text-center">
                            {"Check in with your QMP"}
                        </h3>
                    </ui>
                    <ui className="flex flex-col pt-3 pl-4">
                        <h4 className="text-2xl text-greenTwo">{"1. QMP Registration"}</h4>
                        <h4 className="text-2xl text-greenTwo">{"2. Medical Evaluation/Consultation"}</h4>
                        <h4 className="text-2xl text-greenTwo">{"3. Payment"}</h4>
                    </ui>
                </div>       
                <div className="py-6 w-full flex items-start">
                    <ui className="flex items-center">
                        <Image
                        src="/assets/updatedAssets/Number3.png"
                        alt="number 1"
                        width={68}
                        height={69}
                        />
                        <h3 className="mx-8 text-3xl text-greenTwo text-center">
                            {"Renewal or New Patient?"}
                        </h3>
                    </ui>
                    <ui className="flex flex-col pt-3">
                        <h4 className="text-2xl text-greenTwo">{"If this is a renewal, congratulations you are ready to shop..."}</h4>
                        <h4 className="text-2xl text-greenTwo">{"If you are a new patient, here are some helps to get you started..."}</h4>
                        <ui className="self-end">
                            <h4 className="text-2xl text-greenTwo">{"1. Meet with Pharmacist"}</h4>
                            <h4 className="text-2xl text-greenTwo">{"2. Set up your Portal Account"}</h4>
                            <h4 className="text-2xl text-greenTwo">{"3. Start Shopping"}</h4>
                            <h4 className="text-2xl text-greenTwo">{"**Dont forget to take advantage of new patient deals**"}</h4>
                        </ui>
                    </ui>
                </div>               
            </div>
        </section>
    );
};