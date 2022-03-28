import axios from 'axios'
import { useContext, useState } from 'react'
import { Context } from '../context/context'

const DeleteModel = () => {
  const { model, dispatch } = useContext(Context)
  const [deleteId, setDeleteId] = useState('')
  const [showWarning, setShowWarning] = useState(false)

  const handleDelete = async (e) => {
    if (deleteId.length > 0) {
      await axios.delete(`http://localhost:5000/api/form/${deleteId}`)
    } else {
      e.preventDefault()
      setShowWarning(true)
      setTimeout(() => {
        setShowWarning(false)
      }, 2000)
    }
  }

  return (
    <div>
      {model.deleteModel && (
        <>
          <div
            className='w-[100vw] z-10 h-[100vh] fixed top-0 bg-transparent'
            onClick={() =>
              dispatch({
                type: 'DISABLE_DELETEMODEL',
                payload: {
                  ...model,
                  deleteModel: false,
                },
              })
            }
          ></div>
          <form className='absolute z-20 top-[10rem] shadow-md flex flex-col gap-3 left-[35%] p-4 bg-white w-[30vw] rounded-md'>
            <h1 className='p-2'>Delete Data</h1>
            <hr />
            <input
              onChange={(e) => setDeleteId(e.target.value)}
              className='py-2 px-2 outline-0'
              type='text'
              name='deleteID'
              placeholder='Enter ID'
            />
            <span
              className={`text-red-700 text-sm ${
                showWarning ? 'block' : 'hidden'
              } `}
            >
              please enter the ID
            </span>
            <hr />
            <div className='flex justify-end w-full gap-2'>
              <button
                onClick={() =>
                  dispatch({
                    type: 'DISABLE_DELETEMODEL',
                    payload: {
                      ...model,
                      deleteModel: false,
                    },
                  })
                }
                className='px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-700 transition-all ease-linear text-white'
              >
                Close
              </button>
              <button
                onClick={handleDelete}
                className='px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all ease-linear text-white'
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default DeleteModel
