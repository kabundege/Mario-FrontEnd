import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { DeleteComment } from '../../store/actions/Additionals';

const comment = ({ comments,isAuth,deleteAction }) => {
    const deleteIcon = {cursor:"pointer",position:"relative",right:"0px",top:"4px",fontSize:"20px"}
    const AuthorIcon = {position:"relative",right:"5px",top:"4px",fontSize:"20px"};
    const handlerComment = (storyid,commentid) => {
        if(window.confirm('Are you sure!!!')){
            console.log("story id"+storyid,'comment id'+commentid)
            // deleteAction(storyid,commentid)
        }
    }
    if(comments[0]){
        return(
            <div className="container comment">
                {
                    comments.map(comment=>{
                        return (
                            <div key={comment.commentid}>
                                <div className="author">
                                { isAuth.role === 'admin' ? (
                                    <i style={deleteIcon} className="material-icons green-text text-darken-1" onClick={()=>handlerComment(comment.storyid,comment.commentid)}>delete</i>
                                ):(
                                    <i style={AuthorIcon} className="material-icons green-text text-darken-1">person_pin</i>
                                )}
                                {comment.author}</div>
                                <ReactQuill id="display" style={{border:"1px solid lightgrey",borderRadius:"5px"}} value={comment.content} readOnly/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }else{ 
        return (
            <div className="container comment">
                <div className="author"><i style={{position:"relative",right:"5px",top:"4px",fontSize:"20px"}} className="material-icons green-text text-darken-1">person_pin</i>Author</div>
                <ReactQuill id="display" style={{border:"1px solid lightgrey",borderRadius:"5px"}} value="<p>Be The <strong>First</strong> to React" readOnly/>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        isAuth : state.auth
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        deleteAction: (storyid,commentid) => { dispatch(DeleteComment(storyid,commentid))}
    }
}

export default connect(mapStateToprops,dispatchStateToProps)(comment)
