import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMapLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createTour } from '../../actions/tours';
import '../../styles.css';
import useStyles from './contactStyle';
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";



const Contact = () => {
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



    const classes=useStyles();


    const [tourData, setTourData] = useState({creator:'',number:'', title: '',location:'', selectedFile: '',howtoreach:'',thingstodo:'' });
    const dispatch = useDispatch();
      
        // useEffect(() => {
        //   if (tour) setTourData(tour);
        // }, [tour]);
        // const TourData={ ...Object.entries(tourData) };
        const handleSubmit = async (e) => {
          e.preventDefault();
          dispatch(createTour(tourData));
          console.log(tourData);

        };

        const handleChange = (e)=>{
          setTourData({...tourData,[e.target.name]:e.target.value});
        }

        
        

        const [text1value,settext1value]=useState('');
        const [text2value,settext2value]=useState('');
        // const handleText1Change=(e) => setTourData({howtoreach: settext1value(e.target.value) });

        // const handleText2Change=(e) => setTourData({thingstodo: settext2value(e.target.value) });

      
        const styleObj={
          "resize":"none"
        }

  return (
    <div>
    {/* {{!-- header starts here --}} */}
    <header className="flex py-4" >
        <div className="container">
            <div className="header-title">
                <h1>Contact</h1>
                <p>
                    Need assistance or have questions about your upcoming adventure? Reach out to us anytime at LezGo. Whether it's by phone, email, live chat on our website, or through social media, we're here to provide the answers and support you need. Your travel experience matters to us, and we're eager to help you create unforgettable memories. Get in touch today, and let's make your next journey extraordinary!
                </p>
            </div>
        </div>
    </header>
    {/* {{!-- header ends here --}} */}


    {/* {{!-- contact section strats here --}} */}
    <section id="contact" className="py-4">
        <div className="container">
            <div className="title-wrap">
                <span className="sm-title">get in touch with us</span>
                <h2 className="lg-title">Contact Us as An Agent</h2>
            </div>

            <div className="contact-row">
                <div className="contact-left">
                    <form action="" className="contact-form" onSubmit={handleSubmit} autoComplete='off' noValidate>
                        <input name='creator' type="text" className="form-control" placeholder="Your Name" value={tourData.creator} onChange={handleChange}/>
                        <input name='number' type="number" className="form-control" placeholder="Your Mobile Number" value={tourData.number} onChange={handleChange}/>

                        <input name='title' type="text" className="form-control" placeholder="Title" value={tourData.title} onChange={handleChange}/>

                        <input name='location' type="text" className="form-control" placeholder="Location" value={tourData.location} onChange={handleChange}/>

                        <input name='howtoreach' type='text' id="howtoreach" cols="30" rows="2" className="form-control" placeholder="How To Reach" style={styleObj} value={tourData.howtoreach} onChange={handleChange}/>

                        <input name='thingstodo' type="text" id="thingstodo" cols="30" rows="2" className="form-control" placeholder="Things to Do" style={styleObj} value={tourData.thingstodo} onChange={handleChange}/>

                        <div className={classes.Fileinput}>
                            <FileBase name='selectedFile' type="file" multiple={false} onDone={({ base64 }) => setTourData({ ...tourData, selectedFile: base64 })}>
                            
                            </FileBase>
                        </div>
                        
                        
                        <input type="submit" className="btn" value="submit" />
                    </form>
                </div>

                <div className="contact-right my-2">
                    <div className="contact-item">
                        <span className="contact-icon flex">
                        <FontAwesomeIcon icon={faPhone} />
                        </span>

                        <div>
                            <span>Phone</span>
                            <p className="text">+91-8583891530
                            </p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon flex">
                        <FontAwesomeIcon icon={faMapLocationDot}/>
                        </span>

                        <div>
                            <span>Address</span>
                            <p className="text">Kolkata,West Bengal
                            </p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon flex">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </span>

                        <div>
                            <span>Email</span>
                            <p className="text">info@lezgo.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    {/* {{!-- contact section ends here --}} */}

    </div>
  )
}

export default Contact;

