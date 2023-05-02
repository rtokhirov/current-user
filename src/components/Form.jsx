import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react'

function Form({setShowForm,addUsers}) {
    document.addEventListener('keydown',(e)=>{
        if(e.key==='Escape'){
            setShowForm(false)
        }
    })
    const picture=useRef()
    const firstName=useRef()
    const lastName=useRef()
    const age=useRef()
    const from=useRef()
    const job=useRef()
    const genderM=useRef()
    const genderF=useRef()
    const formref=useRef()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newUser={
            picture: picture.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            age: age.current.value,
            from: from.current.value,
            job: job.current.value,
            gender: genderM.current.checked?'Male':'Female',
            id: Math.round(Math.random()*100000) 
        }
        addUsers(newUser)
        formref.current.reset()
    }
    
  return (
    <form style={{position:'fixed',width:'100%',height:'100%',backdropFilter:'blur(8px)',zIndex:'2',backgroundColor:"rgba(0,0,0,0.6)",overflow:'hidden'}} 
    onClick={()=>{setShowForm(false)}}
    onScroll={(e)=>{e.stopPropagation()}}
    onSubmit={handleSubmit} ref={formref}>
        <FormDiv onClick={(e)=>{e.stopPropagation()}} onScroll={(e)=>{e.stopPropagation()}}>
            <label >
                <p>Picture: </p>
                <input required type="url" name="" id="" ref={picture} />
            </label>
            <label >
                <p>Firstname: </p>
                <input required type="text" name="" id="" ref={firstName} />
            </label>
            <label >
                <p>Lastname: </p>
                <input required type="text" name="" id="" ref={lastName} />
            </label>
            <label >
                <p>Age: </p>
                <input required type="number" name="" id="" ref={age} />
            </label>
            <label >
                <p>From: </p>
                <input required type="text" name="" id="" ref={from} />
            </label>
            <label >
                <p>Job: </p>
                <input required type="text" name="" id="" ref={job} />
            </label>
            <label >
                <p>Gender: </p>
                <div className='gender' >
                    <small><p>Male:</p> <input required type="radio" name="gender" id="" ref={genderM} /></small>
                    <small><p>Female:</p> <input required type="radio" name="gender" id="" ref={genderF} /></small>
                </div>
            </label>
            <button type="submit" >Submit</button>
        </FormDiv>
    </form>
  )
}

const FormDiv=styled.div`
    z-index: 3;
    width: 400px;
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    margin-top: 50px;
    border-radius: 15px;
    border: 5px double red;
    display: flex;
    flex-direction: column;
    background-color: #0f0b0b;
    label{
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        input{
            font-size: large;
        }
    }
    small{
        display: flex; 
        gap: 5px;
    }
    .gender{
        display: flex;
        gap: 15px;
        padding-left: 15px;
    }
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`

export default Form