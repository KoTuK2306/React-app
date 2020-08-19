import React from 'react';
import classes from './users.module.css';
import * as axios from 'axios';
import avatarMan from './../../assets/images/avatar.svg';

class Users extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        }); 
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        }); 
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }
        return <div>
            <div className = {classes.pages}>
                {pages.map(p => {
                    return <span
                                className={`${classes.page} ${this.props.currentPage === p && classes.selectedPage}`}
                                onClick={(e)=>{this.onPageChanged(p)}}>{p}</span> 
                })}
            </div>
            {
                 this.props.users.map(u => <div key = {u.id}>
                    <div className = {classes.user}>
                        <div className = {classes.userAva}>
                            <div>
                                <img className = {classes.userPhoto} src = {u.photos.small !== null ? u.photos.small : avatarMan} alt = ''/>
                            </div>
                            <div>
                                {u.followed 
                                ?<div className = {classes.button} onClick = {()=>{this.props.unfollow(u.id)}}>Unfollow</div>
                                :<div className = {classes.button} onClick = {()=>{this.props.follow(u.id)}}>Follow</div>}   
                            </div>
                        </div>
                        <div className = {classes.userInfo}>
                            <div className = {classes.userInfoItem}>
                                <div className = {classes.userName}>
                                    {u.name}
                                    <div className = {classes.userLocation}>
                                        {"u.country + '' + u.city"}
                                    </div>
                                </div>
                                <div>
                                    {'u.status'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)      
        }    
        </div> 
    };
}

export default Users;