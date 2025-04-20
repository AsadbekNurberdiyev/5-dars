import React from 'react';
import { Video, Grip, Bell, Mic, Search, Menu } from 'lucide-react';

const Header = ({ onOpenMenu }) => {
    return (
        <div className="flex justify-between items-center bg-gray-300 px-4 py-1 w-full gap-2 flex-wrap sm:gap-4">
           <div className="flex items-center gap-4">
           <Menu
                size={28}
                className="cursor-pointer shrink-0"
                onClick={onOpenMenu}
            />
            <div className='flex items-center border rounded-lg justify-center flex-grow max-w-[300px] min-w-[250px]'>
                <input
                    type="search"
                    placeholder="Search"
                    className="flex-grow py-2 px-3 outline-none bg-transparent text-sm"
                />
                <Search size={16} className='cursor-pointer me-2' />
            </div>
            <Mic size={22} className='cursor-pointer shrink-0' />
           </div>
            <div className='flex items-center gap-4 justify-end shrink-0'>
                <Video size={18} />
                <Grip size={18} />
                <Bell size={18} />
                <div className='w-7 h-7 rounded-full overflow-hidden'>
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4E0BAQHyrp9ozFj9tg/company-logo_200_200/company-logo_200_200/0/1688372956881/img_media_logo?e=2147483647&v=beta&t=1xsLLJMfB8-FmlpLuSusl751Ykf-b3ua7_l-3PEbUSo"
                        alt="profile"
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </div>
        
    );
};

export default Header;
