const mongoose = require('mongoose')
const model = require('../models/documento.model')

const options = {
    page: 1,
    limit: 3
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}
/**
 * Obtener DATA de documentos
 */

exports.getDocumentos = (req, res) => {
    model.find({} , (err, docs) => {
        res.send({
            docs: docs
        })
    })

    // model.paginate({}, options, (err, docs) => {
    //     res.send({
    //         items: docs
    //     })
    // })
}

/**
 * Insertar DATA de docuemntos
 */
exports.createDocumento = (req, res) => {
    const data = req.body
    // res.send({data})
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error documento repetido' })
        } else {
            res.send({ data: docs })
        }

    })
}

/**
 * Obtener DATA de documentos
 */

exports.editDocumento = (req, res) => {
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
 * Obtener DATA de documentos
 */

exports.deleteDocumento = (req, res) => {
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
 * Obtener DATA de documentos
 */

exports.getSingle = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}






