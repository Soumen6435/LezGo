import React, { useState } from "react";
import '../../styles.css';
import { useDispatch } from 'react-redux';
import {useNavigate , useLocation} from 'react-router-dom';
import { getToursBySearch } from '../../actions/tours';




function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Header = () => {

    const dispatch=useDispatch();

    const query = useQuery();
    const navigate=useNavigate();
    const searchQuery = query.get('searchQuery');

    const [search,setSearch]=useState('');
 

    const searchTour = () => {
        console.log(search);

         if(search.trim()){
                dispatch(getToursBySearch(search));
                navigate(`/tours/search?searchQuery=${search || 'none'}`)
         }
       

    };

    const handleKeyPress=(e)=>{
        if(e.KeyCode==13){
            searchTour();
        }
    }


    return (

        <header className="flex">
            <div className="container">
                <div className="header-title">
                    <h1>Get Your Best Destination</h1>
                    <p>
                        Welcome! Here we are presenting LezGo web app,which provides you your best destination according to your budget.Your destination that evolves as you grow, learn, and experience the world. It is a destination where you are not merely a passenger, but the captain of your own ship, charting the course through the seas of life.
                    </p>
                </div>

                <div className="header-form">
                    <h2>Choose your Travel destination:</h2>
                    <form action="" className="flex">
                        <input type="text" className="form-control" placeholder="enter Location or Activity " onKeyDown={handleKeyPress} value={search}   onChange={(e)=> setSearch(e.target.value)}/>

                        <button type="submit" className="btn" value="Search" onClick={searchTour}>search</button>
                    </form>
                </div>
            </div>
        </header>


    )


}

export default Header;