{/* <div className={styles.logoaa}>
<img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
</div>
<img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}

import CookieConsent from "react-cookie-consent";
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';
import Footer from '../components/Footer';
import FooterComponent from '../components/foottest';
import Image from 'next/image'
import mypic from '../public/rotatelogo.gif'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import Script from "next/script";
import { useRouter } from 'next/router';
import 'animate.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import { SectionTitle } from "../components/SectionTitle";
import Layout from "../components/Layout";
import { ReactDimmer } from 'react-dimmer';
import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import Floor from "../components/Floor";
import Draggable from "../components/Draggable";
import OrbitControls from "../components/OrbitControls";
import Marquee from "react-fast-marquee";
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MuiNextLink from "../components/MuiNextLink"
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import CarouselComponent from "../components/carousel";

// export default function MiserySite() {
  
  
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     });
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' 
//     });
//   };



export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  // <div  key={data}>
   

  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleAll = () => {
    setShowAll(val => !val);
    setShowCurrent(false);
  };

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      setShowAll(false);
      return;
    }
  };

  const setCurrent = index => {
    setCurrentIdx(index);
    toggleCurrent();
  };

  
  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'jgs4s870',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            image: imgBuilder.image(p.image),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  // const [data, setData] = useState([ <div className={styles.imgs}>
  //   <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
  //   <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />

  //   <img className={styles.figure3} src="https://i.ibb.co/x3yXp21/Misery-Meets2square-copy-2.png" /> 
  //   <img className={styles.figure5} src="https://i.ibb.co/VvxBzzg/Misery-Meets2square.png" /> 
  //   <img className={styles.figure4} src="https://i.ibb.co/42kZCsV/Miserymeets08-25-Recovered.png" /> 
  //   </div>]);


  return (
<Layout>
   
       <Head>
       {/* <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script> */}
<title>misery</title>


<script type="text/javascript" src="https://unpkg.com/jquery@1.11.1/dist/jquery.js" defer></script>
<script type="module" src="../assets/app.js" defer></script>

      </Head>
      <Toolbar />  

{/* moving flower */}
      {/* <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}
      {/* <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
          <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}

{/* 
<div className=" h-screen z-0">
      <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 30, 0]} />
        <OrbitControls />
        <Box rotateX={3} rotateY={0.2} />
      </Canvas>
    </div>
    </div> */}

      {/* <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenuOpen} /> */}
     {/* <div className=' h-screen'>
     <h1 className='text-7xl'>hii</h1>
     </div> */}
{/* hover:drop-shadow-[0_0px_5px_#3d9335] */}

{/* <h1 className='text-6xl m-auto text-[#78b1c4] p-15 z-0 max-w-2xl float-left -skew-x-6 '> misery is.. </h1> */}


<section className="h-screen relative hidden md:block">
{/* <img className=" w-2/6 absolute drop-shadow-[0_0px_5px_red]" src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}



  <div className='flex h-screen'>


 {/* --------------------------------------------  right */}
 



          
  {/* <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}

  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
 
  
  {/* <img className={styles.figurenew} src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
  {/* <img className='flex justify-center m-auto items-center h-4/4 w-1/4  ' src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
   

          {/* /text */}
          {/* <p className="text-left pt-10 object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#cccccca5] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}

{/* min-h-screen w-full */}
{/* flex items-center justify-center */}
{/* className=" mx-auto p-auto fixed w-2/12 object-center justify-center" */}
           {/* <div className=" "> */}
           {/* <div className={styles.back}>
           <img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/>
           </div> */}
           {/* <p className="text-left pt-56 object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="#whatwedo"><a className=' hover:text-[#cccccca5] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> */}
           {/* <div className="pt-56"><Toolbar /> </div> */}

           {/* <div className={styles.back}>
           <Link  href="./"><a className=''><img className={styles.back}  src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/></a></Link>
           </div>
           <p className="pt-56 text-center object-center text-base z-50 font-light ">misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc)
           with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and ...      
           <Link  href="../../Miserysite#whatwedo"><a className=' hover:text-[#cccccca5] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p> 
           <div className=""><Toolbar /> </div> */}
           
           {/* <img className="" src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> */}
           {/* <img className="w-5/6 object-center justify-center" src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
          {/* <p className="text-center object-center font-serif font-light "> u can cry if u want to</p> */}
          {/* </div> */}

