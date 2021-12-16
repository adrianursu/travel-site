import React from 'react'
import CardItem from '../Card/CardItem/CardItem'
import './Card.css'
import image9 from '../../images/img-9.jpg';
import image8 from '../../images/img-8.jpg';
import image6 from '../../images/img-7.jpg';
import image5 from '../../images/img-5.jpg';
import image4 from '../../images/img-4.jpg';
import image3 from '../../images/img-3.jpg';

function Card() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image9}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services" />

                        <CardItem
                            src={image8}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services" />

                        <CardItem
                            src={image6}
                            text="Take free lessons of photography in Chicago"
                            label="Self Development"
                            path="/services" />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src={image5}
                            text="Check out the coolest pub in London"
                            label="Entertainment"
                            path="/services" />

                        <CardItem
                            src={image4}
                            text="Can you imagine playing football being covered by water?"
                            label="Sport"
                            path="/services" />

                        <CardItem
                            src={image3}
                            text="Getting back to cruising on Pacific Ocean"
                            label="Holiday"
                            path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;
