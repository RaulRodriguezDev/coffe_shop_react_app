import React from 'react'
import Img from 'next/image'
import useKiosk from '../../hooks/useKiosk'
import Category from '../components/Category.jsx'

const Sidebar = () => {
    const { categories } = useKiosk()
    const test = ["t","r","s"]
    return (
        <>
            <Img width={300} height={100} src='/assets/logo.svg' alt='coffee shop logo'/>
            <nav className='mt-10'>
                {categories.map((category) => (
                    <Category key={category.id} category={category}/>
                ))}
            </nav>
        </>
    )
}

export default Sidebar