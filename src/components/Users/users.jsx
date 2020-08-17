import React from 'react';
import classes from './users.module.css';

const Users = (props) =>{ 
    if (props.users.length === 0){
    props.setUsers([
    {
        id: 1,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTodTGYqOI6A5y8uxf_6FZeUTwHg7BOyUSVEw&usqp=CAU',
        followed: true,
        firstName: 'Dmitriy',
        secondName: 'Aleshin',
        status: 'I\'m a programmist',
        country: 'Russia',
        city: 'Tver'
    },
    {
        id: 2,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTodTGYqOI6A5y8uxf_6FZeUTwHg7BOyUSVEw&usqp=CAU',
        followed: false,
        firstName: 'Alexey',
        secondName: 'Stolyarov',
        status: 'You are the best',
        country: 'Russia',
        city: 'Moscow'
    },
    {
        id: 3,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTodTGYqOI6A5y8uxf_6FZeUTwHg7BOyUSVEw&usqp=CAU',
        followed: true,
        firstName: 'Alexandr',
        secondName: 'Ivanov',
        status: 'Just a status',
        country: 'Ukraine',
        city: 'Kiev'
    }])
}
    
    return(<div>{
        
            props.users.map(u => <div key = {u.id}>
            
                <span>
                    <div>
                        <img className = {classes.userPhoto} src = {u.photoUrl} alt = ''/>
                    </div>
                    <div>
                        {u.followed 
                        ?<button onClick = {()=>{props.unfollow(u.id)}}>unfollow</button>
                        :<button onClick = {()=>{props.follow(u.id)}}>follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.firstName + '' + u.secondName}</div><div>{u.status}</div>
                    </span>
                    <span>
                <div>{u.country}</div><div>{u.city}</div>
                    </span>
                </span>
            
            </div>)
           
    }    
    </div> 
    );
}

export default Users;