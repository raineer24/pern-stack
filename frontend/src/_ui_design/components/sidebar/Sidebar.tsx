import React from 'react'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
    <SearchInput />
    <div className='divider px-3'></div>
   
</div>
  )
}

export default Sidebar