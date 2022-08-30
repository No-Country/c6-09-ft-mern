const express = require('express');
const router = express.Router()
const { obtenerEvento, añadirEvento, obtenerTodosLosEventos, actualizarEvento, eliminarEvento } = require('../controllers/evento_controller')

const upload = require('../middleware/storage');

router.post('/evento', upload.single('imagen'), añadirEvento);
router.get('/evento/:idEvento', obtenerEvento)
router.get('/eventos', obtenerTodosLosEventos)
router.put('/evento/:idEventoo', upload.single('imagen'), actualizarEvento)
router.delete('/evento/:idEvento', eliminarEvento)

module.exports = router;