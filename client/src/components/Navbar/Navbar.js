import React from "react";
import { Link } from "react-router-dom";
import '../../styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark,faBars} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    

    const navbarCollapseDiv=document.getElementById('navbar-collapse');
    const navbarShowBtn=document.getElementById('navbar-show-btn');
    const navbarCloseBtn=document.getElementById('navbar-close-btn');

    /* show navbar */
    const collapseRemove=()=>{
        const navbarCollapseDiv=document.getElementById('navbar-collapse');
        navbarCollapseDiv.classList.add('navbar-collapse-rmw');
    }

    /* hide side bar */
    const collapseAdd=()=>{
        const navbarCollapseDiv=document.getElementById('navbar-collapse');
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }



    /* stop transition and animation during window resizing */
    
    // let resizeTimer;
    // window.addEventListener('resize',()=>{
    //     document.body.classList.add('resize-animation-stopper');
    //     clearTimeout(resizeTimer);
    //     resize=setTimeout(()=>{
    //         document.body.classList.remove('resize-animation-stopper');
    //     },400)
    // })


    return(
        <div>
        <nav className="navbar" id="Navigation">
        <div className="container flex">

            <a href="#" className="site-brand">
                Lez<span>Go</span>
            </a>

            <button type="button" id="navbar-show-btn" className="flex" onClick={collapseRemove}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div id="navbar-collapse">
                <button type="button" id="navbar-close-btn" className="flex" onClick={collapseAdd}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <ul className="navbar-nav">
                    <Link to='/'>
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    </Link>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Services</a></li>

                    <Link to='/Contact'>
                        <li className="nav-item" ><a  className="nav-link">Contact</a></li>
                    </Link>

                    <div className="rgstrDiv">
                    <li className="nav-item rgstr"><a href="#" className="nav-link">Register</a></li>
                    </div>
                    

                </ul>

            </div>
        </div>

      </nav>
        </div>
    )
}
export default Navbar;