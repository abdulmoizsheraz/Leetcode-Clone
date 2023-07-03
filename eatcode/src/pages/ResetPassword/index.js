import React,{useState} from 'react';
import {auth} from "../../firebase/firebase"
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
const index = () => {
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  const [email, setEmail] = useState('');
const handlesubmit=async(e)=>{
  e.preventDefault();
  const success = await sendPasswordResetEmail(
    email,
  );
  if (success) {
    alert('Sent email ! Please check your Indox');
  }else{
    alert("Some Error Occured!")
  }
}
  return (
    <div className='text-white flex flex-col items-center justify-center'>
        <h2 className='mt-5'>Reset Password</h2>
        <section class="bg-gray-50 dark:bg-gray-900">

      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
         
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5"onSubmit={handlesubmit}>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true"  onChange={(e)=>{setEmail(e.target.value)}}value={email}/>
              </div>

              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
          </form>
     
  </div>
</section>
        </div>
      
  )
}

export default index
