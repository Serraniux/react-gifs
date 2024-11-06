import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
import { ClearButton } from "./components/ClearButton"

//KEY DN5KofgfldbH6zJkcLKf82QJSoX3KB3m
export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])
    // const [input, setInput] = useState('Hola wey')
    const onAddCategory =(newCategory) =>{
        // categories.push('Carlos')
        if (categories.includes(newCategory)) return
        setCategories([newCategory,...categories])
    }
    const onClearCategories = () => {
        setCategories([]); // Limpia las categorías
    };
  return (
    <>
    
    {/* INPUT */}
    
    <div className="actions">
        <h1>Serraniux Gifts</h1>
        <ClearButton onClear={onClearCategories} />
    </div>

    <AddCategory
    categorieSize={categories.length} 
    onNewCategory={event => onAddCategory(event)}
    />
    {
        categories.length < 1 && ( <h2>No hay gifts...</h2> )
    }
    {
        categories.map((category) => (
            <GifGrid key={category} category={category}/>
        ))
    }
    </>
  )
}
