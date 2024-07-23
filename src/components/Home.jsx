import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../components/home1.css'
import pic1 from '../images/apple.png'
import pic2 from '../images/fashion.png'
import pic3 from '../images/cart.png'
import pic4 from '../images/kids.png'
import Electronics from '../pages/Electronics.jsx';



const Home = () => {

const navigate = useNavigate();
  return (
    <div>

<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="/">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <h1 style={{color:"white"}}>e- Commerse Website</h1>
</div>
        

        
<div className='box1'>
    <div  onClick={() => navigate("/Electronics")}>Electronics</div>
    <div  onClick={() => navigate("/Electronics")}>Fashion</div>
    <div >Grosary</div>
    <div>kids</div>  
    <div id='mar'>
          <div id='mar1'>Important news :</div>
      <marquee  direction="left" height="100px">
    The “free gift with purchase” promotion is simple: a customer spends a requisite amount and gets a gift as a thank-you. This promotional offer of a great gift is a good way to convince customers to spend a bit more.
</marquee> </div>
</div>

          <div id='dis'>
                 <div className='pic'>
                          <div className='p1'  onClick={() => navigate("/Electronics")}> 
                                  <div> <img src={pic1} width={'250px'} height={'250px'}/></div> 
                                  <div>Electronics & Gadgets</div>
                                  <div id='sub'style={{backgroundColor:"green"}}> Click for more  </div>
                            </div>        
                                    
                                  
                          
                          

                               <div className='p1'><img src={pic2} width={'380px'} height={'250px'}/>
                              <div>Fashion</div>
                               <div id='sub'style={{backgroundColor:"green"}}> Click for more  </div>
                               </div>
                               <div className='p1'><img src={pic3} width={'250px'} height={'250px'}/>
                               <div>Grocery</div>
                               <div id='sub'style={{backgroundColor:"green"}}> Click for more  </div>
                               </div>
                               <div className='p1'><img src={pic4} width={'250px'} height={'250px'}/>
                               <div>KiDs</div>
                               <div id='sub'style={{backgroundColor:"green"}}> Click for more  </div>
                               </div>


                </div>  
          </div>


    </div>
  )
}

export default Home