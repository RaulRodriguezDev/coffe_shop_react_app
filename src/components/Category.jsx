import React from 'react'
import Img from 'next/image'
import useKiosk from '../../hooks/useKiosk'

const Category = ({ category }) => {
    const { actualCategory, handleclickCategory } = useKiosk() 
    const { name, icon, id } = category
    return (
        <div className={`${actualCategory?.id == id ? 'bg-amber-400': ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
            <Img width={70} height={70} alt='icon' src={`/assets/icono_${icon}.svg`}/>
            <button
                type='button'
                className='text-2xl font-bold hover:cursor-pointer'
                onClick={() => handleclickCategory(id)}
            >
                {name}
            </button>
        </div>
    )
}

export default Category