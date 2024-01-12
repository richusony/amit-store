import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteCartItem, increaseQty, decreaseQty } from '../redux/productSlice'

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
    const dispatch = useDispatch();


    return (
        <div className='bg-slate-200 p-2 flex gap-4 rounded border border-slate-300'>
            <div className='bg-white p-3 rounded overflow-hidden'>
                <img src={image} className='h-28 w-40 object-cover' alt=' ' />
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <div className='flex justify-between'>
                    <h3 className='font-semibold text-slate-600 capitalize text-lg md:text-xl'>{name}</h3>
                    <div className='cursor-pointer text-red-500 text-2xl hover:text-slate-500 transition-all' onClick={() => dispatch(deleteCartItem(id))}><MdDelete /></div>

                </div>
                <p className='text-slate-500 font-medium'>{category}</p>
                <p className='font-bold text-base'><span className='text-red-500'>₹ </span><span>{price}</span></p>

                <div className='flex justify-between w-full'>
                    <div className='flex gap-3 items-center'>
                        <button className='bg-slate-300 py-1 my-2 rounded hover:bg-slate-400 p-1' onClick={() => dispatch(increaseQty(id))}><BsPlus /></button>
                        <p className='font-semibold p-1'>{qty}</p>
                        <button className='bg-slate-300 py-1 my-2 rounded hover:bg-slate-400 p-1' onClick={() => dispatch(decreaseQty(id))} ><BiMinus /></button>
                    </div>
                    <div className='flex items-center gap-2 font-bold text-slate-700'>
                        <p>Total : </p>
                        <p><span className='text-red-500'>₹ </span>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
