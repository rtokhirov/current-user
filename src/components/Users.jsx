import React from 'react'
import styled from 'styled-components'

function Users({user,deleteUsers}) {
  return (
        <UserDiv key={'dsadas'}>
            <img src={user.picture} alt="" />
            <h3>{user.firstName} {user.lastName}</h3>
            <h4>Age: {user.age}</h4>
            <p>From: {user.from}</p>
            <p>Job: {user.job}</p>
            <p>Gender: {user.gender}</p>
            <div onClick={()=>{deleteUsers(user.id)}}>Delete</div>
        </UserDiv>
  )
}


const UserDiv=styled.div`
    /* width: 250px; */
    text-align: center;
    box-shadow: rgba(47, 126, 187, 0.7) 3px 0px 10px 2px;
    padding: 0.8rem 0.5rem;
    transition: transform 0.2s ease 0s;
    height: 340px;
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    h4{
        margin-top: -5px;
    }
    p{
        margin-bottom: 3px;
    }
    div{
        background-color: orange;
        padding: 3px 5px;
        cursor: pointer;
    }
`


export default Users