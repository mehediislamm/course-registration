/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'

import Blogs from './component/Blogs/Blogs'
import Coursenames from './component/Coursenames/Coursenames'

function App() {
 const [coursename, setCourseName] = useState([]);
 const [remaining , setRemaining] = useState(0);
 const [totalCost, setTotalCost] = useState(0);
 const handleAddCoursename = blog =>{
  const isExit = coursename.find((item)=>item.ID ==blog.ID);
  let count = blog.Reading_Time;
  if(isExit){
    Swal.fire({
      title: 'Sorry, you have used this cart',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  else{
    coursename.forEach((item)=>{
      count = count + item.Reading_Time;
    })
    const totalRemaining = 20-count;
    if(count > 20){
      Swal.fire({
        title: 'Sorry, Time exceeded 20 hours!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
 else{
  setTotalCost(count);
  setRemaining(totalRemaining);

    const NewCoursename = [...coursename, blog];
 setCourseName(NewCoursename)
 }
  }
 
 }
 

  return (
    <>
    <h1 className='text-6xl text-center'>Course Registration</h1>
  <div className='md:flex ml-5 '>
  <Blogs handleAddCoursename={handleAddCoursename}></Blogs>
  <Coursenames  remaining={remaining} totalCost={totalCost} coursename={coursename} ></Coursenames>
  </div>

    </>
  )
}

export default App
