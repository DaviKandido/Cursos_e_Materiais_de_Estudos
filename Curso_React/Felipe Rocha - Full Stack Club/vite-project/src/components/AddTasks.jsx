import { useState } from "react";

function AddTasks({onAddTaskSubimit}){


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function clearInput(){
        setTitle("")    
        setDescription("")
    }
    
    return(
        <>
            <div className="flex flex-col p-6 space-y-4 rounded-md shadow bg-slate-200">
                <input 
                    id="title"
                    type="text" 
                    placeholder="Digite o título da tarefa" 
                    className="px-4 py-2 rounded-md border-slate-300 outline-slate-400"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    id="description"
                    type="text" 
                    placeholder="Digite a descrição da tarefa" 
                    className="px-4 py-2 rounded-md border-slate-300 outline-slate-400"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" className="px-4 py-2 font-medium text-white rounded-md bg-slate-500" onClick={() => {onAddTaskSubimit(title, description); clearInput()}}>  Adicionar </button>
            </div>
        </>
    )
}

export default AddTasks