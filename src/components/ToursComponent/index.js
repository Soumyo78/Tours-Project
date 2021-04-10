import './style.css';
import Tour from '../TourComponent/index';

const Tours = ({tours, removeTour}) =>{

    return (
        <section className="tours-section-container">
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) =>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                })}
            </div>
        </section>
    );
}

export default Tours;