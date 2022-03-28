import * as React from 'react'
import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

import axios from 'axios'

const DataTable = () => {
  const [data, setData] = useState([])
  const [emailData, setEmailData] = useState([])
  const [checkAll, setCheckAll] = useState(false)
  const [order, setOrder] = useState('acn')
  const [showIcon, setShowIcon] = useState(false)
  const [showError, setShowError] = useState(false)

  const emailMessage = React.useRef()
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:5000/api/form')
      setData(res.data)
    }
    getData()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    if (emailData.length > 0) {
      emailjs
        .sendForm(
          'service_0p6mqkp',
          'template_phda5df',
          emailMessage.current,
          'MWkMmLyJOW4WSpMAI'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    } else {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 2000)
    }
  }

  const handleEmailData = (user, e) => {
    if (e.target.checked) {
      setEmailData([...emailData, user])
    } else {
      const newEmailData = emailData.filter((item) => item._id != user._id)
      setEmailData(newEmailData)
    }
  }

  const handelCheckAll = (e) => {
    if (e.target.checked) {
      setEmailData(data)
      setCheckAll(true)
    } else {
      setEmailData([])
      setCheckAll(false)
    }
  }

  const handleSort = (e) => {
    setShowIcon(true)
    let newArr
    if (e.target.id === 'number') {
      if (order === 'acn') {
        newArr = [...data].sort((a, b) => a.number - b.number)
        setOrder('dscn')
      } else if (order === 'dscn') {
        newArr = [...data].sort((a, b) => b.number - a.number)
        setOrder('acn')
      }
    } else {
      if (order === 'acn') {
        newArr = [...data].sort((a, b) =>
          a[e.target.id].toLowerCase() > b[e.target.id].toLowerCase() ? 1 : -1
        )
        setOrder('dscn')
      } else if (order === 'dscn') {
        newArr = [...data].sort((a, b) =>
          a[e.target.id].toLowerCase() < b[e.target.id].toLowerCase() ? 1 : -1
        )
        setOrder('acn')
      }
    }
    setData(newArr)
  }

  return (
    <>
      <div className='h-[70vh] w-[80vw] relative bg-slate-50 ml-[10vw] rounded-md overflow-auto'>
        <div className='flex gap-1 py-4 sticky top-0 bg-slate-50'>
          <div className='w-[7%] text-center py-4'>
            <input type='checkbox' value='value' onClick={handelCheckAll} />
          </div>
          <h4
            className='w-[20%] text-center py-4 cursor-pointer flex items-center justify-center gap-2'
            id='_id'
            onClick={handleSort}
          >
            Id
            {showIcon ? (
              order === 'acn' ? (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowDownward />
                </div>
              ) : (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowUpward />
                </div>
              )
            ) : null}
          </h4>
          <h4
            className='w-[17%] text-center py-4 cursor-pointer flex items-center justify-center gap-2'
            id='name'
            onClick={handleSort}
          >
            Name
            {showIcon ? (
              order === 'acn' ? (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowDownward />
                </div>
              ) : (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowUpward />
                </div>
              )
            ) : null}
          </h4>
          <h4
            className='w-[14%] text-center flex items-center justify-center gap-2 py-4 cursor-pointer'
            id='number'
            onClick={handleSort}
          >
            Phone No
            {showIcon ? (
              order === 'acn' ? (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowDownward />
                </div>
              ) : (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowUpward />
                </div>
              )
            ) : null}
          </h4>
          <h4
            className='w-[27%] text-center flex items-center justify-center gap-2 py-4 cursor-pointer'
            id='email'
            onClick={handleSort}
          >
            Email
            {showIcon ? (
              order === 'acn' ? (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowDownward />
                </div>
              ) : (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowUpward />
                </div>
              )
            ) : null}
          </h4>
          <h4
            onClick={handleSort}
            className='w-[17%] text-center py-4 cursor-pointer flex items-center justify-center gap-2'
            id='hobbies'
          >
            Hobbies
            {showIcon ? (
              order === 'acn' ? (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowDownward />
                </div>
              ) : (
                <div className='w-6 text-white h-6 rounded-full bg-gray-400 flex items-center justify-center'>
                  <ArrowUpward />
                </div>
              )
            ) : null}
          </h4>
        </div>
        {data.map((user, index) => {
          return (
            <div className='flex gap-1' key={index}>
              <div className='w-[7%] text-center py-4'>
                <input
                  checked={checkAll ? true : null}
                  type='checkbox'
                  onChange={(e) => handleEmailData(user, e)}
                />
              </div>
              <h4 className='w-[20%] text-center py-4'>{user._id}</h4>
              <h4 className='w-[17%] text-center py-4'>{user.name}</h4>
              <h4 className='w-[14%] text-center py-4'>{user.number}</h4>
              <h4 className='w-[27%] text-center py-4'>{user.email}</h4>
              <h4 className='w-[17%] text-center py-4'>{user.hobbies}</h4>
            </div>
          )
        })}
      </div>
      <div className='flex items-center'>
        <button
          onClick={sendEmail}
          className='px-4 py-2 bg-blue-500 ml-[10vw] mt-4 rounded-md hover:bg-blue-700 transition-all ease-linear text-white'
        >
          Send
        </button>
        {showError ? (
          <h1 className=' ml-4 mt-4 text-red-700 text-sm'>please select</h1>
        ) : null}
      </div>

      {/* MESSAGE VALUES FOR EMAIL */}

      <form ref={emailMessage} className='hidden'>
        <textarea
          className='w-full'
          readOnly
          name='message'
          value={emailData.map(
            (item) =>
              `{${item.name}, ${item.email}, ${item.number}, ${item.hobbies}}`
          )}
        />
      </form>
    </>
  )
}

export default DataTable
