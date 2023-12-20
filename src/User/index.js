import React from 'react'
import styled from 'styled-components'
function User(props){
    console.log(props)
    const UserName= styled.h1`
        background-color: red;
        font-size: 20px;
    `
    const  UserEmail =styled.h2`
        color: yellow;
    `
 
    return(
        <div>
            {}
            <p><UserName>{props.name}</UserName></p>
            {}
            <UserEmail>{props.email}</UserEmail>
        </div>
    )
}
export default User