import React from 'react';

const TabList = ({item}) => {
    return (
        <div>
            <h6 className='text-xs font-bold'>Item lists</h6>
            <div className='flex items-center mt-5 gap-5 '>
                <div>
                    image
                </div>
                <div>
                    <h5 className='text-sm font-bold'>Oranges</h5>
                    <p>Vitamin C</p>
                </div>
            </div>
        </div>
    );
};

export default TabList;