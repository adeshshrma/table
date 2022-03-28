import axios from 'axios'
import { useContext, useState } from 'react'
import { Context } from '../context/context'

const AddModel = () => {
  const { model, dispatch } = useContext(Context)
  const [user, setUser] = useState({})
  const [showWarning, setShowWarning] = useState(false)

  const createUser = async (e) => {
    if (Object.keys(user).length === 4) {
      await axios.post('http://localhost:5000/api/form', user)
      dispatch({
        type: 'DISABLE_ADDMODEL',
        payload: {
          ...model,
          addModel: false,
        },
      })
    } else {
      e.preventDefault()
      setShowWarning(true)
      setTimeout(() => {
        setShowWarning(false)
      }, 2000)
    }
  }

  const handleDetails = (e) => {
    e.preventDefault()

    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {model.addModel && (
        <>
          <div
            className='w-[100vw] z-10 h-[100vh] fixed top-0 bg-transparent'
            onClick={() =>
              dispatch({
                type: 'DISABLE_ADDMODEL',
                payload: {
                  ...model,
                  addModel: false,
                },
              })
            }
          ></div>
          <form className='absolute top-[10rem] shadow-md z-20 flex flex-col gap-3 left-[35%] p-4 bg-white w-[30vw] rounded-md'>
            <h1 className='p-2'>Add Data</h1>
            <hr />
            <input
              onChange={handleDetails}
              className='py-2 px-2 outline-0'
              type='text'
              name='name'
              placeholder='Enter Name'
            />
            <input
              onChange={handleDetails}
              className='py-2 px-2 outline-0'
              type='text'
              name='number'
              placeholder='Enter Phone Number'
            />
            <input
              onChange={handleDetails}
              className='py-2 px-2 outline-0'
              type='text'
              name='email'
              placeholder='Enter Email'
            />
            <input
              onChange={handleDetails}
              className='py-2 px-2 outline-0'
              type='text'
              name='hobbies'
              placeholder='Enter Hobbies'
            />
            <span
              className={`text-red-700 text-sm ${
                showWarning ? 'block' : 'hidden'
              } `}
            >
              fill all the details
            </span>
            <hr />
            <div className='flex justify-end w-full gap-2'>
              <button
                onClick={() =>
                  dispatch({
                    type: 'DISABLE_ADDMODEL',
                    payload: {
                      ...model,
                      addModel: false,
                    },
                  })
                }
                className='px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-700 transition-all ease-linear text-white'
              >
                Close
              </button>
              <button
                onClick={createUser}
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

export default AddModel
