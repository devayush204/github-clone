"use client"

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


export default function Home() {
  
  return (
  <section>
    <Navbar/>

    <div>
      <Sidebar/>
    </div>
  </section>
  )
}
