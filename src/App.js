import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/dist/js/bootstrap.bundle'

import './App.css';

function App() {
  return (
    <>
    <div className='section bg-dark'>
   <div className='container py-4'>
    <div className='row pb-2 py-4'>
      <div className='col-lg-6 col-md-12 col-sm-12 text-lg-start text-center'>
     <h1 className='py-5 hfirst'>
     <br/>
      Praveen <br/>
      Kumar
      <br/>
     </h1>
     <p className='m-0 fs-4 text-lg-start text-center text-white'>
      <pre>
      Full Stack Developer
      </pre>
     </p>
     <ul class="nav">
  <li class="nav-item">
  <a className='text-white' target='_blank' href='https://www.linkedin.com/in/praveen-kumar-593b8a271/'><i class="fab fa-linkedin fs-2 me-3"></i></a>
  </li>
  <li class="nav-item">
  <a className='text-white text-lg-start text-center' target='_blank' href='https://github.com/thepraveen123'><i class="fab fa-github fs-2"></i></a>


  </li>
  <li class="nav-item">
  <a className='text-white text-lg-start text-center' target='_blank' href=' href="http://Instagram.com/THEPRAVEENCHAUHAN'><i class="fab fa-instagram fs-2 ms-3"></i></a>
  </li>
 
</ul>

<div className='pt-5 '><a href="mailto:praveenkumaar729@gmail.com" class="custom-button px-4 py-2 text-decoration-none">Let's Chat</a></div>

    
      </div>

      <div className='col-lg-6 col-md-12 col-sm-12 bg-transparent'>
      <div className='card border-0 rounded-0 bg-transparent'>
        <div className='card-body'>
          <img src='/image/pp.jpg' alt='profile' className='img-fluid rounded-circle' />
        </div>
      </div>
      </div>


    </div>
   </div>
   </div>

   {/*  about me */}



   <div className='about bg-dark'>
    <div className='container py-3'>
      <div className='row py-4'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h3 className='text-white text-lg-start text-center fs-2'>About Me</h3>
          <p className='text-white fs-5 fw-500 '> I am a Full Stack Developer |  a Learner <br/>
         and now  Looking for an organization where I can expand my knowledge and capabilities with polishing my skills. I utilize my skills in frontend using  HTML5, Cascade Style Sheets (CSS3), Bootstrap,Javascript, as well in backend . Hard-working, goal-oriented, and a team player seeking an opportunity to incorporate my skills and put them to use.
          </p>
        </div>

       <div className='col-lg-6 col-md-12 col-sm-12'>
        <h4 className='mb-3 text-white mt-2'>Any Type of Query & Discussion</h4>
        <h5 className="">
        <i class="fas fa-envelope pe-2 text-white"></i><a href="mailto:praveenkumaar729@gmail.com" class="text-decoration-none text-white"><span className="mail ">Email me</span></a>
        </h5>
       </div>

      </div>
    </div>
   </div>

    {/* education */}
   <div className='education bg-dark'>
   <div className='container '>
    <div className='row'>
      <div className='col-lg-5 mx-auto text-center'>
        <h4 className='text-white'>Education</h4>
      </div>
    </div>
    <div className='row'>

      <div className='col-lg-4 mx-auto text-center'>
        <div className='card border-0 bg-transparent'>
          <div className='card-body'>
          <h6 className='text-white'>2015-2018</h6>
        <h6 className='text-white'>Bachelor of technology</h6>
        <h6 className='text-white'>6.8&nbsp;CGPA</h6>
          </div>
        </div>
      </div>

      <div className='col-lg-4 mx-auto text-center'>
        <div className='card border-0 bg-transparent'>
          <div className='card-body'>
          <h6 className='text-white'>2013</h6>
        <h6 className='text-white'>Diploma</h6>
        <h6 className='text-white'>First division</h6>
          </div>
        </div>
      </div>

      <div className='col-lg-4 mx-auto text-center'>
        <div className='card border-0 bg-transparent'>
          <div className='card-body'>
          <h6 className='text-white'>2009</h6>
        <h6 className='text-white'>Sr sec School</h6>
        <h6 className='text-white'>First division</h6>
          </div>
        </div>
      </div>

    </div>
   </div>
   </div>


{/* CONNECTED */}

<div className="connected">
<div className="container">
  <div className="row">
    <div className="col-lg-5 mx-auto text-center">
      <h4 className="text-white">Stay Connected</h4>
    </div>
  </div>

<div className="row">
  <div className="col-lg-5 mx-auto text-center">
    <div className="card border-0 bg-transparent">
      <div className="card-body">
        <h6 className="text-white">New Delhi </h6>
        <h6 className="text-white">praveenkumaar729@gmail.com</h6>
        <h6 className="text-white">(+91)&nbsp;9953111715</h6>
        <ul class="nav justify-content-center">
  <li class="nav-item">
  <a className='text-white' target='_blank' href='https://www.linkedin.com/in/praveen-kumar-593b8a271/'><i class="fab fa-linkedin  me-3"></i></a>
  </li>
  <li class="nav-item">
  <a className='text-white text-lg-start text-center' target='_blank' href='https://github.com/thepraveen123'><i class="fab fa-github "></i></a>


  </li>
  <li class="nav-item">
  <a className='text-white text-lg-start text-center' target='_blank' href=' href="http://Instagram.com/THEPRAVEENCHAUHAN'><i class="fab fa-instagram  ms-3"></i></a>
  </li>
 
</ul>
      </div>
    </div>
  </div>
</div>

</div>
</div>
    </>
  );
}

export default App;
