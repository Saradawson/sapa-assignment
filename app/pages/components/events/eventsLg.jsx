export default function EventsLg(){
    return(
        <div>
            <h2 className="text-4xl text-center text-greenOne my-4">Upcoming Utah Medical Card Events</h2>
            <div className="w-full text-center flex flex-col">
                <div className="border-color-greenTwo bg-greyThree border my-6 rounded-xl p-5 flex justify-around items-center">
                    <p className="text-xl w-1/4 text-greenThree text-center">Downtown<br/> SLC</p>
                    <ui className="text-center w-1/2 flex flex-col items-center justify-evenly">
                        <h3 className="text-3xl text-greenTwo">Tuesday, October 3rd 2023</h3>
                        <p className="text-xl text-greenThree text-center">9:00 am - 2:00pm</p>
                        <p className="text-xl text-greenThree text-center">Renewals Only</p>
                    </ui>
                    <button className="float-right w-1/4 text-xl text-greenTwo border-color-tanTwo rounded-3xl p-4 px-4 bg-tanTwo ">Book Time</button>
                </div>
                <div className="border-color-greenTwo bg-greyThree border my-6 rounded-xl p-5 flex justify-around items-center">
                    <p className="text-xl w-1/4 text-greenThree text-center">Price UT</p>
                    <ui className="text-center w-1/2 flex flex-col items-center justify-evenly">
                        <h3 className="text-3xl text-greenTwo">Thursday, October 19th 2023</h3>
                        <p className="text-xl text-greenThree text-center">9:00 am - 4:00pm</p>
                        <p className="text-xl text-greenThree text-center">Renewals Only</p>
                    </ui>
                    <button className="float-right w-1/4 text-center text-xl text-greenTwo border-color-tanTwo rounded-3xl p-4 px-4 bg-tanTwo">Book Time</button>
                </div>
                <div className="border-color-greenTwo bg-greyThree border my-6 rounded-xl p-5 flex justify-around items-center">
                    <p className="text-xl w-1/4 text-greenThree text-center">St. George</p>
                    <ui className="text-center w-1/2 flex flex-col items-center justify-evenly">
                        <h3 className="text-3xl text-greenTwo">Friday, November 10th 2023</h3>
                        <p className="text-xl text-greenThree text-center">10:00 am - 2:00pm</p>
                        <p className="text-xl text-greenThree text-center">Renewals Only</p>
                    </ui>
                    <button className="float-right w-1/4 text-xl text-greenTwo border-color-tanTwo rounded-3xl p-4 px-4 bg-tanTwo ">Book Time</button>
                </div>
            </div>                   
        </div>
    );
}