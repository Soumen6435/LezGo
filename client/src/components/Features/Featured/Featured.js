import React from 'react';
import "../../../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMapLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Featured = ({tour}) => {


    return (
        <div className="featured-item my-2 shadow">
            <img src={tour.selectedFile} alt="featured-place" />
            <div className="featured-item-content">
                <span><FontAwesomeIcon icon={faMapLocationDot}/>{tour.title}</span>
                <div>
                    {/* <p className="text">The land of white orchid, Kurseong lies high up in the hills spread along a forested ridge. Kurseong’s beauty and tranquility are breathtaking and the hill station is a perfect rejuvenating weekend retreat from Kolkata.</p> */}

                    <div><h4>Location:</h4> {tour.location}</div>

                    <div><h4>How to reach:</h4>{tour.howtoreach}</div>

                    <div><h4>Best Time to visit: </h4>Anytime of the year avoiding the rainy season.Places to Visit in Kurseong: Castle Tea Estate, Eagle’s Crag, Sitong.</div>

                    <div><h4>Things to do:</h4>{tour.thingstodo}</div>

                    <div><h4>Places to stay:</h4> Sunnyside Eco Homestay, Dreamhome Stay, Allita Hotel & Resorts</div>


                </div>
            </div>
        </div>

    )
}

export default Featured;