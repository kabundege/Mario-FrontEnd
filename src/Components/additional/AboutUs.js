import React from 'react'
import macbook from '../../img/dash.jpg'

const AboutUs = () => {
    return (
        <div className="container">
            <div className="parallax-container">
            <h2 className="header center white-text" style={{position:"relative",top:"10%"}}>About -|_ Us</h2>
            <img className="parallax" src={macbook} alt="macbook"/>
            </div>
            <div className="section white">
                <div className="row container">
                    <h1 className="center" >Mario Diary</h1>
                    <p className="grey-text text-darken-3" style={{fontSize:"20px"}}>
                    A Portable and Cross Platform Book Where you record events, emotions, thoughts or feelings.
                    Somtimes a personal journal is a record of significant experiences and It is much more personal than a diary.
                    <span className="grey lighten-2 green-text green-text-darken-2"> Mario </span> helps you Tell your Story or keep it private.    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

