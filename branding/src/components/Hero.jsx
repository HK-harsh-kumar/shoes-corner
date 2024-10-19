import React from 'react'

const Hero = () => {
  return (
    
    <main className="heroes">
        <div className="herocontent">
            <h1> 
                YOUR FEET DESERVE THE BEST
            </h1>
 <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
  SHOES.
    </p>
    


    <div className="hero-btn">

      <button>Shop now</button>
      <button className="secondrybtn">Category</button>
    </div>

    <div className="shopping">
      <p>also available on</p>

      <div className="brandicon">
        <img src="/images/amazon.png" alt="amazonlogo" />
        <img src="/images/flipkart.png" alt="flipkartlogo" />
      </div>
    </div>
           </div>
           <div className="hero-image">
            <img src="/images/shoe_image.png" alt="heroimage" />
           </div>
    </main>
    
      
   
  );
};

export default Hero
