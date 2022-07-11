import React from "react"
import ReactDOM from "react-dom"
import Photo from "./Photo"
import Name from "./Name"
import Buttons from "./Buttons"
import Info from "./Info"
import Footer from "./Footer"
function Main() {
    return (
    <>
    <Photo />
    <Name />
    <Buttons />
    <Info />
    <Footer />
    
    </>
    )
}


ReactDOM.render(<Main />, document.getElementById("root"))