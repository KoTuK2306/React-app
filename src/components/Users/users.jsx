import React from 'react';
import classes from './users.module.css';
import * as axios from 'axios';
import avatar from './../../assets/images/avatar.svg';

const Users = (props) =>{ 
    if (props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    
}   
    return(<div>{
            props.users.map(u => <div key = {u.id}>
                <div className = {classes.user}>
                    <div className = {classes.userAva}>
                        <div>
                            <img className = {classes.userPhoto} src = {u.photos.small !== null ? u.photos.small : avatar} alt = ''/>
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
                                    {"u.country + '' + u.city"}
                                </div>
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
           
    }    
    </div> 
    );
}

export default Users;