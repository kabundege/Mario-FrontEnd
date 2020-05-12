import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const Notifications = (props) => {
    const { notes } = props
    notes.slice(1,notes.length)
    return(
        <div className="section">
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                       {
                           notes[0] ? notes.map(note=>{
                               if(notes.length - notes.indexOf(note) <= 5)
                               return(
                                <div className="card-action grey lighten-4 notification" key={note.id}>
                                    {note.action}
                                    <span className="green-text darken-2"> {moment(note.timestamp).calendar()}</span>
                                </div>
                               )
                               return null;
                           }) : null
                       }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notes : state.Notify.Notes 
    }
}

export default connect(mapStateToProps,{ note : ''})(Notifications)
