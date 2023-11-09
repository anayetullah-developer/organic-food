import Image from 'next/image';
import React from 'react';

const TabList = ({fruit}) => {
    console.log(fruit)
    return (
        <div>
            <div className='flex items-center mt-5 gap-5 border-2 hover:border-[#e5562786] p-3 rounded-lg'>
                <div>
                    <Image src={fruit.image} width={43} height={43} unoptimized  alt={fruit.name}/>
                </div>
                <div>
                    <h5 className='text-sm font-bold'>{fruit.name}</h5>
                    <p>{fruit.vitamine}</p>
                </div>
            </div>
        </div>
    );
};

export default TabList;