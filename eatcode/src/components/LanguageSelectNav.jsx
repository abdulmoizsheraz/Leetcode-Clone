import React from 'react'

const LanguageSelectNav = () => {
  return (
    <div className='bg-black '>
     <div class="relative inline-block text-left bg-black  ml-2 text-white ">
  <select id="dropdown" className="form-select bg-black  h-11">
    <option value="option1">Javascript</option>
    <option value="option2" disabled>Python</option>
    <option value="option3" disabled>Java</option>
    <option value="option3" disabled>C++</option>
    <option value="option3" disabled>Swift</option>
  </select>
</div>
    </div>
  )
}

export default LanguageSelectNav