import React from 'react';
import classes from './users.module.css';
import avatarMan from './../../assets/images/avatar.svg';
/* import { Paginator } from './Pagination/Paginator'; */

const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return(
        <div>
            {/* <Paginator pageCount={278} onClick={()=>{}} pageLimit={6}/> */}
            <div className = {classes.pages}>
                {pages.map(p => {
                    return <span
                                className={`${classes.page} ${props.currentPage === p && classes.selectedPage}`}
                                onClick={(e)=>{props.onPageChanged(p)}}
                                key={props.id}>{p}</span> 
                })}
            </div>
                {props.users.map(u => <div key = {u.id}>
                    <div className = {classes.user}>
                        <div className = {classes.userAva}>
                            <div>
                                <img className = {classes.userPhoto} src = {u.photos.small !== null ? u.photos.small : avatarMan} alt = ''/>
                            </div>
                            <div>
                                {u.followed 
                                ?<div className = {classes.button} onClick = {()=>{props.unfollow(u.id)}}>Unfollow</div>
                                :<div className = {classes.button} onClick = {()=>{props.follow(u.id)}}>Follow</div>}   
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