{/* links */}
           {/* <div className=" pt-10 list-[none] text-2xl font-base   ">
      <Link  href="#whatismisery"><a className=' hover:text-[#cccccca5]'>☆ what is misery?</a></Link>
<Link href="#whatwedo"><a className=' hover:text-[#cccccca5] '>☆ what we do</a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#cccccca5] '>☆ our goals</a></Link>
<Link href="#ourroots"><a className=' hover:text-[#cccccca5] '>☆ our roots</a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#cccccca5] '>☆ our dreams</a></Link>
</div> */}


  {/* <div className=" p-5 flex bottom-0 absolute ">
            <div className="p-5 ">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://www.instagram.com/miseryparty/?hl=en" target="_blank" rel="noopener noreferrer">
		<Instagram fontSize="large" />
		</MuiNextLink>
        </div>
        <div className=" p-5">
        <MuiNextLink sx={{ textDecoration: "none", color: "common.black" }} href="https://twitter.com/miseryparty_" target="_blank" rel="noopener noreferrer" >
		<Twitter fontSize="large" />
		</MuiNextLink>
        </div>
        <div className=" p-5 m-auto items-center justify-evenly  tracking-wide">
        <Link  href="./"><a className='  m-auto items-center font-light justify-evenly  tracking-wide'>© Misery 2022</a></Link>
        </div>
  </div> */}



{/* -------------------------------------------- left */}



        <div>
    


{/* -------------old---------- */}
        <div className='pt-36 flex p-10 pb-0 mx-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div key={index}>
              <div className='z-0'>
                      <img className='mx-auto rounded-[30px]  w-[55rem] p-1 ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>

{/* className={styles.overlaypictop} pt-[85vh]*/}
{/* old  <div className=' pt-10 z-0 pb-5 pl-5 pr-5 top-0 h-screen w-9/12 mx-auto '> */}
        <div className=' z-0 pb-5 pl-5 pr-5 top-0 h-screen w-9/12 mx-auto '>


        <div id="tooltip"
                    className={
                        styles.cursorimg
                }>
                    <Image src="/images/Fish.png" alt="Flower" width="100px" height="100px"/>
                </div>
    
        {/* <div className= ' z-[-10] top-0 left-0 fixed h-screen w-screen overflow-hidden '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div key={index}>
              <div className='z-0'>
                      <img className=' z-[-10] h-[130vh] ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div> */}

    {/* <button id="nightModeButton" class="menu-item button">
				<span class="nightModeButton__inner--night only-visible-in-day-mode">
					<svg xmlns="http://www.w3.org/2000/svg" width="34.512" height="34.509" viewBox="0 0 34.512 34.509">
  <g id="noun_Moon_805540" transform="translate(-6.996 -6.999)">
    <g id="Group_147" data-name="Group 147" transform="translate(6.996 6.999)">
      <path id="Path_111" data-name="Path 111" d="M18.081,959.362a1.206,1.206,0,0,0-.364.075C10.911,961.96,7,968.57,7,976.1A17.788,17.788,0,0,0,24.764,993.87c7.532,0,14.142-3.915,16.665-10.721a1.2,1.2,0,0,0-1.58-1.542,15.1,15.1,0,0,1-5.655,1.066c-8.315,0-16-7.7-16-16.013A15.094,15.094,0,0,1,19.247,961a1.2,1.2,0,0,0-1.166-1.643Zm-1.843,3.461a17.983,17.983,0,0,0-.451,3.837c0,9.766,8.642,18.42,18.408,18.42a18.127,18.127,0,0,0,3.825-.439c-2.64,4.352-7.506,6.821-13.254,6.821A15.344,15.344,0,0,1,9.4,976.1c0-5.759,2.467-10.643,6.834-13.279Z" transform="translate(-6.996 -959.361)"></path>
    </g>
  </g>
</svg>
				</span>
				<span class="nightModeButton__inner--day only-visible-in-night-mode">
					<svg xmlns="http://www.w3.org/2000/svg" width="36.511" height="38.22" viewBox="0 0 36.511 38.22">
  <g id="noun_sun_1479843" transform="translate(0)">
    <path id="Path_60" data-name="Path 60" d="M12.532,24.961A10.962,10.962,0,1,0,23.494,14,10.974,10.974,0,0,0,12.532,24.961Zm18.624,0A7.662,7.662,0,1,1,23.494,17.3,7.671,7.671,0,0,1,31.157,24.961Z" transform="translate(-5.238 -5.852)"></path>
    <path id="Path_61" data-name="Path 61" d="M31.1,55.281a1.65,1.65,0,0,0-2.572,1.368v2.91c0,.055.011.108.016.162a1.679,1.679,0,0,0,.017.17c.009.042.026.081.038.122a1.011,1.011,0,0,0,.154.363c.02.034.034.072.057.1a1.649,1.649,0,0,0,3.018-.922V56.65A1.648,1.648,0,0,0,31.1,55.281Z" transform="translate(-11.926 -22.989)"></path>
    <path id="Path_62" data-name="Path 62" d="M53.958,24.928a1.647,1.647,0,0,0,.51-.081l2.767-.9a1.65,1.65,0,0,0-1.02-3.138l-2.767.9a1.65,1.65,0,0,0,.51,3.219Z" transform="translate(-21.864 -8.664)"></path>
    <path id="Path_63" data-name="Path 63" d="M3.908,37.806l-2.767.9A1.65,1.65,0,1,0,2.16,41.843l2.767-.9a1.65,1.65,0,0,0-1.019-3.138Z" transform="translate(0 -15.768)"></path>
    <path id="Path_64" data-name="Path 64" d="M46.211,50.906a1.65,1.65,0,0,0-2.67,1.939l1.71,2.354a1.65,1.65,0,0,0,2.67-1.939Z" transform="translate(-18.068 -20.994)"></path>
    <path id="Path_65" data-name="Path 65" d="M12.924,10.7a1.65,1.65,0,0,0,2.67-1.939l-1.71-2.354a1.65,1.65,0,0,0-2.67,1.939Z" transform="translate(-4.555 -2.395)"></path>
    <path id="Path_66" data-name="Path 66" d="M15.228,50.541a1.651,1.651,0,0,0-2.3.365l-1.71,2.354a1.65,1.65,0,1,0,2.67,1.939l1.71-2.354A1.65,1.65,0,0,0,15.228,50.541Z" transform="translate(-4.555 -20.994)"></path>
    <path id="Path_67" data-name="Path 67" d="M47.556,6.044a1.651,1.651,0,0,0-2.3.365L43.541,8.764a1.65,1.65,0,1,0,2.67,1.939l1.711-2.354A1.65,1.65,0,0,0,47.556,6.044Z" transform="translate(-18.068 -2.395)"></path>
    <path id="Path_68" data-name="Path 68" d="M1.141,23.948l2.767.9a1.65,1.65,0,0,0,1.02-3.138l-2.767-.9a1.65,1.65,0,0,0-1.02,3.138Z" transform="translate(0 -8.664)"></path>
    <path id="Path_69" data-name="Path 69" d="M57.235,38.7l-2.767-.9a1.65,1.65,0,0,0-1.02,3.138l2.767.9a1.65,1.65,0,0,0,1.02-3.138Z" transform="translate(-21.864 -15.768)"></path>
    <path id="Path_70" data-name="Path 70" d="M30.182,6.209a1.65,1.65,0,0,0,1.65-1.65V1.65h0a1.65,1.65,0,0,0-3.3,0h0V4.559A1.65,1.65,0,0,0,30.182,6.209Z" transform="translate(-11.926)"></path>
  </g>
</svg>
				</span>
			</button> */}


          <div className={styles.imgs}>
        <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/>
        <img className={styles.figure2} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />
        <img className={styles.figure3} src="https://i.ibb.co/x3yXp21/Misery-Meets2square-copy-2.png" /> 
        <img className={styles.figure5} src="https://i.ibb.co/VvxBzzg/Misery-Meets2square.png" /> 
        <img className={styles.figure4} src="https://i.ibb.co/42kZCsV/Miserymeets08-25-Recovered.png" /> 

        <img className={styles.figure6} src="https://i.ibb.co/BqcKgs4/Alien.png"/>
        <img className={styles.figure7} src="https://i.ibb.co/dbzp5KC/Cloud-tilt-right.png" />
        <img className={styles.figure8} src="https://i.ibb.co/V9vkXv8/Grinch-main.png" /> 
        <img className={styles.figure9} src="https://i.ibb.co/SnxtFYJ/Layer-9.png" /> 

        <img className={styles.figure10} src="https://i.ibb.co/7kdqWNg/Plant-Body.png"/>
        <img className={styles.figure11} src="https://i.ibb.co/h8SvV2k/Shape-2.png" />
        <img className={styles.figure12} src="https://i.ibb.co/kJWhGz8/Face.png" /> 
        </div>
        {/* <p className="text-6xl font-semibold text-left text-[#ff00000] justify-center  "> 💧 u can cry if u want to 💧 </p>  */}
        {/* <p className="text-center object-center pt-20 font-serif font-light "> u can cry if u want to</p> */}
       
