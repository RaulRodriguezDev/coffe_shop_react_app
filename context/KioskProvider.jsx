import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const KioskContext = createContext()

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})

    const getCategories = async () => {
        const { data } = await axios('/api/categories')
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setActualCategory(categories[0])
    }, [categories])

    const handleclickCategory = id => {
        const category = categories.filter(c => c.id === id)
        setActualCategory(category[0])
    }

    return(
        <KioskContext.Provider
            value={{
                categories,
                actualCategory,
                handleclickCategory
            }}
        >
            {children}
        </KioskContext.Provider>
    )
}

export {
    KioskProvider
}

export default KioskContext