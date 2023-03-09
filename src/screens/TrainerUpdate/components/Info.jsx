import React from 'react'
import PayTable from './PayTable';
import { FaFileUpload } from 'react-icons/fa'
import { Field, useFormik } from "formik";
 
function handleSubmit(event) {
    event.preventDefault();
    
    console.log("Verification Logic ")
    // Write the logic to check Te Paypal Id 
  }




function Info() {
     

      const validate = (values) => {
        const errors = {};

        if (!values.title) {
          errors.title = "Required";
        }

        if (!values.description) {
          errors.description = "Required";
        } else if (values.description.split(" ").length > 300) {
          errors.description = "Maximum of 300 words allowed";
        }

        return errors;
      };


      const formik = useFormik({
        initialValues: {
          title: "" ,
          description:"",
        },
        validate,
        onSubmit: (values) => {
          console.log(values);
        },
      });

    //   Transactions Data which is passed to the Paytable 

    const transactions = [
        {
          dateTime: new Date('2022-03-06T09:30:00Z'),
          transactionId: '1234567890',
          amountPaid: 99.99,
          status: 'completed'
        },
        {
          dateTime: new Date('2022-03-06T13:15:00Z'),
          transactionId: '0987654321',
          amountPaid: 49.99,
          status: 'completed'
        },
        {
          dateTime: new Date('2022-03-07T11:45:00Z'),
          transactionId: '2468101214',
          amountPaid: 149.99,
          status: 'cancelled'
        }
      ];
      

  return (
    <div className="sm:ml-6">
      <div className="mt-8 text-center items-center sm:items-start sm:text-start">
        <h1 className="font-bold text-2xl text-black  bg-white sm:ml-6 sm:text-base sm:-mb-2">
          Personal Info
        </h1>

        <form className="w-full max-w-lg sm:max-w-[55rem]">
          {/* Block input Contains od two input Starts  */}
          <div className="flex flex-wrap mx-3 m-6 ">
            {/* Input 1 */}
            <div className="w-full md:w-1/2 px-3 mb-[10px] md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-2 border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none text-xs "
                placeholder="change kar dena "
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title ? (
              <div className="text-red-500 text-[8px] -my-3">
                {formik.errors.title}
              </div>
            ) : null}
            </div>

            {/* Input 2 */}
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-2 border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none text-xs "
                placeholder="vivek se puchke"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.title && formik.errors.title ? (
              <div className="text-red-500 text-[8px] -my-3">
                {formik.errors.title}
              </div>
            ) : null}
          </div>
          {/* Block Input opf Two input Ends  */}

          {/* Block Input 2 starts */}

          <div className="flex flex-wrap mx-3 m-6 -mt-3">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-2 border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none text-xs "
                placeholder="Kyoni desig me samajh ahi aa raha kya input lena he "
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
             />
            </div>
            {formik.touched.title && formik.errors.title ? (
              <div className="text-red-500 text-[8px] -my-3">
                {formik.errors.title}
              </div>
            ) : null}
          </div>

          {/* Block Input 2 ends  */}

          {/* Text block Input starts  */}

          <div className="flex flex-wrap mx-3 m-6 -mt-3">
            <div className="w-full px-3">
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full  text-gray-800 bg-white rounded-lg border border-gray-800 text-xs  "
                onChange={formik.handleChange}
                value={formik.values.description}
                placeholder="Course Description (maximum of 300 words)"
                maxLength={300}
              />{formik.errors.description ? (
                <div className="text-red-500 text-[8px] -my-3">{formik.errors.description}</div>
              ) : null}
            </div>
          </div>
          {/* Text Block input Ends  */}
        </form>
      </div>

      {/* Personal Info Component Ends   */}

      {/* Verify Payment Component Starts   */}

      <div className="mt-10 text-center items-center sm:text-start">
        <h1 className="font-bold text-2xl text-black  bg-white sm:ml-6 sm:text-base sm:-mb-2">
          Verify Payment Account
        </h1>

        <form className="w-full max-w-lg sm:max-w-2xl">
          {/* Block input Contains od two input Starts  */}
          <div className="flex flex-wrap mx-3 m-6 ">
            {/* Input 1 */}
            <div className="w-full md:w-1/2 px-3 mb-[10px] md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-2 border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none text-xs "
                placeholder="Your Account Name"
              />
            </div>

            {/* Input 2 */}
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-2 border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none text-xs "
                placeholder="Your Account Number"
              />
            </div>
          </div>
          {/* Block Input opf Two input Ends  */}

          {/* Block Input 2 starts */}

          <div className="flex flex-wrap mx-3 m-6 -mt-3">
            <div className="w-full md:w-1/2 px-3 mb-[10px] md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-2 border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none text-xs "
                placeholder="Your Bank IFSC "
              />
            </div>
          </div>

          {/* Block Input 2 ends  */}
        </form>
      </div>

      {/* Verify Paypal */}

      <div className="mt-10 text-center items-center sm:text-start">
        <h1 className="font-bold text-2xl text-black  bg-white sm:ml-6 sm:text-base sm:-mb-2">
          Or Verify Paypal
        </h1>

        <form className="w-full max-w-lg sm:max-w-2xl" onSubmit={handleSubmit}>
          {/* Block input Contains od two input Starts  */}
          <div className="flex flex-wrap mx-3 m-6 ">
            {/* Input 1 */}
            <div className="w-full md:w-1/2 px-3 mb-[10px] md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-2 border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none text-xs "
                placeholder="Enter Your Paypal id"
              />
            </div>

            <div className="ml-32 mt-2 sm:ml-10 sm:mt-1 ">
              <button className="font-sans  text-blue-800 border-[1px] border-gray-400 px-8 py-1 rounded-3xl">
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Payment table using components by pasing rendering the object   */}

      <div className="text-center mb-3 sm:text-start sm: ml-6">
        <h1 className="text-2xl font-bold sm:text-base">Payment History</h1>
      </div>
      <div class="flex flex-col overflow-x-auto  ml-6 sm:ml-6">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 sm:min-w-[62rem] ">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light sm:text-center">
                <thead className="border-2 border-gray-300 rounded-t-4xl">
                  <tr>
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

      
      <div className="text-center items-center mb-3 mt-6 sm:text-start sm: ml-5">
        <h1 className="text-2xl font-bold sm:text-base">Uplaod Documents</h1>
     
        <div className="w-[165px] h-36 bg-slate-300 rounded-2xl m-6 ml-20 sm:ml-0 ">
         <div className=''>
            
         <FaFileUpload size={34} className=" absolute left-[169px] mt-10 sm:left-[110px]" color={`#8f8e8d`}/>
        
        <p className='text-slate-700 text-xs absolute left-[135px] mt-24 sm:left-[83px]'>Add Your CV Here</p>

        </div>  

        </div>
     
      </div>


    </div>
  );
}

export default Info