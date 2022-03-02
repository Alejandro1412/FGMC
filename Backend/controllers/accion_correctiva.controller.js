const mongoose = require('mongoose')
const model = require('../models/accion_correctiva.model')

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.getAccionesCorrectivas = (req, res) => {
    model.find({} , (err, docs) => {
        res.send({
            docs: docs
        })
    })
}

exports.createNovedadAccionCorrectiva = (req, res) => {
    const data = req.body
    // res.send({data})
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error nombre de la Actividad ya esta registrada' })
        } else {
            res.send({ data: docs })
        }

    })
}


exports.editAccionCorrectiva = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.deleteAccionCorrectiva = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}
/**
 * Obtener DATA de Actividads
 */

exports.getAccionCorrectiva = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}