{/* -webkit-text-stroke: 2px black; */}


        {/* <div className=' flex w-auto pt-5 h-auto '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index}>
              <div className='z-0'>
                      <img className='flex w-80 h-auto p-1 ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div> */}

{/*  */}
<div>
{/* <img  className={styles.logomis} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
{/* <img  className={styles.logomis2} src="https://i.ibb.co/GJvJYg3/misery-logo-1-min.png"/> */}

</div>

{/* <div className='flex pt-5'>
                  <div className='z-0  p-1 w-6/12'>
                      <img src="/2.jpg" alt="miseryparty" />
                  </div>
                  <div className='z-0  p-1  w-6/12'>
                      <img src="/7.gif" alt="miseryparty" />
                  </div>
</div> */}

{/* <div className={styles.crytextdown}><p className={styles.crytextdownarr}> ↓ </p>  </div>  */}
<p className={styles.crytext4}> u can cry if u want to 🥲 </p> 

{/* <p className="text-left pt-10 object-center text-base z-50 font-light ">ok so here’s the story so far. misery was created in late 2018 by aisha mirza and babetheory. we were frustrated with how unwell us and our friends were and how little support was accessible to us. we had dealt with the suicide of friends and other qtibpoc, our own suicidality and chronic mental health struggles, and the addiction issues that famously taunt the qtibpoc community were feeling all too close to home ...      
           <Link  href="./videoBlogPost/our-story"><a className=' hover:text-[#cccccca5] font-semibold p-4 m-auto items-center justify-evenly  tracking-wide"'>read more ↗</a></Link>
           </p>  */}


