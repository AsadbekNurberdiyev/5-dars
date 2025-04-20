import {Link} from 'react-router-dom'
import {Youtube, House, Compass, Layers2, CalendarCheck, BookA, History, TvMinimalPlay, Heart, ChevronsDown } from 'lucide-react';

const Saidbar = () => {
    return (
            <div className="flex flex-col  bg-gray-300  px-4 h-screen">
                <div className=' flex items-center  gap-4 py-4 px-2'>
                    <div className='items-center flex   hover hover:bg-gray-200 px-2 gap-2'>
                        <button className='text-red-500 '><Youtube /></button>
                        <h1>YouTobe</h1>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-2 py-4 px-2 '>
                    <Link to={"/"} className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'><House /> <p>Home</p> </Link >

                    <button className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'><Compass/> <p>Explores</p></button>
                    <button className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'> <Layers2 /> <p>Shorts</p></button>
                    <button className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'> <CalendarCheck /> <p>Subscriptions</p> </button>
                </div>
                <hr />
                <div className='flex flex-col gap-2 py-4 px-2 '>
                    <Link to={"/library"} className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'><BookA /> <p>Library</p></Link >
                    <Link to={"/history"} className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'><History /> <p>History</p></Link >
                    <Link to={"watch"} className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'><TvMinimalPlay />  <p>watch later</p></Link >
                    <Link to={"/like"} className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'><Heart /> <p>Like videos</p></Link >
                    <Link to={"/show"} className='flex items-center gap-2 py-2 px-2 hover hover:bg-gray-200'><ChevronsDown /> <p>Show more</p></Link >
                </div>
                <hr />
                <div className='flex flex-col gap-2 py-4 px-2 '>
                    <p>SUBSCRIPTIONS</p>
                </div>

            </div>
    )
}
export default Saidbar;