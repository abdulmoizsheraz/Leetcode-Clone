import React,{useState} from 'react'
import { problems } from './utils/ProblemsData';
import Link from 'next/link';
import {CiYoutube} from "react-icons/ci";
import YouTube from 'react-youtube';
import {AiOutlineCloseCircle} from "react-icons/ai"
const Problems = () => {
  const [isOpen,setisOpen]=useState(false);
  const showyt=()=>{
    if(isOpen == true){
      setisOpen(false);
    }else{
      setisOpen(true);
    }
  }
  return (
    <table class="table-auto  text-white w-2/3  p-16 ">
  <thead className='border-b-2 border-gray-500'>
    <tr className='rounded-sm'>
      <th className='p-2 m-5 w-32 text-left'>Title</th>
      <th className='p-2 m-5 w-16'>Difficulty</th>
      <th className='p-2 m-5 w-16'>Category</th>
      <th className='p-2 m-5 w-16'>Solution</th>
    </tr>
  </thead>
  <tbody>
    {problems.map((problem,index)=>{
  return <tr className={index % 2 === 0 ? " " : "bg-gray-600 rounded-sm"} key={problem.id}>
      <td className='p-2 m-5 w-32 '><Link className=' hover:text-sky-400' href={`/problems/${problem.id}`}>{problem.title}</Link></td>
      <td className={problem.difficulty === "Easy" ? "text-green-500" :problem.difficulty === "Hard"?" text-red-600":"text-yellow-500" }>{problem.difficulty}</td>
      <td className='p-2 m-5 w-16 text-center'>{problem.category}</td>
      <td className='p-2 m-5 w-16 text-center cursor-pointer' onClick={showyt}>{problem.videoId!==""?<CiYoutube size={30} className='m-auto' />:"Coming soon"}</td>
    </tr>
    })}

  </tbody>
<tfoot>
  {isOpen && 

<div className='absolute flex justify-center z-20 items-center bg-black h-screen w-screen opacity-90 top-0 left-0 '
>
  <div>
<div className=' bg-black-400 bg-opacity-100'>
<AiOutlineCloseCircle  className="cursor-pointer" size={40} onClick={showyt}/>
</div>
  <YouTube
  videoId={"8-k1C6ehKuw"} 
/>
</div>
  </div>
}

</tfoot>
</table>
  )
}

export default Problems