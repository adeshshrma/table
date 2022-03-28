const Form = require('../models/Form')

// CREATE FORM
const createForm = async (req, res) => {
  try {
    const user = await Form.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json('something went wrong')
  }
}

// GET DATA
const getForm = async (req, res) => {
  try {
    const data = await Form.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json('something went wrong')
  }
}

// UPDATE FORM
const updateForm = async (req, res) => {
  try {
    const updatedUser = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json('something went wrong')
  }
}

// DELETE FORM
const deleteForm = async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id)
    res.status(200).json('user has been deleted')
  } catch (error) {
    res.status(500).json('something went wrong')
  }
}

module.exports = { createForm, updateForm, deleteForm, getForm }
