

export default function Events() {
    return(
        <section className="w-full flex flex-col items-center p-6" style={{height: "75vh"}}>
            <h1 className="text-6xl text-greenOne my-4">Upcoming Utah Medical Card Events</h1>
            <div className="w-2/3 flex flex-col">
                <div className="border-color-greenTwo bg-greyThree border my-6 rounded-xl py-5 flex justify-evenly items-center">
                    <p className="text-2xl text-greenThree text-center">Downtown<br/> SLC</p>
                    <ui className="text-center flex flex-col items-start justify-evenly">
                        <h2 className="text-4xl text-greenTwo">Tuesday, October 3rd 2023</h2>
                        <p className="text-2xl text-greenThree text-center">9:00 am - 2:00pm</p>
                        <p className="text-2xl text-greenThree text-center">Renewals Only</p>
                    </ui>
                    <button className="text-2xl text-greenTwo border rounded-2xl p-2 bg-tanTwo ">Book Time</button>
                </div>
                <div className="border-color-greenTwo bg-greyThree border my-6 rounded-xl py-5 flex justify-evenly items-center">
                    <p className="text-2xl text-greenThree text-center">Price UT</p>
                    <ui className="text-center flex flex-col items-start justify-evenly">
                        <h2 className="text-4xl text-greenTwo">Thursday, October 19th 2023</h2>
                        <p className="text-2xl text-greenThree text-center">9:00 am - 4:00pm</p>
                        <p className="text-2xl text-greenThree text-center">Renewals Only</p>
                    </ui>
                    <button className="text-2xl text-greenTwo border rounded-2xl p-2 bg-tanTwo ">Book Time</button>
                </div>
                <div className="border-color-greenTwo bg-greyThree border my-6 rounded-xl py-5 flex justify-evenly items-center">
                    <p className="text-2xl text-greenThree text-center">St. George</p>
                    <ui className="text-center flex flex-col items-start justify-evenly">
                        <h2 className="text-4xl text-greenTwo">Friday, November 10th 2023</h2>
                        <p className="text-2xl text-greenThree text-center">10:00 am - 2:00pm</p>
                        <p className="text-2xl text-greenThree text-center">Renewals Only</p>
                    </ui>
                    <button className="text-2xl text-greenTwo border rounded-2xl p-2 bg-tanTwo ">Book Time</button>
                </div>
            </div>            
        </section>
    );
};