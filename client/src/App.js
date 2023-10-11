import {React , useEffect} from "react";
import { BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom';
import './styles.css'

import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Preloader";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";


const App = () => {
    // const dispatch =  useDispatch();
    
    // useEffect(()=>{
    //     dispatch( getTours() ); 
    // } , [dispatch]); 


    /* adding bom events  for scrolling*/
    useEffect(() => {
      let navbarDiv = document.getElementById('Navigation');
      const handleScroll = () => {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
          navbarDiv.classList.add('navbar-cng');
        } else {
          navbarDiv.classList.remove('navbar-cng');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
const navbarCollapseDiv=document.getElementById('navbar-collapse');
// const navbarShowBtn=document.getElementById('navbar-show-btn');
// const navbarCloseBtn=document.getElementById('navbar-close-btn');


/* for hiding the side bar using body click */
useEffect(() => {
  const navbarCollapseDiv = document.getElementById('navbar-collapse'); // Replace with the actual ID of your navbar-collapse element

  const handleClick = (e) => {
    if (
      e.target.id !== 'navbar-collapse' &&
      e.target.id !== 'navbar-show-btn' &&
      e.target.parentElement.id !== 'navbar-show-btn'
    ) {
      navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
  };

  document.addEventListener('click', handleClick);

  // Cleanup the event listener when the component unmounts
  return () => {
    document.removeEventListener('click', handleClick);
  };
}, []);

 /* stop transition and animation during window resizing */

useEffect(() => {
  let resizeTimer;

  const handleResize = () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

    return (

      <Router>

          <Preloader/>
          <Navbar />

            <Routes>

          <Route path="/" exact Component={() => <Navigate to="/tours" />} ></Route>
          <Route path="/tours" exact Component={Home} ></Route>
          <Route path="/tours/search" exact Component={Home} ></Route>
          <Route path='/Contact' exact Component={Contact} ></Route>

            </Routes>
            
          <Footer/>

      </Router>
      
    ) 
}

export default App;