import React from 'react'
import Split from 'react-split'
import ProblemDes from './ProblemDes'
import Playground from './Playground'
const Workspace = () => {
  return (
    <Split
    className="split"
    minSize={0}
>
   <ProblemDes/>
    <div className='h-screen overflow-auto '>
<Playground/>
    </div>
</Split>
  )
}

export default Workspace