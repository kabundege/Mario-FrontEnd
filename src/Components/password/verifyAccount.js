import React from 'react'
import { connect } from 'react-redux'

const verifyAccount = () => {
    return (
        <div className="container white developer">
            <h2 className="header center">Continue To Mario</h2>
            <div className="input-field center">
                <button className="btn green darken-2 z-depth-0 large">Click-Here to Verify</button>
            </div>
        </div>
    )
}

export default connect()(verifyAccount)