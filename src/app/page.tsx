import { Span } from "next/dist/trace";
import Image from "next/image";
import React from 'react'


export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <div className="flex-grow felex item-center justify-center p-6">
        <div className=" bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300">
      {/*Background image*/}
       <div className="absolute inset-0 flex items-center justify-center">
       <div  className="relative w-full h-full max-w-[350px] max-h-[400px]">
        <Image
        src="/images/background.png"  
           alt="background image"
           width={350}
           height={400}
           objectFit="cover"
           className="opacity-10"/>
        </div>

        </div>

       {/*Left section*/}  

       <div className=" w-2/3 pr-4 pt-16 relative z-10">
              { /*Logo*/}



          


              <img
        src="/images/Sindh1Logo.png"
        alt="Card logo"
        className="absolute top-[-20px] left-0 w-16 h-18 z-10"
        />

       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong> Name:</strong>
        </span>
        <span className="text-black"> Rabia Arif </span>
       </p>
       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong> Roll No:</strong>
        </span>
        <span className="text-black"> 00300001</span>
       </p>
       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong> Distance Learning:</strong>
        </span>
        <span className="text-black"> No </span>
       </p>
       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong>City :</strong>
        </span>
        <span className="text-black"> Krachi </span>
       </p>

       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong> center:</strong>
        </span>
        <span className="text-black">  Governer House Karachi </span>
       </p>

       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong> Campus:</strong>
        </span>
        <span className="text-black"> Main </span>
       </p>

       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong>Days/Time:</strong>
        </span>
        <span className="text-black"> tuesday - 02:00pm- 5:00 pm</span>
       </p>
         


       <p className="mb-2">
        <span className="text-sky-500">
          {" "}
           <strong> Batch:</strong>
        </span>
        <span className="text-black"> 1 </span>
       </p>
       


       {/*Button  Section*/}
        <div className="flex flex-col mt-4">
          <button className="relative w-full p-1 rounded-lg border grey- 300 bg-blue-900 text-white items-center justify-items-center flex">

          <span className="absolute inset-0 bg-slate-500" 

          style={{width: "50%" }}> 
          </span>


          <span className="relative z-10"> Q2 &  WMD </span>


          </button>
        </div>
        </div>
        {/*Right Section*/}
        <div className="w-1/3 text-center relative z-10">
        <Image
        // src={"/images/pic2.jpeg"}
        src={"/images/bb.jpeg"}
         alt={"profile picture"} 
         width={800}
         height={800}
         className= "rounded-lg mb-6 w-full" />

         <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">  
        {""}
        Authorized
         Signature</p>
        </div>

    

       </div>
      </div>

        </div>
      
    
  
  );
}
