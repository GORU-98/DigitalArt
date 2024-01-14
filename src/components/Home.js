import React from 'react'

const Home = () => {
    
        const pic=["cartoon-character-with-handbag-sunglasses","cartoon-character-with-yellow-jacket-sunglasses","fashion-little-boy"]
    
    const handleLeftArr=(e)=>{
        e.preventDefault();
        const sec2=document.getElementById("sec2");
        let currIndex=0;
            sec2.style.backgroundImage=`url("/pics/${pic[currIndex]}.jpg")`;
            currIndex=(currIndex - 1)%pic.length;
            
    }
    const handleRightArr=(e)=>{
        e.preventDefault();
        const sec2=document.getElementById("sec2");
        let currIndex=1;
            sec2.style.backgroundImage=`url("/pics/${pic[currIndex]}.jpg")`;
            currIndex=(currIndex + 1)%pic.length;
            
    }
  return (
    <div className='home_page'>
       <div className="sec1">

                    <div className="nav">
                        <h1>Goru2k18</h1>
                        <div className="nav_sec">
                            <li>Contact us</li>
                            <button>Menu</button>
                        </div>
                    </div>
        
       <div className="Hero_txt">

                        <div className="Hero_txt_sec1">
                            <h1>YOUR FIRST</h1>
                            <div className="hero_div_2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam porro</p>
                                <h1>DIGITAL ART</h1>
                            </div>
                            <div className="hero_div_3">
                                <div className="h_d_3_grp">
                                    <img src="/pics/fashion-little-boy.jpg" alt="" />
                                    <img src="/pics/cartoon-character-with-handbag-sunglasses.jpg" alt="" />
                                    <img src="/pics/cartoon-character-with-yellow-jacket-sunglasses.jpg" alt="" />
                                    <img src="/pics/cartoon-character-with-handbag-sunglasses.jpg" alt="" />
                                    <img src="/pics/cartoon-character-with-yellow-jacket-sunglasses.jpg" alt="" />
                                    <img src="/pics/fashion-little-boy.jpg" alt="" />
                                </div>
                    <h1>COLLECTION</h1>            
                            </div>
                        </div>

                        <div className="Hero_txt_sec2">
                            <div className="get_btn">

                        <button className='btn1'>GET STARTED</button>
                        <div className="icon">
                            <img src="/pics/right-arrow.png" alt="icon" />
                        </div>
                            </div>
                   
                    <div className="img">
                        <img src="/pics/fashion-little-boy.jpg" alt="web_pic" />
                        <div className="btn_group">
                        <button>INSTAGRAM</button>
                        <button>TELEGRAM</button>
                        <button>FACEBOOK</button>
                        </div>
                    </div>
                        </div>
       </div>
       </div>

       <div className="sec2" id='sec2' >
                <div className="sec2_nav">
                    <button>Sign In</button>
                    <button>About</button>
                    <button>How It Works</button>
                    <button>Pricing</button>
                </div>
                <div className="arrow">
                    <div className="arr1" onClick={handleLeftArr}>

                    <img src="/pics/arrow.png" alt="" />
                    </div>
                    <div className="arr2" onClick={handleRightArr}>

                    <img src="/pics/right-arrow.png" alt="" />
                    </div>
                </div>

       </div>
      
    </div>
  )
}

export default Home
