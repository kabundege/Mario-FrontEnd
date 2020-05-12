import React,{ Component } from 'react';
import Skeleton ,{ SkeletonTheme } from 'react-loading-skeleton';
import Notification from './notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { TokenAction } from '../../store/actions/authAction';
import { userProjects } from '../../store/actions/projectActions';
import { searchAction } from '../../store/actions/Additionals';

class Dash extends Component{
    constructor(){
        super()
        this.state = {
            searchType:'story',
            content: ''
        }
        this.handlerChange = this.handlerChange.bind(this)
    }

    componentDidUpdate(){
        this.props.search(this.state)
    }

    handlerChange(e){
        const { id,value } = e.target;
        this.setState({
            [id] : value
        })
    }

    componentDidMount(){
        const { auth } = this.props;
        this.props.UserProjects(auth.token)
        if(!auth.email){
            const token = localStorage.getItem('token')
            if(token){
                !auth.authError ? this.props.isAuth(token) : localStorage.removeItem("token");   
            }else{
                this.props.history.push("/login")
            }
        }
    }
    
    render(){
        const { projects } = this.props;

        let display;

        const contents = projects.filter(project => project.content.includes(this.state.content))

        const titles = projects.filter(project => {
            const title = project.title;
            const newTitle = title.toLowerCase()
            return newTitle.includes(this.state.content)
        })


        if(titles[0]){
            display = titles;
        }else{
            display = contents;
        }
    
        return(
            <div >
                <div className="section  explainingDash">
                    <form className="container dasher" onSubmit={this.handlerSearch}>
                        <h2 className="center white-text">Find Stories</h2>
                        <div className="container search">
                            <input 
                                type="text" 
                                style={{ color:"white" }}
                                placeholder="Search Here..."
                                id="content" 
                                value={this.state.searchContent}
                                onChange={this.handlerChange} />
                            <label><i className="material-icons" onClick={this.handlerSearch}>find_in_page</i></label>
                            <p className="SearchError"></p>
                        </div>
                    </form>
                </div>
                <div className="section grey lighten-3">
                    <div className="row container">
                        <div className="row">
                            <div className="col s12 m6">
                            { display ? ( 
                                            <ProjectList projects={display}/> 
                                        ): (
                                            display.map(el=><div style={{background:"whitesmoke",margin:"2% auto",padding:"10px"}}>
                                                <Skeleton width={"70%"} />
                                                <SkeletonTheme color="rgb(188, 245, 188)" highlightColor="whitesmoke">
                                                <p>
                                                    <Skeleton count={5} />
                                                </p>
                                                </SkeletonTheme>
                                                <Skeleton circle={true} height={50} width={50}/>
                                                <br/>
                                                <Skeleton width={"40%"}/>
                                            </div>)
                                        )}
                            </div>
                            <div className="col s12 m5 offset-m1">
                                <Notification/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        UserProjects: () => {dispatch(userProjects())},
        isAuth: (token) => { dispatch(TokenAction(token))},
        search: (data) => {dispatch(searchAction(data))}
    }
}

const mapStateToProps = (state) => {
    return{
        projects : state.project.UserProjects,
        auth : state.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dash)
