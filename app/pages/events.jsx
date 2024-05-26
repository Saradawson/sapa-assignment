import EventsOther from './components/events/eventsOther';
import EventsLg from './components/events/eventsLg';

export default function Events() {
    return(
        <section className="w-full text-center flex flex-col items-center">
            <div className="hidden sm:block md:block">
                <EventsLg></EventsLg>          
            </div>         
            <div className="block sm:hidden md:hidden">
                <EventsOther></EventsOther>        
            </div>
        </section>
    );
};