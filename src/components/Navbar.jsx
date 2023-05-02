import React from 'react'
import styled from 'styled-components'

function Navbar({users}) {
    users.length
  return (
    <Nav>
        <div>
            <h1>Cuser</h1>
            <h3>{users.length?`Users N: ${users.length}`:'No user 🙃'}</h3>
            {/* <h3>No user 🙃</h3> */}
        </div>
    </Nav>
  )
}

const Nav=styled.nav`
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: yellow;
        padding: 10px 60px;
        max-width: 1340px;
        margin-right: auto;
        margin-left: auto;
    }
    border-bottom: 3px dashed red;
    
    h1{
        font-size: 40px;
    }
`

export default Navbar