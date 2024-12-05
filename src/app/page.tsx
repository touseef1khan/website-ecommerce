import Category from "@/components/category";
import Explore from "@/components/explore";
import Freedelvry from "@/components/free";
import FreshSales from "@/components/freshsales";
import Herro from "@/components/herro";
import Music from "@/components/music";
import Products from "@/components/views";
import Futured from "@/components/futured";
import React from "react";
import Arrival from "@/components/arrival";


export default function Home() {
    return(
      <div >
        
         <Herro/>
         <FreshSales/>
         <Category/>
         <Products/>
         <Music/>
         <Explore/>
         <Futured/>
         <Freedelvry/>
         <Arrival/>
    </div>)
}
