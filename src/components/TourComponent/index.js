import './style.css';
import { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) =>{

    const [readMore, setReadMore] = useState(false)

    return(
        <article className="single-tour-component">
            <img className="tour-images" src={image} alt={name} />
            <footer className="tour-footer-container">
                <div className="tour-info">
                    <span className="name-price-container">
                        <h3 className="name-text">{name}</h3>
                        <h4 className="price-text">₹ {price}</h4>
                    </span>
                    <p className="info-text">
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <button className="read-more-show-less-btn" onClick={()=>setReadMore(!readMore)}>
                            {readMore ? "Show Less" : "Read More"}
                        </button>
                    </p>
                    <div className="delete-btn-container">
                        <button className="delete-btn" onClick={()=> removeTour(id)}>Not Interested</button>
                    </div>
                </div>
            </footer>
        </article>
    );
}

export default Tour;