{/* links */}
{/* <div className=" pt-10 list-[none] text-center text-2xl font-base   ">
      <Link  href="#whatismisery"><li className='pt-2'><a className=' hover:text-[#cccccca5]'>☆ what is misery? ☆</a></li></Link>
<Link href="#whatwedo"><li className='pt-2'><a className=' hover:text-[#cccccca5] '>☆ what we do ☆</a></li></Link>
<Link href="#ourgoals"><li className='pt-2'><a className=' hover:text-[#cccccca5] '>☆ our goals ☆</a></li></Link>
<Link href="#ourroots"><li className='pt-2'><a className=' hover:text-[#cccccca5] '>☆ our roots ☆</a></li></Link>
<Link href="#ourdreams"><li className='pt-2'><a className=' hover:text-[#cccccca5] '>☆ our dreams ☆</a></li></Link>
</div> */}


<div className={styles.wrapper}>

<div>
      {/* <div>
        <button className={styles.overlaybut} onClick={toggleAll}>{showAll ? "hide overlay images" : "show overlay images"}</button>
      </div>
      <div>
        {showAll && data.map((el, i) => <p key={`content-${i}`}>{el}</p>)}
      </div> */}

      {/* {showCurrent ? <div>{data[currentIdx]}</div> : null} */}
    </div>

    
<div className=" pt-10 list-[none] text-center max-w-3xl object-center mx-auto text-4xl font-thin  ">
      <Link  href="#whatismisery"><a className=' hover:text-[#cccccca5]'>☆ what is misery? </a></Link>
<Link href="#whatwedo"><a className=' hover:text-[#cccccca5] '>☆ what we do </a></Link>
<Link href="#ourgoals"><a className=' hover:text-[#cccccca5] '>☆ our goals ☆</a></Link>
</div>
<div className=" pt-5 list-[none] text-center max-w-3xl object-center mx-auto text-4xl font-thin  ">
<Link href="#ourroots"><a className=' hover:text-[#cccccca5] '>☆ our roots </a></Link>
<Link href="#ourdreams"><a className=' hover:text-[#cccccca5] '>☆ our dreams ☆</a></Link>
</div>


<div className=''>
{/* what is misery */}
<section id="whatismisery?" className={styles.whatismiserydas}>
        <p className=' text-xl  text-left pt-10 font-semibold  '>what is misery?</p>
        <p className='text-left text-base font-light pt-2'>misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc) with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and neurodivergence.

we co-create free, playful, accessible sober spaces, services, practices, parties and resources to cultivate communities of care that can support and sustain the collective healing and resilience of qtibpoc world over.

misery is a reminder that you’re not too sensitive, it’s mad out here.</p>
</section>


{/* what we do */}
<section id="whatwedo" className={styles.whatismiserydas}>
            <p className=' text-xl text-left pt-10 font-semibold  '>what we do</p>
        <p className='text-left font-light pt-2'>we strive to cultivate generative ecologies of connection, care and solidarity that can support and sustain the collective healing and resilience of our community. we know first hand that healing and liberation is interwoven and by nurturing community care and addressing collective trauma, we seek to disrupt the growing privatisation of healing and the “self-care industrial complex”. we work for and with lived experience leaders to co-create accessible, playful, and transformative peer-led healing spaces, services and resources by (un)archiving and (re)generating the vast wisdom, community resilience strategies and potential for joy that are abundant amongst our people..</p>
        </section>



        {/* <div className='z-0  pt-5  w-12/12'>
                      <img src="/3.jpg" alt="miseryparty" />
                  </div> */}


{/* 
<div className={styles.column}>
  <div className={styles.subimagessection}>
  <CarouselComponent images={images} />
        </div>
  </div> */}

{/* <div className=' z-0 top-0  rounded-[30px] cursor-grabbing h-auto pt-5 overflow-hidden'>
              <Carousel  zIndex={-2}  dynamicHeight={false} minHeight={5} interval={4000} showThumbs={false} showIndicators={false} showArrows={false} infiniteLoop={true} emulateTouch={true} swipeable={true} autoPlay >
                
                
                  <div className='z-0 '>
                      <img src="/2.jpg" alt="image2" />
  
                  </div>
                  <div className='z-0 '>
                      <img src="/3.jpg" alt="image3"/>
  
                  </div>
                  <div className='z-0 '>
                      <img src="/4.jpg" alt="image4"/>
  
                  </div>
                  <div className='z-0 '>
                      <img src="/5.jpg" alt="image5"/>
                      
  
                  </div>
              </Carousel>
            </div> */}

{/* our goals */}
<section id="ourgoals">
<div className='  font-light pt-10 '>
            <p className=' text-xl text-left font-semibold  '>our goals</p>
            <div className=' text-base list-[none] '>
        <li className=' duration-500  pb-2 font-light '> to provide accessible, supportive and politically engaged events, spaces and services by and for qtibpoc to build community and help us to be in right relationship with ourselves, each other, and the land</li>
