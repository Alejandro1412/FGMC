const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Backend/documentosSubidos')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

exports.upload = upload.single('urlDocumento')

exports.uploadFile = (req, res) => {
    console.log(req.file.filename);
    res.send({ result: 'Documento subido correctamente', urlArchivo: "http://localhost:3000/"+req.file.filename })
}