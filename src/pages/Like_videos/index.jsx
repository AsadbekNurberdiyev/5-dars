import { Heart } from 'lucide-react';
import React, { useEffect } from 'react';
import { useState } from 'react';



const Like = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("videoItems"));
        
        if (stored) {
            setItems(stored)
        }
        
      }, []);

    return (
        <div className="grid grid-cols-4 gap-4">
            {items.filter((item) => item.isLiked).map((item) => <div key={item.id} className="border-lg rounded-lg bg-white p-3 hover:shadow-lg">
                <img src={item.image} alt="no upload image" className='w-full rounded-lg' />
                <div className="flex items-center justify-between">
                    <div className="flex items-center my-3 gap-2">
                        <img src={item.image} alt="no" className='rounded-[50%] w-1/6' />
                        <span>{item.channel_name}</span>
                    </div>
                    <Heart fill={`${item.isLiked ? "red" : "white"}`}/>
                </div>
                <span>{item.likes} likes</span>
            </div>)}
        </div>
    )

}

export default Like;