<li className=' duration-500 font-light  pb-2 '>to develop resources, research, artistic work, modalities and practices that facilitate healing and challenge dominant misperceptions about mental health, addiction, disability, trauma and neurodiversity</li>
<li className=' duration-500 font-light  pb-2 '>to promote leadership and development opportunities for qtibipoc with lived experience of mental health problems, madness, addiction, disability, trauma, and neurodivergence - within our communities, health and wellbeing settings, the arts and wider society</li>
        </div>
        </div>
</section>

{/* our roots */}
<section id="ourroots">
<div className=' pt-10 font-normal   '>
            <p className=' text-xl text-left font-semibold  '>our roots</p>
            <div className='text-left'>
        <p className=' duration-500 pt-2 font-light'> the work of creating communities of care is not new, nor invented by us. it is ancient work that exists within communities, cultures and species around the world. we continue the legacies and lineages of our ancestors and the artists, activists and community workers that have come before us and those around the world that are committed to this work.</p>
<p className=' duration-500 font-light pt-2'>we are inspired by our friends and lovers, the creative power of our communities and the mistakes of our parents. we give thanks and draw strength from the disability and healing justice movements, black feminist theory and praxis, mad studies, queer of colour critique, radical transfeminists, our dyke, faggot and gender divine sibings worldwide, femmes of colour spaces, wxtchcraft, raving on the dancefloor, community-based transformative justice interventions, indigenous herbalists, generative somatics, revolutionary mothering, nurses, sex workers, teachers, survivors, carers, youth workers and black, brown, indigenous and diasporic spiritual traditions.</p>
<p className=' duration-500 font-light pt-2'>we have learnt that people are the experts in their own lives and believe that everyone should have the right to fail and the support they need to grow. we acknowledge that harm is an integral part of the human experience and that experiencing harm is one of the many ways our lives, minds, and hearts adapt to the world.</p>
<p className=' duration-500 font-light pt-2'>our work is rooted in the principles of healing centered harm reduction including trauma-informed care, agency, collaboration, intersectionality, consent and acknowledges the historical and on-going social, cultural, environmental and economic systems that constantly terrorise our communities including experiences of colonisation, anti-blackness and racism, sexism, homophobia, transphobia, classism, ableism and other oppressions.</p>
</div>   </div>
</section>


{/* our dreams */}
<section id="ourdreams">
<div className=' font-normal pt-10  '>
            <p className=' text-xl text-left font-semibold  '>our dreams</p>
            {/* <div className=' text-center flex p-10   font-normal  '>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 1｡ </p>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 2｡ </p>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> Ɛ｡ </p>
            </div> */}
            <div className=' text-left  font-normal  '>
        <p className=' duration-500  pt-5 font-light'> we are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.We are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.</p>
<p className=' duration-500  font-light pt-5 '> worlds that are safer, happier, healthier and more peaceful. worlds where we all work to acknowledge and minimise our own potential for intimate, interpersonal, structural and ecological violence and in doing so resolve conflict compassionately.</p>
<p className=' duration-500  font-light pt-5 '> worlds where people before profits, harm-reduction and post traumatic growth is the norm. where we are all supported in alchemising our pain through play, consent, connection, boundaries and rest. worlds where you can cry and be held, if you want to.</p>
        </div>
        </div>
       
</section>
</div>
</div>

{/* <p className=' pt-20 overflow-hidden text-4xl font-semibold  m-auto items-center justify-evenly  tracking-wide '> latest events </p>
<Link  href="../../eventsupcoming"><a className=' overflow-hidden  hover:text-[#cccccca5] text-4xl font-light  m-auto items-center justify-evenly  tracking-wide"'>click here to see more events ↗</a></Link>
<div className=' z-0 top-0  h-auto w-auto overflow-scroll'>
<div className=' flex w-screen  h-auto overflow-scroll '>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/eventsComming/${p.slug.current}`)} key={index}>
              <div className='z-0'>
                      <img className='w-50 w-96 p-1 ' src={p.image} />
                  </div>
            </div>
          )) : <>No Posts Yet</>}
        </div>
            </div> */}

