import React from 'react'
import Navbar from './components/Navbar'
import prof from './assets/demo-prof.jpg'
import Profile from './components/Profile'
import PayTable from './components/PayTable'
function UserMycourse() {


  const transactions = [
    {
      courseName: 'Lorem Ipsum',
      dateTime: new Date('2022-03-06T09:30:00Z'),
      transactionId: '1234567890',
      amountPaid: 99.99,
      status: 'completed'
    },
    {
      courseName: 'Lorem Ipsum',

      dateTime: new Date('2022-03-06T13:15:00Z'),
      transactionId: '0987654321',
      amountPaid: 49.99,
      status: 'completed'
    },
    {
      courseName: 'Lorem Ipsum',

      dateTime: new Date('2022-03-07T11:45:00Z'),
      transactionId: '2468101214',
      amountPaid: 149.99,
      status: 'cancelled'
    }
  ];


  return (
   <>
    <Navbar />
    
     {/* 
         
         prop1 = image 

         prop2 = name 

         prop3 = email

         prop4 = contact detail
         
         */}

   <div className="text-center mt-2 sm:text-left sm:flex sm:justify-between sm:w-[676px]">
   <Profile prop1={prof} prop2='Vivek Mehta' prop3='Mehtajindabad@gmail.com' prop4={999999999}/>
    
    <button className="  font-semibold mt-4 ml-2 text-blue-800 border-2 p-2 px-7 rounded-3xl sm:h-10 sm:mt-10 sm:py-0">Edit Profile</button>

      
    </div> 



    <div className="text-center mb-3 mt-6 sm:text-start sm: ml-6">
        <h1 className="text-2xl font-bold sm:text-base">My Courses</h1>
      </div>
      <div class="flex flex-col overflow-x-auto  ml-6 sm:ml-6">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 sm:min-w-[62rem] ">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light sm:text-center">
                <thead className="border-2 border-gray-300 bg-gray-400 rounded-t-4xl">
                  <tr>
                  <th scope="col" className="px-6 py-3 ">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Date/Time
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Amount Paid
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <PayTable transaction={transaction} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     

      <div className="text-center mb-3 mt-9 sm:text-start sm: ml-6">
        <h1 className="text-2xl font-bold sm:text-base">Purchase History</h1>
      </div>
      <div class="flex flex-col overflow-x-auto  ml-6 sm:ml-6">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 sm:min-w-[62rem] ">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light sm:text-center">
                <thead className="border-2 bg-gray-400 rounded-t-4xl">
                  <tr>
                  <th scope="col" className="px-6 py-3 ">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Date/Time
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Amount Paid
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <PayTable transaction={transaction} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    

   </>
  )
}

export default UserMycourse