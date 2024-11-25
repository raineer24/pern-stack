import React from 'react'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='border-r border-state-500 p-1 md:p-4 flex flex-col w-44 md:w-1/2'>
        <SearchInput />
        <div className="divider px-3"></div>
    </div>
  )
}

export default Sidebar