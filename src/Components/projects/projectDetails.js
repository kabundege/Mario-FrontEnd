import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment';
import Comment from '../additional/comment';
import { CreateComment } from '../../store/actions/Additionals';
import { TokenAction } from '../../store/actions/authAction';
import { deleteProject,likeAction,publicProjects,userProjects } from '../../store/actions/projectActions';
import ReactQuill from 'react-quill';
import chriss from '../../img/chriss.jpg';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class ProjectDetails extends Component {
    state={
        comment:null,
        owner:null,
        display:null,
        loading:true,
        likes:null,
        updateLike:false
    }

    handlerchange(e){
        const { id,value } = e.target;
        this.setState({
            [id]:value
        })
    } 

    handleSubmit = () => {
        const { id } = this.props.params;
        const { comment } = this.props;
        comment(id,this.state.comment)
    }

    handlerDelete = (id) =>{
        const { deleteAction } = this.props;
        if(window.confirm('Are you sure!!!')){
            deleteAction(id)
            setTimeout(()=>{this.props.history.push('/dash')},1000)
        }
    }

    handlerlike = (id) =>{
        if(!this.state.updateLike){
            this.props.like(id)
            this.setState({
                likes: this.state.likes + 1,
                updateLike: true
            })
        }else{
            console.log("Not Allowed Again")
        }
    }

    componentDidMount(){
        const { isAuth,auth,GetPublicProjects,GetUserProjects,UserProject,OnePublic } = this.props;

        if(!isAuth.email){
            const token = localStorage.getItem('token')
            if(token){
                auth(token);
            }
        }
        if(isAuth){
            GetUserProjects();
        }
        GetPublicProjects();
            if(UserProject){
                this.setState({
                    owner:true,
                    loading:false,
                    display: UserProject,
                    likes: UserProject.likes
                })
            }else if(OnePublic){
                this.setState({
                    owner:false,
                    loading:false,
                    likes: OnePublic.likes,
                    display:OnePublic
                })
            }else{
                this.props.history.push('/PageNotFound')
            }
    }

    render(){
        const { display,likes,loading } = this.state;
        let image;
        if(display){
            display.image ? image = display.image : image = chriss;
        }
        return (
            <div className="container section project-details">
                { !loading ? (<div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title green-text">
                            <img src={image} id="storyAuthor" alt="Story Author"/>
                                {display.title}</span>
                                <ReactQuill id="display" value={display.content} readOnly/>   
                        </div>
                        <div className="card-action gret lighten-4 grey-text">
                            { this.state.owner && localStorage.getItem("token") ? (
                                <div className="right icons">
                                    <Link to='#'><i className="material-icons green-text text-darken-1" onClick={()=>this.handlerDelete(display.storyid)}>delete</i>
                                    </Link>
                                    <Link to={'/update/'+ display.storyid}><i className="material-icons green-text text-darken-1">mode_edit</i></Link>
                                </div>
                            ) : (
                                <div className="right likes" onClick={()=>this.handlerlike(display.storyid)} style={{cursor:"pointer"}}>
                                    <i className="material-icons green-text text-darken-1">favorite_border</i>
                                    {likes}
                                </div>
                            )}
                            <div><i style={{position:"relative",right:"5px",top:"5px",fontSize:"20px"}} className="material-icons green-text text-darken-1">person_pin</i>{display.owner}</div>
                            <div><i style={{position:"relative",right:"5px",top:"5px",fontSize:"20px"}} className="material-icons green-text text-darken-1">date_range</i>{moment(display.timeStamp).calendar()}</div>
                        </div>
                    </div>
                ):(
                    <div style={{background:"whitesmoke",padding:"10px"}}>
                        <Skeleton circle={true} height={50} width={50}/>
                        <SkeletonTheme color="rgb(188, 245, 188)" highlightColor="whitesmoke">
                        <p>
                            <Skeleton count={5} />
                        </p>
                    </SkeletonTheme>
                </div>
                )}
                <div className="card z-depth-0 section">
                    <div className="card-content">
                        <Comment comments={this.props.getComments}/>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <h4 className="developer center black-text">Create a Comment</h4>
                        <div className="input-field container">
                            <label>Your Names</label>
                            <input type="text"/>
                        </div>
                        <div className="input-field">
                            <ReactQuill id="comment" placeholder="Comment...." onChange={this.handlerchange}/>
                        </div>                    
                        <div className="input-field">
                            <button className="btn green darken-2 z-depth-0" onClick={this.handleSubmit}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,oldProps) => {
    const newId = oldProps.match.params.id
    let id;
    isNaN(newId) ? id = newId : id = parseInt(newId)
    
    return{
        UserProject : state.project.UserProjects.find(project => project.storyid === id),
        OnePublic: state.project.Public.find(project => project.storyid === id),
        isAuth:   state.auth,
        getComments: state.Additional.Comments.filter(comment=> comment.storyid === id)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteAction : (storyid) => {dispatch(deleteProject(storyid))},
        like : (storyid) => {dispatch(likeAction(storyid))},
        GetPublicProjects: () => {dispatch(publicProjects())},
        GetUserProjects: () => {dispatch(userProjects())},
        auth: (token) => { dispatch(TokenAction(token))},
        comment: (payload)=>{ dispatch(CreateComment(payload))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails)
