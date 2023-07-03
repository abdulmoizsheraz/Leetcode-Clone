import { Press_Start_2P } from 'next/font/google';
import PreviousMap from 'postcss/lib/previous-map';
import React from 'react'
// import CircleSkeleton from "@/components/Skeletons/CircleSkeleton";
// import RectangleSkeleton from "@/components/Skeletons/RectangleSkeleton";
// import { auth, firestore } from "@/firebase/firebase";
// import { DBProblem, Problem } from "@/utils/types/problem";
// import { arrayRemove, arrayUnion, doc, getDoc, runTransaction, updateDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";

import { AiFillLike, AiFillDislike, AiOutlineLoading3Quarters, AiFillStar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
const ProblemDes = () => {
  return (
  <>
  <div className='h-screen problemdes  overflow-auto px-8 py-2 leading-8 flex flex-col'>
    {/* Tabs */}
    <div className='flex h-11 w-full items-center mb-3 pt-2 bg-dark-layer-2 text-white '>
				<div className={"bg-dark-layer-1 rounded-t-[5px]  px-5 py-[10px] text-sm cursor-pointer"}>
					Description
				</div>
			</div>
<div><h1 className='text-2xl font-serif '>1.Title</h1></div>
<div className="likes flex items-center ">
   <span className='px-3 py-1 bg-green-400 m-2 text-sm rounded-full text-green-800'>Easy</span>
  <span className='flex items-center m-2 text-gray-500'><AiFillLike />42</span> 
  <span className='flex items-center m-2 text-gray-500'><AiFillDislike/>12</span>
  <span className='flex items-center m-2 text-gray-500'><TiStarOutline size={20}/></span>
  {/* <span className='flex items-center m-2'><AiFillStar/></span> */}
</div>
<div className='description'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis culpa animi vero nam enim, deleniti sed. Numquam excepturi laborum voluptates, provident ibero aliquid nemo accusantium dolorem est. Velit quisquam dignissimos, officiis eligendi natus quasi incidunt provident perferendis enim impedit?
</div>
<div className=' font-bold flex flex-col justify-center text-white'>
    <span>Example 1:</span>
    <div className='code  p-8 m-2  leading-8'>
        {/* cODE */}
       <span className='text-sm '><span className='font-bold text-white'>Input: </span><span>nums = [2,7,11,15], target = 9 </span></span><br/>
       <span className='text-sm'><span className='font-bold text-white'>Output: </span>[12,10] </span><br/>
       <span className='text-sm'><span className='font-bold text-white'>Explanation: </span>Because nums[0] + nums[1] == 9, we return [0, 1].</span><br/>
    </div>
</div>
<div className=' font-bold flex flex-col justify-center text-white'>
    <span>Example 2:</span>
    <div className='code  p-8 m-2  leading-8'>
        {/* cODE */}
       <span className='text-sm '><span className='font-bold text-white'>Input: </span><span>nums = [2,7,11,15], target = 9 </span></span><br/>
       <span className='text-sm'><span className='font-bold text-white'>Output: </span>[12,10] </span><br/>
       <span className='text-sm'><span className='font-bold text-white'>Explanation: </span>Because nums[0] + nums[1] == 9, we return [0, 1].</span><br/>
    </div>
</div>
<div className=' font-bold flex flex-col justify-center text-white'>
    <span>Example 3:</span>
    <div className='code  p-8 m-2  leading-8'>
        {/* cODE */}
       <span className='text-sm '><span className='font-bold text-white'>Input: </span><span>nums = [2,7,11,15], target = 9 </span></span><br/>
       <span className='text-sm'><span className='font-bold text-white'>Output: </span>[12,10] </span><br/>
       <span className='text-sm'><span className='font-bold text-white'>Explanation: </span>Because nums[0] + nums[1] == 9, we return [0, 1].</span><br/>
    </div>
</div>


<div>
  {/* Constarints */}
<div>
<span className='font-bold text-white'>Constraints:</span>
<ul className='text-white ml-5 list-disc '>
<li className='cons'>{"2 <= nums.length <= 104"}</li>
<li className='cons'>{"2 <= nums.length <= 104"}</li>
<li className='cons'>{"2 <= nums.length <= 104"}</li>
</ul>
</div>
</div>
  </div>

  </>
  )
}

export default ProblemDes