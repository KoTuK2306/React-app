import React from 'react';
import classes from './users.module.css';
import avatarMan from './../../assets/images/avatar.svg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return(
        <div>
            <div className = {classes.pages}>
                {pages.map(p => {
                    return <span className={`${classes.page} ${props.currentPage === p && classes.selectedPage}`}
                                 onClick={(e)=>{props.onPageChanged(p)}}
                                 key={props.id}>{p}</span> 
                })}
            </div>
                {props.users.map(u => <div key = {props.id}>
                    <div className = {classes.user}>
                        <div className = {classes.userAva}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className = {classes.userPhoto}
                                         src = {u.photos.small !== null ? u.photos.small : avatarMan} alt = ''/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed 
                                ?<div className = {classes.button} onClick = {()=>{
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '3e2fdf84-ddd0-4444-8816-5015098e09aa'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0){
                                            props.unfollow(u.id)
                                        }  
                                    });   
                                }}>
                                    Unfollow
                                </div> 
                                :<div className = {classes.button} onClick = {()=>{
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '3e2fdf84-ddd0-4444-8816-5015098e09aa'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0){
                                            props.follow(u.id)
                                        }  
                                    });   
                                }}>
                                    Follow
                                </div>}  
                            </div>
                        </div>
                        <div className = {classes.userInfo}>
                            <div className = {classes.userInfoItem}>
                                <div className = {classes.userName}>
                                    {u.name}
                                    <div className = {classes.userLocation}>
                                        {'No information available'}
                                    </div>
                                </div>
                                <div>
                                    {u.status === null ? 'Status is empty' : u.status}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)      
            }    
        </div>
    )
} 

export default Users;