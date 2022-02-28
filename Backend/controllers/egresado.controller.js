const mongoose = require('mongoose')
const model = require('../models/egresado.model')

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}
/**
 * Obtener DATA de Egresados
 */

exports.getEgresados = (req, res) => {
    model.find({} , (err, docs) => {
        res.send({
            docs: docs
        })
    })
}

/**
 * Insertar DATA de Egresados
 */
exports.createEgresado = (req, res) => {
    const data = req.body
    // res.send({data})
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error identificación del egresado ya esta registrada' })
        } else {
            res.send({ data: docs })
        }

    })
}

/**
 * Obtener DATA de Egresados
 */

exports.editEgresado = (req, res) => {
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

/**
 * Obtener DATA de Egresados
 */

exports.deleteEgresado = (req, res) => {
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
 * Obtener DATA de Egresados
 */

exports.getSingle = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}






