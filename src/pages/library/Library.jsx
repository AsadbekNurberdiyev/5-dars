import { Heart } from 'lucide-react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Library = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("videoItems"));
        
        if (stored) {
            setItems(stored)
        }
        
      }, []);

    const updateLike = (id) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, isLiked: !item.isLiked } : item
        );

        setItems(updatedItems);
        
        localStorage.setItem("videoItems", JSON.stringify(updatedItems));
    }

    return (
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2">
            {items.map((item) => <div key={item.id} className="border-lg rounded-lg bg-white p-3 hover:shadow-lg">
                <img src={item.image} alt="no upload image" className='w-full rounded-lg' />
                <div className="flex items-center justify-between">
                    <div className="flex items-center my-3 gap-2">
                        <img src={item.image} alt="no" className='rounded-[50%] w-1/6' />
                        <span>{item.channel_name}</span>
                    </div>
                    <Heart fill={`${item.isLiked ? "red" : "white"}`} onClick={() =>updateLike(item.id)}/>
                </div>
                <span>{item.likes} likes</span>
            </div>)}
        </div>
    )

}

export default Library;