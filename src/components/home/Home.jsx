

import { Helmet } from "react-helmet";
import CatagoryTab from "../catagoryTab/CatagoryTab";
import MoreDemo from "../feature/MoreDemo";
import Payment from "../feature/Payment";

// 


const Home = () => {



    return (
     
        <div>
          <Helmet>
            <title>KIDS Super Car|Home</title>
            
          </Helmet>

            <div className='md:flex container mx-auto justify-evenly items-center gradient p-10 '>
                <div className='p-5'>
                    <div className="text-4xl font-black p-2"><span>Let's Meet </span> <br /> <span>Your Dream Car</span></div>
                    <h1 className="font-bold p-2">Wellcome to visit our site. <br /> We are made uniq super car . <br /> See our collection. </h1>
                </div>
                <div className="w-1/2"> <img src="https://media.istockphoto.com/id/1354209384/photo/silver-roadster-sports-car-moving-at-high-speed-along-racetrack-at-dawn.jpg?s=1024x1024&w=is&k=20&c=PsbxyFejUqmGhYAPwwBH_BX1PH4AHlpxvJ2_ygYP2gY=" alt="" /></div>
            </div>

            <div className=" container mx-auto carousel  h-96 mb-5">
  <div id="slide1" className="carousel-item relative w-full ">
    <img  src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/173755751/photo/red-18-wheeler.jpg?s=1024x1024&w=is&k=20&c=ECav8VseXOtBhlvT_Tmut87-ot7kwPVWe7gsatZ4tWA=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src= "https://media.istockphoto.com/id/620006890/photo/toy-car-truck.jpg?s=1024x1024&w=is&k=20&c=LiMJ1lJhtafl1gsfF9kgHu-0i_pKQ7cpu74EQH2eE_0=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src= "https://media.istockphoto.com/id/1291206703/photo/plastic-model-of-an-old-red-bus-toy-miniature-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=dFXHdbSNyGt_94NBpHCaF4thwVvlEGd55wNT44NAirk=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/139558636/photo/antique-london-double-decker-bus-tin-toy.jpg?s=1024x1024&w=is&k=20&c=S80Jd2DkfDhtCne7OJb1XQNuatTm8jST5Twuqtzc8X4=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div>
    <CatagoryTab></CatagoryTab>
</div>
<Payment></Payment>
<MoreDemo></MoreDemo>
        </div>
    );
};

export default Home;