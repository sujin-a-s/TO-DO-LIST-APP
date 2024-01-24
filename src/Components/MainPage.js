import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCompletedLists, addToDoLists, deleteToDoLists } from '../utils/appSlice'

const MainPage = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const dispatch = useDispatch()
    const todo = useSelector(store => store.todolist)
    const completed = useSelector(store => store.todolist)
    const [seeList,setSeeList] = useState(false)
    const [seeCompleted,setSeeCompleted] = useState(false)
    

    const handleAddButtonLogic = () => {
;
        dispatch(addToDoLists({ title:title, description:description }))
        setTitle('')
        setDescription('')
    }

    const handleSeeListButton = () => {
        setSeeList(true);
        setSeeCompleted(false);
    }

    const handleCompletedButton = () => {
        setSeeCompleted(true);
        setSeeList(false);
    }

    const handleDeleteButtonLogic = (titleToBeDeleted) => {
        console.log("Deleting:", titleToBeDeleted);
        dispatch(deleteToDoLists(titleToBeDeleted))
    }

    const handleTickButtonLogic = (title,description) => {
        dispatch(addCompletedLists({title:title,description:description}))
        dispatch(deleteToDoLists(title))
    }

  return (
    <div className=' mt-[5%] px-6 py-[15%] w-2/5 mx-auto rounded-xl right-0 left-0 bg-slate-950 opacity-90  '>
        <div className='ml-52 -mt-32 '>
        <h1 className='text-white text-3xl font-bold  '>TO DO LIST</h1>
        </div>

        <form className='mt-[27%] '  onSubmit={(e)=>e.preventDefault()}>
            
            <div className='flex -mt-42 '>
                <div>
                    <h2 className='text-violet-700 ml-1'>Title :</h2>
                    <input onChange={(e)=>setTitle(e.target.value)} value={title} className='p-3 px-6 mt-2 rounded-md ml-2 bg-slate-950 border-2 border-violet-700  text-white'></input>
                </div>

                <div>
                    <h1 className='text-violet-700 ml-24'>Description :</h1>
                    <input onChange={(e)=>setDescription(e.target.value)} value={description} className='ml-24 rounded-md mt-2 p-3 px-6 bg-slate-950 border-2 border-violet-700  text-white'></input>
                </div>


            </div>

            <div className=''>
                    <button onClick={handleAddButtonLogic} className='bg-violet-700 rounded-md mt-10 p-2 px-5 mx-[44%] border-2 border-slate-950 '>Add</button>
            </div>

            <div>
            {seeList && !seeCompleted && (
            <div>
            <h1 className='text-white text-xl  mt-10 mb-10 font-bold'>THE TASKS TO BE COMPLETED </h1>
            {todo.todolists.map((item, index) => (
                
                <ul className='border-2 border-violet-700 mt-4'>
                <li className="text-white p-5 text-xl font-bold mt-1" key={index}>{item.title}</li>
                <li className="text-white p-5  mt-1" key={index}>{item.description}</li>
                <div className='flex'>
                <button onClick={() => handleDeleteButtonLogic(item.title)} className='bg-violet-700 rounded-sm mt-10 p-2 px-5 ml-[70%] my-2 border-2 border-slate-950 '>Delete</button>
                <button onClick={() => handleTickButtonLogic(item.title,item.description)} className='bg-violet-700 rounded-sm mt-10 p-2 px-5  my-2 border-2 border-slate-950 '>✔️</button>
                </div>
                </ul>
                
                
            ))}

            </div>
            )}
            </div>



            <div>
            {seeCompleted && !seeList && (
            <div>
            <h1 className='text-white text-xl mt-10 mb-10 font-bold'>THE COMPLETED TASKS</h1>
            {completed.completedLists.map(
                (item,index) => (
                    <ul className='border-2 border-violet-700 mt-2'>
                    <li className="text-white p-5 text-xl font-bold mt-1" key={index}>{item.title}</li>
                    <li className="text-white p-5  mt-1" key={index}>{item.description}</li>
                    </ul>
                )
            )}
            </div>
            )}
            </div>

            <div className='flex ml-52'>
                <button onClick= {handleSeeListButton} className="bg-violet-700 mt-10 rounded-md  px-auto p-3  border-2 border-slate-950">  See List  </button>
                <button onClick={handleCompletedButton} className="bg-violet-700 mt-10 rounded-md  px-auto ml-4 p-3 border-2 border-slate-950">Completed</button>
            </div>

        </form>

    </div>
  )
}

export default MainPage