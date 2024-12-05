import About from "../components/about"
import Views from "../components/views"
import Freedelvry from "../components/free"
import React from "react"
function AboutPage(){
    return(
       <div>
         <About />
         <Views />
         <Freedelvry />
         {/* about cahnging */}
       </div>
    )
}
export default AboutPage