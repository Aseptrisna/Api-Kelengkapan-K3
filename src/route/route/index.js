const express = require('express');
const router = express.Router();
const DataController = require('../../controller/route');

router.get('/', DataController.getAll);
router.get('/:id', DataController.getDataById);
router.post('/', DataController.createData);
router.put('/:id', DataController.updateData);
router.delete('/:id', DataController.deleteData);

module.exports = router;
