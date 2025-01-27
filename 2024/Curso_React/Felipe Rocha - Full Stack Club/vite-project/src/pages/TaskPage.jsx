import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TasksPage() {

    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    

    return (
        <>
            <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
                <div className="w-[500px] space-y-4">
                    <div className="relative flex justify-center">
                        <button className="absolute top-0 left-0 p-2 text-white rounded-md buttom-0 bg-slate-400" onClick={() => navigate(-1)}>
                            <ChevronLeftIcon/>  
                        </button>  
                        <h1 className="text-3xl font-bold text-center text-slate-100">
                            Detalhes da Tarefa
                        </h1> 
                    </div>
                
                    <div className="p-4 rounded-md bg-slate-200">
                        <h2 className="text-xl ont-bold text-slate-600">Tarefa: {title}</h2>
                        <p className="text-slate-600">Descrição: {description}</p>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default TasksPage