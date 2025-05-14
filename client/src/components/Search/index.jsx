import React from 'react'
import '../Search/style.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
import '../Search/style.css'

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[10px] relative'>
        <input type='text' placeholder='Search for products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
        <Button className='!absolute top-[8px] right-[5px] z-50 w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'><IoSearch className='text-[22px] text-[#000]'/></Button>
    </div>
  )
}
export default Search;