<CookieConsent
  location="bottom"
  buttonText="sure babes!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "grey" }}
  // fontSize: "13px"
  boxshadow= "10px 10px lightblue"
  color="grey"
  font-weight="semibold"
  buttonStyle={{ color: "grey", background: "white" , borderradius: "25px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent>

  {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>*/}

<Footer></Footer> 
            </div>
            </div>
  </div>
  </section>
  {/* <FooterComponent></FooterComponent> */}
{/* 
<div className=' z-0 absolute top-0 cursor-grabbing h-screen overflow-hidden'>
              <Carousel  zIndex={-2}  dynamicHeight={false} minHeight={5} interval={4000} showThumbs={false} showIndicators={false} showArrows={false} infiniteLoop={true} emulateTouch={true} swipeable={true} autoPlay >
                
                  <div className='z-0 '>
                      <img src="/1.jpeg" alt="image1"/>
                  </div>
                  <div className='z-0 '>
                      <img src="/2.jpg" alt="image2" />
  
                  </div>
                  <div className='z-0 '>
                      <img src="/3.jpg" alt="image3"/>
  
                  </div>
                  <div className='z-0 '>
                      <img src="/4.jpg" alt="image4"/>
  
                  </div>
                  <div className='z-0 '>
                      <img src="/5.jpg" alt="image5"/>
                      
  
                  </div>
              </Carousel>
            </div>
 */}

            





  {/* <div className=' absolute top-0  h-5/6 flex text-center w-screen  mx-auto px-0  '> */}
{/* <h1 className='border-t-[.5px] border-[#030303] text-6xl m-auto text-[#ffffff] w-3/6 p-15 z-0 max-w-2xl font-bold float-left -skew-x-6  '> misery is.. </h1> */}
{/* <h1 className=' text-6xl m-auto text-[#ffffff] w-3/6 p-10 z-0 max-w-2xl font-bold float-left -skew-x-6  '> <div className="border-[1px] z-50 pt-2 rounded-full border-[#ffffff] ">
            <Image
        src={mypic}
        alt="Picture of the author"
        layout="fixed" 
        position="absolute"
    /> 
            </div> 
            </h1> */}


        {/* <path id="curve" d="M450,250c0,110.5-89.5,200-200,200S50,360.5,50,250S139.5,50,250,50S450,139.5,450,250z"></path> */}
        {/* <text width="500"> */}
          {/* <textPath id="manifest-path-textPath" alignment-baseline="top" xlink:href="#curve">❤ ~ you are <tspan class="text--bold"> special</tspan> and unique ~ ❤</textPath> */}
        {/* </text> */}
      


    {/* <p className=' text-[#f1f1f19c] mix-blend-diffrence pt-20  text-4xl p-10 m-auto font-normal z-0 h-4/5 w-6/6 float-right overflow-scroll' >
    <p className=' z-0 '></p>
    <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7 ml-0 hover:ml-9 duration-1000  '> <p>misery is ...</p></p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7 ml-0 hover:ml-9 duration-1000  '> <p>crying at the party,</p></p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7 ml-0 hover:ml-9 duration-1000 '>your emotional support stuffed animal that looks more depressed than you do </p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>being a fag and a dyke at the same time</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>a 4 hour bath and a 7 day free trial</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>that one piece of butt hair the beautician forgot about </p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>waxing your butt in the first place</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>living in your overdraft but eating out anyway</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>searching for a halal photo to send nani ji</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>forgiving your younger self for the things they did to get you here</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>your second hand binder</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>falling in love with your therapist</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '> this too shall pass</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>freedom is sorrow is moments of connection is dissociation is remembering is moving through</p><br/>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>company</p><br/>
      <p className=' text-[white] mix-blend-diffrence p-10 ml-0 text-7xl hover:ml-9 duration-1000 '><i>me and you</i></p><br/>
    <img className=' w-2/6 m-auto ' src="https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"/> 
      <p className=' p-10 '></p>
    </p> */}
    {/* </div> */}
    


    {/* <div className={styles.rotate}>
  <div className=' m-auto flex text-center  mx-auto px-0 '>
<Image
        src={mypic}
        width="350px"
        height="350px"
    />
</div>
</div> */}

{/* <FooterComponent></FooterComponent> */}
    
{/* </section> */}



{/* <div className="bottom-0 absolute bg-[white] ">
  <div className=" p-3 border-t-[.5px] border-[#030303] font-normal text-xl w-screen overflow-x-hidden ">

<Marquee>
<span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
    <span className="mx-4  text-[#2b2b2b]">  &nbsp; .｡.:☆.｡.: &nbsp;  u can cry if u want to</span>
</Marquee>

</div>
</div> */}

{/* <section className=' h-3/6 border-b-[.5px]  border-t-[.5px] border-[#030303]  z-50 text-5xl font-normal text-center items-center m-auto flex justify-center p-5 px-8'>
        <p className=''> 𝓐&#039;bout .｡.:*☆ </p>
        </section> 

        <div className=''>
        <section className=" z-50 w-screen text-base mx-auto px-0  border-[.5px] border-b-[#030303] ">
      <div className=" flex border-[.5px] w-screen ">
      <Link  href="#whatismisery"><a className='  hover:bg-[#cccccca5] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>what is misery?</a></Link>
<Link href="#whatwedo"><a className='  hover:bg-[#cccccca5] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>what we do</a></Link>
<Link href="#ourgoals"><a className='  hover:bg-[#cccccca5] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly  tracking-wide"'>our goals</a></Link>
<Link href="#ourroots"><a className='  hover:bg-[#cccccca5] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>our roots </a></Link>
<Link href="#ourdreams"><a className='  hover:bg-[#cccccca5] border-l-[.5px] border-[#030303] rounded-full p-4 m-auto items-center justify-evenly tracking-wide"'>our dreams (for a less miserable world) </a></Link>
</div>
</section>
</div> */}


{/* <div className='flex tracking-wider text-lg overflow-scroll h-screen w-screen '>
<div className='  p-5 float-right right-0 overflow-scroll border-b-[.5px]  border-r-[.5px] border-[#030303]  w-2/6 top-0 font-normal  '>
<section id="whatismisery?" className={styles.whatismiserydas}>
        <p className='  text-3xl text-center p-5  '>what is misery?</p>
        <p>misery is a mental health community and sober rave based in london and led by and for queer, trans, intersex, black people and people of colour (qtibpoc) with lived experience of madness, mental health challenges, time in hospital, addiction, public service use, disability, trauma, medication and neurodivergence.

we co-create free, playful, accessible sober spaces, services, practices, parties and resources to cultivate communities of care that can support and sustain the collective healing and resilience of qtibpoc world over.

misery is a reminder that you’re not too sensitive, it’s mad out here.</p>
</section>
        </div>
        


            <div className=' tracking-wider text-lg float-right right-0 overflow-scroll   w-2/6  top-0 font-normal  p-5 '>
            <section id="whatwedo" className={styles.whatismiserydas}>
            <p className=' text-3xl text-center p-5  '>what we do</p>
        <p>we strive to cultivate generative ecologies of connection, care and solidarity that can support and sustain the collective healing and resilience of our community. we know first hand that healing and liberation is interwoven and by nurturing community care and addressing collective trauma, we seek to disrupt the growing privatisation of healing and the “self-care industrial complex”. we work for and with lived experience leaders to co-create accessible, playful, and transformative peer-led healing spaces, services and resources by (un)archiving and (re)generating the vast wisdom, community resilience strategies and potential for joy that are abundant amongst our people..</p>
        </section>
        </div>
            </div> */}


{/* <section id="ourgoals">
<div className=' tracking-wide  border-[.5px] border-[#030303]  font-normal text-lg '>
            <p className=' text-3xl text-center  border-b-[.5px] border-[#030303] p-5 '>our goals</p>
            <div className=' pt-20'>
        <li className=' duration-500  pb-5'> ｡ to provide accessible, supportive and politically engaged events, spaces and services by and for qtibpoc to build community and help us to be in right relationship with ourselves, each other, and the land</li>
<li className=' duration-500  pb-5'>｡ to develop resources, research, artistic work, modalities and practices that facilitate healing and challenge dominant misperceptions about mental health, addiction, disability, trauma and neurodiversity</li>
<li className=' duration-500  pb-5'>｡ to promote leadership and development opportunities for qtibipoc with lived experience of mental health problems, madness, addiction, disability, trauma, and neurodivergence - within our communities, health and wellbeing settings, the arts and wider society</li>
        </div>
        </div>
</section> */}


{/* <section id="ourroots">
<div className=' tracking-wide  font-normal text-lg '>
            <p className=' text-3xl text-center border-b-[.5px] border-[#030303] p-5 '>our roots</p>
            <div className=' pt-20'>
        <p className=' duration-500  p-5'> the work of creating communities of care is not new, nor invented by us. it is ancient work that exists within communities, cultures and species around the world. we continue the legacies and lineages of our ancestors and the artists, activists and community workers that have come before us and those around the world that are committed to this work.</p>
<p className=' duration-500  p-5'>we are inspired by our friends and lovers, the creative power of our communities and the mistakes of our parents. we give thanks and draw strength from the disability and healing justice movements, black feminist theory and praxis, mad studies, queer of colour critique, radical transfeminists, our dyke, faggot and gender divine sibings worldwide, femmes of colour spaces, wxtchcraft, raving on the dancefloor, community-based transformative justice interventions, indigenous herbalists, generative somatics, revolutionary mothering, nurses, sex workers, teachers, survivors, carers, youth workers and black, brown, indigenous and diasporic spiritual traditions.</p>
<p className=' duration-500  p-5'>we have learnt that people are the experts in their own lives and believe that everyone should have the right to fail and the support they need to grow. we acknowledge that harm is an integral part of the human experience and that experiencing harm is one of the many ways our lives, minds, and hearts adapt to the world.</p>
<p className=' duration-500  p-5'>our work is rooted in the principles of healing centered harm reduction including trauma-informed care, agency, collaboration, intersectionality, consent and acknowledges the historical and on-going social, cultural, environmental and economic systems that constantly terrorise our communities including experiences of colonisation, anti-blackness and racism, sexism, homophobia, transphobia, classism, ableism and other oppressions.</p>
</div>   </div>
</section> */}


{/* <section id="ourdreams">
<div className='tracking-wide border-[.5px] border-[#030303]  font-normal text-lg '>
            <p className=' text-3xl text-center p-5 border-b-[.5px] border-[#030303] '>our dreams</p>
            <div className=' text-center flex p-10   font-normal text-lg '>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 1｡ </p>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> 2｡ </p>
            <p className=' flex-none text-8xl duration-500 font-light  m-auto'> Ɛ｡ </p>
            </div>
            <div className=' text-center flex p-10   font-normal text-lg '>
        <p className=' duration-500  pl-5 w-2/6'> we are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.We are dreaming of worlds where every queer, trans, intersex black, brown and indigenous person has access to a choice of knowledges, resources, communities and health care services that they need to sustain their wellbeing.</p>
<p className=' duration-500  pl-5 w-2/6'> worlds that are safer, happier, healthier and more peaceful. worlds where we all work to acknowledge and minimise our own potential for intimate, interpersonal, structural and ecological violence and in doing so resolve conflict compassionately.</p>
<p className=' duration-500  pl-5 w-2/6'> worlds where people before profits, harm-reduction and post traumatic growth is the norm. where we are all supported in alchemising our pain through play, consent, connection, boundaries and rest. worlds where you can cry and be held, if you want to.</p>
        </div>
        </div>
</section> */}
{/* <Link  href="./"><img className=" overflow-hidden z-50 float-right absolute -bottom-20 p-10 w-5/12 duration-500 hover:drop-shadow-[0_0px_5px_#ffffff]" src="https://i.ibb.co/6yR3mjn/misery-world-glitter.png"/></Link>
<Link  href="./Miserysite"><img className=" overflow-hidden z-50 absolute right-0 -bottom-20  p-10  w-5/12  duration-500 hover:drop-shadow-[0_0px_5px_#ffffff]" src="https://i.ibb.co/bQ4n39B/misery-site-slime.png"/></Link> */}


{/* <img className={styles.figuredas} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
{/* <img className={styles.logomis} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
        {/* <img className={styles.swerldas} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" />  */}

    



{/* what is miss */}

{/* <section id="whatismisery?" className={styles.whatismiserydas}>
  <div  className='  flex h-screen mx-auto px-0  '>
    <div className={styles.logoaa}>
  <img className={styles.swerl} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl1} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  <img className={styles.swerl2} src="https://i.ibb.co/ZR9zG0V/Miserymeets09-29-Family.png" /> 
  </div> */}
  {/* <img className={styles.logomishome} src="https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png"/> */}
 
  {/* <img className={styles.figure} src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
  {/* <div className={styles.figurenew}> https://i.ibb.co/S66hH07/MISERY-SLIME-2.png"  */}
  {/* <img className='flex justify-center m-auto items-center h-4/4 w-1/4  ' src="https://i.ibb.co/sFyFWsf/Bald.png"/> */}
  {/* </div> */}
  

  {/* <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 30, 0]} />
        <Draggable>

        </Draggable>
        <OrbitControls />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div> */}


    


  {/*   */}
      {/* <img className={styles.logoa} src="https://i.ibb.co/JyJxKXh/Esther-copy-2-Glow.png"/> */}
    {/* <img className={styles.swerl} src="https://i.ibb.co/Q6g7Tk0/Masturbator-White-Thick-Transparent.png" />  */}
    {/* https://i.ibb.co/qB2YqyQ/MISERY-FAUX-FUR.png text-[#ece784] */}
    {/* </div>
    </section> */}


{/* <section className='  flex h-screen mx-auto px-0  '>
<h1 className='text-8xl m-auto  p-15 z-0 max-w-2xl float-left '> misery is.. </h1>
    <p className=' text-[#f8f8f8]  pt-20 text-8xl m-auto p-6 font-light z-0 h-2/5 w-4/6 float left overflow-scroll' >
    <p className=' z-0 p-3  '></p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal  ml-0 hover:ml-9 duration-1000  '>crying at the party</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>your emotional support stuffed animal that looks more depressed than you do </p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>being a fag and a dyke at the same time</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>a 4 hour bath and a 7 day free trial</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>that one piece of butt hair the beautician forgot about </p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>waxing your butt in the first place</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>living in your overdraft but eating out anyway</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>searching for a halal photo to send nani ji</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>putting your headphones in at the back of the cab but not even listening to anything you just don’t want to chat</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>forgiving your younger self for the things they did to get you here</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>your second hand binder</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>falling in love with your therapist</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '> this too shall pass</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>freedom is sorrow is moments of connection is dissociation is remembering is moving through</p>
      <p className=' hover:text-[white] drop-shadow-[1rem_1rem_1rem_white] hover:font-normal w-5/6 p-7  ml-0 hover:ml-9 duration-1000 '>company</p>
      <p className=' text-[#000000] ml-0 text-9xl hover:ml-9 duration-1000 '><i>me and you</i></p>
      <p className=' p-10 '></p>
    </p>
</section> */}

{/* {showButton && (
        <button onClick={scrollToTop} className={styles.backtotop}>
          &#8679;
        </button>
      )} */}

    {/* <Footer></Footer>  */}
    {/* <FooterComponent></FooterComponent> */}

    </Layout>
  )
}


export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "homeimage" ]');
  const url = `https://jgs4s870.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};