import React from 'react'
import { CiForkAndKnife } from 'react-icons/ci'

const FilterProduct = ({ category, onClick ,isActive}) => {
    return (
        <div onClick={onClick}>
            <div className={`text-3xl p-5 ${isActive?"bg-white border-[1px] border-black":"bg-yellow-400"} rounded-full cursor-pointer`}>
                <CiForkAndKnife />
            </div>
            <p className='text-center font-medium my-1 capitalize'>{category}</p>
        </div>
    )
}

export default FilterProduct
