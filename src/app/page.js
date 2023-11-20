"use client"

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomeMiddle from "./components/HomeMiddle";


export default function Home() {
  
  return (
  <section>
    <Navbar/>

    <div className="flex ">
      <Sidebar/>
   {/* center content  */}
      <div>
        <HomeMiddle/>
      </div>
    </div>
    
  </section>
  )
}
