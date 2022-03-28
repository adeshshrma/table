const router = require('express').Router()
const {
  createForm,
  updateForm,
  deleteForm,
  getForm,
} = require('../controller/form')

router.route('/').post(createForm).get(getForm)
router.route('/:id').put(updateForm).delete(deleteForm)

module.exports = router
