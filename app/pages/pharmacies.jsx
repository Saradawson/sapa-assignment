export default function Pharmacies() {
    const pharmLocations = ["Dragonfly Wellness", "Bloc Pharmacy", "Beehive Farmacy", "Cannabist", "Curaleaf", "The Flower Shop", "WholesomeCo", "Zion Medicinal"]
    
    const pharmInfo = {
        "Dragonfly Wellness": {
            "addresses": ["711 South State Street, Salt Lake City UT 84111", "20 Main Street, Price UT 84501"],
            "phone": ["801-413-6945", "435-637-3770"],
            "website": "www.dragonflywellness.com"
        },
        "Bloc Pharmacy": {
            "addresses": ["10392 South Jordan Gateway South Jordan UT 84095", "1624 S Convention Center Dr. St. George UT 84790"],
            "phone": ["385-249-9400", "435-216-3400"],
            "website": "www.blocdispensary.com"    
        },
        "Beehive Farmacy": {
            "addresses": ["1991 S 3600 W Salt Lake City UT 84004", "870 W 1150 S Suite C Brigham City UT 84032"],
            "phone": ["385-212-0088", "435-919-0966"],
            "website": "www.beehivefarmacy.com"   
        },
        "Cannabist": {
            "addresses": ["484 South 1750 West Springville UT 84663"],
            "phone": ["385-327-0922"],
            "website": "www.gocannabist.com"   
        },
        "Curaleaf": {
            "addresses": ["3633 N Thanksgiving Way, Lehi UT 84043", "1351 Kearns Blvd Suite 110-B Park City UT 84060", "222 N Draper Ln Provo UT 84601", "757 S 1040 W Payson UT 84651"],
            "phone": ["385-338-8010", "435-252-1052", "801-872-7447", "385-404-4422"],
            "website": "www.curaleaf.com"   
        },
        "The Flower Shop": {
            "addresses": ["3775 S Wall Ave South Odgen UT 84405", "2150 N Main St. Suite 1 North Logan UT 84341"],
            "phone": ["385-289-1800(Ext 1)", "385-289-1800(Ext 2)"],
            "website": "www.theflowershopusa.com"   
        },
        "WholesomeCo": {
            "addresses": ["580 W 100 N Suite 1, West Bountiful UT 84010"],
            "phone": ["801-695-4480"],
            "website": "www.wholesome.co"   
        },
        "Zion Medicinal": {
            "addresses": ["301 S Main St. Cedar City UT 84720"],
            "phone": ["435-244-4485"],
            "website": "www.zionmed.co"   
        },
    }

    function PharmacyDivCreator(pharmacy) {
        return(
            <div className="">
                <h3 className="text-4xl text-greenThree leading-relaxed">{pharmacy}</h3>
                <div className=" flex justify-between">
                    <ui className="flex flex-col w-1/2">
                        {pharmInfo[pharmacy]["addresses"].map(key => (<p key={key} className="text-3xl text-greyTwo">{key}</p>))}
                    </ui>
                    <ui className="flex flex-col w-1/4">
                        {pharmInfo[pharmacy]["phone"].map(key => (<p key={key} className="text-3xl text-greyTwo">{key}</p>))}
                    </ui>
                    <p className="text-3xl text-greyTwo w-1/4">{pharmInfo[pharmacy]["website"]}</p>
                </div>
            </div>
        );
    };

    return (
        <section className="flex flex-col items-start gap-10">
            <h2 className="text-7xl text-greenTwo">{"Utah Medical Cannabis Pharmacies"}</h2>
            <div className=" flex flex-col justify-start gap-7">
                {PharmacyDivCreator("Dragonfly Wellness")}
                {PharmacyDivCreator("Bloc Pharmacy")}
                {PharmacyDivCreator("Beehive Farmacy")}
                {PharmacyDivCreator("Cannabist")}
                {PharmacyDivCreator("Curaleaf")}
                {PharmacyDivCreator("The Flower Shop")}
                {PharmacyDivCreator("WholesomeCo")}
                {PharmacyDivCreator("Zion Medicinal")}
            </div>
            <button></button>
        </section>
    );
};