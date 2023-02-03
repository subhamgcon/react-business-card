import React from "react"
import About from "./components/about"
import Footer from "./components/footer"
import Info from "./components/info"
import Interest from "./components/interest"


export default function App() {
    return (
        <>
        <div className="img--container">
            <img src = "./subham.jpg" width="100%"/>
        </div>
        <div className = "info">
        <Info />
        </div>
        <div className="about">
        <About />
        </div>
        <div className="interest">
         <Interest />
         </div>
        <div className="footer">
        <Footer />
        </div>
   </>
    )
}