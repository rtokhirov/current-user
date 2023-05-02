import { useState } from 'react'
import Navbar  from './components/Navbar.jsx'
import Users from './components/Users.jsx'
import Form from './components/Form.jsx'

function App() {

  const [showForm,setShowForm]=useState(false)
  const [users,setUsers]=useState([
  {
    age:"20",
    firstName:"Raxmatillo",
    from:"Asaka",
    gender:"Male",
    job: "Developer",
    lastName: "Toxirov",
    picture: "https://media.licdn.com/dms/image/D4D35AQEtpSph8gq3GQ/profile-framedphoto-shrink_200_200/0/1657698242084?e=1683586800&v=beta&t=tmZXjP38sS5aUwdOryfmDsp41TOR2VdARKiFxAoFN58"}
  ])

  function addUsers (user){
    setUsers((old)=>{
      return[...old,user]
    })
    setShowForm(false)
  }

  function deleteUsers (id){
    setUsers((old)=>{
      return old.filter((user)=>{
        return user.id!==id;
      })
    })
  }
  
  return (
    <div className='App' key={'dsadsadasdas'}>
        <Navbar key={'dwqdqwdqwdqw'} users={users}/>

        {showForm && <Form setShowForm={setShowForm} addUsers={addUsers} key={'dqwdqw'} />}

        <div key={'dasdsa'} style={{position:'fixed',transform:'rotate(-90deg)',top:'50%',backgroundColor:'orangered',       left:'-40px',cursor:'pointer',padding:'5px', fontSize:'20px',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',zIndex:'1' }}
        onClick={()=>{setShowForm(true)}}
        >
          <p>Create user</p>
        </div>
      
        <div className='UserContainer' key={'1212312'}>
          {users&&users.map((user)=>{
            return (<Users user={user} deleteUsers={deleteUsers} key={user.id}/>)
          })}
        </div>
        
        <footer key={'ddasdisa'} 
          style={{backgroundColor:'#141414',display:'flex',justifyContent:'center',padding:'10px'}}>
            <p>All rights reserved. <a target='_blank' href="https://github.com/rtokhirov">Raxmatillo Toxirov</a></p>
        </footer>
    </div>
  )
}

export default App
