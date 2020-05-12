import React,{ Component } from 'react'
import Trends from './trends'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton ,{ SkeletonTheme } from 'react-loading-skeleton';
import { TokenAction } from '../../store/actions/authAction';
import { publicProjects,userProjects } from '../../store/actions/projectActions';
import { searchAction } from '../../store/actions/Additionals';

class Landing extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchType:'content',
            content : '',
            file:null
        }
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerChange(e){
        console.log(e)
        const { id,value } = e.target;
        this.setState({
            [id]: value
        })
    }

    handlerSearch(){
        this.props.search(this.state)
    }
    
    componentDidMount(){
        this.props.public();
        const { auth } = this.props;
        if(!auth.email){
            const token = localStorage.getItem('token')
            if(token){
                this.props.isAuth(token);
            }
        }
    }

    render(){
        const { projects } = this.props;
        let stories;
        if(this.state.searchType === 'content'){
            stories = projects.filter(project =>{
                const title = project.title;
                const newTitle = title.toLowerCase()
                return newTitle.includes(this.state.content)
            })
            if(!stories[0]){
                stories = projects.filter(project => project.content.includes(this.state.content))
            }
        }else if(this.state.searchType === 'owner'){
            stories = projects.filter(project =>{
                const owner = project.owner;
                const newOwner = owner.toLowerCase()
                return newOwner.includes(this.state.content)
            })
        }
        const display = stories;
        return(
            <div >                
                <div className="section  explaining">
                    <div className="center welcome">
                        <Link to="/signup" className="btn tiny green darken-2">Get Started</Link>
                    </div>
                </div>
                <div className="section grey lighten-3">
                    <div className="row container">
                        <div className="dashboard">
                            <div className="row">
                                <div className="col s12 m6">
				                    <form onSubmit={this.handlerSearch} className="white filter">
                                            <h5 className="header developer green-text text-darken-5" style={{fontWeight:"bold"}}>Stories Filter</h5>
                                            <div className="input-field">
                                                <p className="choice">
                                                    <label>
                                                        <input 
                                                            id="searchType" 
                                                            value="content" 
                                                            className="with-gap" 
                                                            name="group1" 
                                                            type="radio"
                                                            checked={this.state.searchType === 'content'} 
                                                            onChange={this.handlerChange} 
                                                            /><span>Content</span>
                                                    </label>
                                                    <label>
                                                        <input 
                                                            id="searchType" 
                                                            value="owner" 
                                                            className="with-gap" 
                                                            name="group1" 
                                                            type="radio"    
                                                            checked={this.state.searchType === 'owner'} 
                                                            onChange={this.handlerChange}
                                                            /><span>Owner</span>
                                                    </label>
                                                </p>
                                            </div>
                                            <div className="search landingSearch white">
                                            <input 
                                                type="text" 
                                                placeholder="Search Here..."
                                                id="content" 
                                                value={this.state.searchContent}
                                                onChange={this.handlerChange} />
                                            <label><i className="material-icons" onClick={this.handlerSearch}>find_in_page</i></label>
                                            <p className="SearchError"></p>
                                        </div>
				                    </form>
                                    { display[0] ? ( 
                                            <ProjectList projects={display}/> 
                                        ): (
                                            <div style={{background:"whitesmoke",padding:"10px"}}>
                                                <Skeleton width={"70%"}/>
                                                <SkeletonTheme color="rgb(188, 245, 188)" highlightColor="whitesmoke">
                                                <p>
                                                    <Skeleton count={5} />
                                                </p>
                                                </SkeletonTheme>
                                                <Skeleton circle={true} height={50} width={50}/>
                                                <br/>
                                                <Skeleton width={"40%"}/>
                                            </div>
                                        )}
                                </div>
                                <div className="col s12 m5 offset-m1">
                                    <Trends/>
                                </div>
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
        public: () => {dispatch(publicProjects())},
        isAuth: (token) => { dispatch(TokenAction(token))},
        UserProjects: () => {dispatch(userProjects())},
        search: (data) => {dispatch(searchAction(data))},
    }
}

const mapStateToProps = (state) => {
    return{
        projects : state.project.Public,
        auth : state.auth,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Landing)
