const express = require('express');
const { getAllUser, getRandomData, postAData, deleteAData, patchSingle, bulkUpdate } = require('../controllers/user.controller');

const router = express.Router()

router.get('/random', getRandomData)
router.get('/all', getAllUser)
router.post('/save', postAData)
router.delete('/delete/:id', deleteAData)
router.patch('/update/:id', patchSingle)
router.patch('/update/bulk-update', bulkUpdate)

module.exports = router