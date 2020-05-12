import React from 'react'
import undraw from '../../img/undraw.svg'

export default function pageNotFound() {
    return (
        <div className="container">
        <img 
            className="center" 
            src={undraw} 
            style={{
                margin:"2% 2% 0% 0%"
            }}
            alt="404"/>
        </div>
    )
}
