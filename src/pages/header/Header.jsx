import React from 'react';
import {Video, Grip, Bell, Mic, Search  } from 'lucide-react';

const Header = () => {
    return (
        <nav className=" flex  justify-between  items-center bg-gray-300 px-4 py-2  w-full gap-4">
        <div className='flex items-center  border rounded-lg justify-center '>
        <input
                type="search"
                id="id"
                name="name"
                placeholder="Search"
                className="w-[300px] border border-slate-200  py-3 px-5 outline-none	bg-transparent"
            />
            <button className='px-2 py-2 cursor-pointer'><Search /></button>
        </div>
            <button><Mic /></button>
            <div className='flex items-center gap-8 w-full justify-end'>
            <Video size={15} />
            <Grip />
            <Bell />
            <div className='w-8 h-8  raunded-[50%] '> <img src="https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo" alt="img"  className=' rounded-[50%]'/></div>

            </div>
        </nav>

    )
}
export default Header;