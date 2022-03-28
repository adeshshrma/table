import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../context/context'

const Buttons = () => {
  const { dispatch, model } = useContext(Context)

  const enableDeleteModle = () => {
    dispatch({
      type: 'ENABLE_DELETEMODEL',
      payload: {
        ...model,
        deleteModel: true,
      },
    })
  }

  const enableUpdateModle = () => {
    dispatch({
      type: 'ENABLE_UPDATEMODEL',
      payload: {
        ...model,
        updateModel: true,
      },
    })
  }

  const enableAddModel = () => {
    dispatch({
      type: 'ENABLE_ADDMODEL',
      payload: {
        ...model,
        addModel: true,
      },
    })
  }

  return (
    <>
      <div className='flex gap-4 w-full justify-center mb-4 '>
        <button
          onClick={enableAddModel}
          className='px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all ease-linear text-white'
        >
          Add
        </button>
        <button
          onClick={enableDeleteModle}
          className='px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-700 transition-all ease-linear text-white'
        >
          Delete
        </button>
        <button
          onClick={enableUpdateModle}
          className='px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-700 transition-all ease-linear text-white'
        >
          Update
        </button>
      </div>
    </>
  )
}

export default Buttons
