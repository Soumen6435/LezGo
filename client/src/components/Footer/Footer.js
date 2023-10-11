import React from 'react';
import '../../styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faPinterest,faFacebook,faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="py-4">
        <div className="container footer-row">
            <div className="footer-item">
                <a href="index.html" className="site-brand">
                    Lez<span>Go</span>
                </a>
                <p className="text">Welcome to Lez<span>Go</span>, where we turn your travel dreams into unforgettable experiences. With a passion for exploration and a commitment to quality, we're here to guide you on journeys that will leave you with lasting memories. Our team of expert travel planners is dedicated to crafting personalized adventures that cater to your unique interests and desires. Whether you crave cultural immersion, scenic landscapes, or thrilling adventures, we have a diverse range of destinations and itineraries to suit your preferences. Join us on a voyage of discovery, where every trip is a story waiting to be told. Start your journey with Lez<span>Go</span> today and let us be your trusted partner in travel.
                </p>
            </div>
            <div className="footer-item">
                <h2>Follow us on:</h2>
                <ul className="social-links">
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faPinterest} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faGoogle} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-item">
                <h2>Popular Places:</h2>
                <ul>
                    <li><a href="#">Tajpur</a></li>
                    <li><a href="#">Shantiniketan</a></li>                    
                    <li><a href="#">Bakkhali</a></li>
                    <li><a href="#">Mandarmani</a></li>
                    <li><a href="#">Rinchenpong</a></li>
                </ul>
            </div>

            <div className="subscribe-form footer-item">
                <h2>Subscribe for Newsletter!</h2>
                <form className="flex">
                    <input type="email" placeholder="Enter Email" className="form-control"/>
                    <input type="submit" className="btn" value="Subscribe"/>
                </form>
            </div>

        </div>
    </footer>
  )
}

export default Footer;