import './App.css'
import logo from './assets/logo.svg'
import backgroundImage from './assets/hero-banner.jpg'
import logo2 from './assets/about-img.png'
import banner from './assets/about-banner.png'


// src/App.jsx
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Dynamically add Bootstrap CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
    document.head.appendChild(link);

    // Dynamically add Bootstrap JS Bundle (includes Popper)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the link and script
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className='row ' id='headnav'>
        <div className='col '>
          <span><i class="bi bi-clock-fill" style={{color:"brown"}}></i> </span> 
           <span style={{color:"brown"}}>Opening Hours: </span>
           <span style={{color:"white"}}> 10:00 AM TO 9:00 PM</span>
        </div>
        <div className='col text-center'>
        <i class="bi bi-facebook me-3"  style={{color:"white"}}></i>
        <i class="bi bi-instagram  me-3"  style={{color:"white"}}></i>
        <i class="bi bi-twitter-x  me-3"  style={{color:"white"}}></i>
        <i class="bi bi-youtube  me-3"  style={{color:"white"}}></i>

        </div>
        <div className='col text-end'>
          <span style={{color:"brown"}}> <i class="bi bi-geo-alt-fill"> Location:</i></span>
          <span style={{color:"white"}}> 13 MAIN STREET,NEW YORK</span>
      
        </div>
    
      </div>

      <div className="row p-3  sticky-top" id="nav" >
       <div className=' col-lg col-md-3  '>
       <img src={logo}  alt="Example " style={{height:"50px" }} /> 
       </div>
       <div className=' col-lg col-md-6  '> 
         <div className='row mt-2'>
          <div className='col-lg col-12-md'><a href='#'className=" text-white text-decoration-none fw-bold" >HOME</a></div>
          <div className='col-lg col-12-md'><a href='#' className=" text-white text-decoration-none fw-bold">ABOUT</a></div>
          <div className='col-lg col-12-md'><a href='#' className=" text-white text-decoration-none fw-bold">MENU</a></div>
          <div className='col-lg col-12-md'><a href='#' className=" text-white text-decoration-none fw-bold">BLOG</a></div>
          <div className='col-lg col-12-md'><a href='#' className=" text-white text-decoration-none fw-bold">CONTACTS</a></div>
           
         </div>
 
       </div>
       <div className=' col-lg col-md-3   text-lg-end text-md-start'>
        <button type='button' className='btn btn-warning text-white '>BOOK A TABLE</button>

       </div>
       </div>
        {/* Background Image */}
      <div 
        className="row w-100"
        style={{
          height: '600px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize:"cover",
          backgroundPosition: 'center',
          overflow:"auto"
        }}>  
        <div class ="col-md " id='main1'>
          <div className='row'>
            <div style={{height:"200px"}}>

            </div>
            <div className='col-md text-center'>
            <span style={{color:"white",fontFamily:"serif"}}>WELCOME TO HE KEOFI</span>
            <h2 style={{fontFamily:"revert",fontSize:"70px",color:"white",fontStyle:'oblique'}}>Great Coffee</h2>
            <h2 style={{fontFamily:"revert",fontSize:"70px",color:"white",fontStyle:'oblique'}}>Good Vibes</h2>
            <button type='button'className='btn btn-warning text-white me-2 mt-3' >EXPLORE MORE </button>
            <button type='button'className='btn btn-dark text-white  mt-3'>GET DELIVERY</button>


            </div>

          </div>
       


        </div>
        <div className ="col-md">
        

        </div>

      

      </div>
      <div className='row' id="banner2">
        <div className='col-md text-center mt-3'> 
          <h5 style={{color:"brown",fontStyle:'oblique',fontFamily:"revert",textAlign:"right"}}>ABOUT US</h5>
          <h1 className="mt-5" style={{color:"white",fontStyle:'oblique',fontFamily:"revert",fontSize:"50px" ,textAlign:"right"}}>Organic & Fresh Coffee</h1>
          <h1  style={{color:"white",fontStyle:'oblique',fontFamily:"revert",fontSize:"50px",textAlign:"right"}}>Provider Center</h1>
          <p className=' text-white ' style={{textAlign:"right" , lineHeight:"2",overflow:"auto"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum inventore debitis corrupti nihil earum, magnam ex delectus consectetur distinctio ea molestias vel quis ipsum autem quam odit repellendus facere natus sequi veritatis eos incidunt alias a! Reprehenderit doloremque, quod nemo quas autem blanditiis pariatur beatae nobis, amet quam sequi. Veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta quasi ad! Quo harum excepturi aliquam suscipit eum vitae laudantium nulla ipsum quos, necessitatibus porro repellat velit quae illum consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates l.</p>
          <div id="profile">
          <img src={logo2}  alt="" style={{float:"left",position:'relative',top:"10px",left:"5px"}}/> <span style={{color:"white"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, vero Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum corporis non eius quam, labore sequi ea itaque id.</span>


          </div>


        </div>

        <div className='col-md mt-5'style={{
          height: '600px',
          backgroundImage: `url(${banner})`,
          backgroundSize:"cover",
          backgroundPosition: 'center',
          overflow:"auto"
        }}>  
       

        </div>


      </div>
    
       
      </div>



      
   
  );
};

export default App;
