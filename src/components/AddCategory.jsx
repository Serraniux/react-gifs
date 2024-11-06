import { useState } from "react"



export const AddCategory = ({onNewCategory,categorieSize}) => {
    const [input, setInput] = useState('')
    const onInputChange = (event) =>{
        setInput(event.target.value)
    }
    const onSubmit =(event) =>{
        console.log(event)
        event.preventDefault()
        if (input.trim().length <= 1) return;
        // setCategories(categories => [input, ...categories])
        onNewCategory(input.trim())
        setInput('')
    }
    return (
        <>
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            value={input} 
            onChange={(event)=>onInputChange(event)} 
            placeholder="Buscar gift"
            disabled={categorieSize >= 10}
            />
        </form>
        </>
    )
}
