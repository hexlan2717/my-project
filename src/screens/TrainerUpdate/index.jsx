import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import prof from './assets/demo-prof.jpg'
import Box from './components/Box'
import Info from './components/Info'
// 31BB00 F29100 009BF2
const transactions = [
      {
         "subject" : "Total Earning Till Now" , 
         "amount"  : 8618,
         "color"   : "#FF5A5A" 
       },
       
       {
         "subject" : "Your Current Balance" , 
         "amount"  : 8618,
         "color"   : "#31BB00" 
       },
       
       {
         "subject" : "Your Pending Balance" , 
         "amount"  : 8618,
         "color"   : "#F29100" 
       },
       
       {
         "subject" : "Total Courses Sold" , 
         "amount"  : 233,
         "color"   : "#009BF2" 
       }
   ]


function TrainerUpdate() {
  return (
     <>
        {/* NAvbar Component  */}
        
        <Navbar />

         {/* 
         
         prop1 = image 

         prop2 = name 

         prop3 = email

         prop4 = contact detail
         
         */}

    
    <Profile prop1={prof} prop2='Vivek Mehta' prop3='Mehtajindabad@gmail.com' prop4={999999999}/>
     
      {/*
        Prop1->  Transcation Data

        Prop2-> subject

        Prop3-> colour 
         
        this is a loop to render the object 
      */}

<div className=" mt-6 flex justify-center sm:justify-start sm:mt-0">
  <div className='sm:pt-8 sm:pl-12 sm:flex sm:space-x-3 space-y-0'>
     {transactions.map((tran, index) => (
        <div key={index} >
      <Box prop1={tran.amount} prop2={tran.subject} prop3={tran.color}/>
        </div>
      ))}

 </div>
</div>


{/* Info Component Which includes 
Personal Info & 
verify Paymnent 
Upload documents 

Formik is Used in this component 
*/}

<Info />





   
     
     </>   
   
    
  )
}

export default TrainerUpdate