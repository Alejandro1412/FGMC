const Categoria = require('../models/categoria.models');
const categoriaCtrl = {};

categoriaCtrl.getCategorias = (req, res) => {
    Categoria.find({})
        //Populate sirve para mostrar todo el contenido del objectId secundario
        .populate( 'nombre correo')
        .exec((err, responseDetail) => {
            if (err) {
                return res.status(400).json({
                    response: {
                        status: false,
                        err
                    }
                });
            }
            Categoria.countDocuments({}, (err, count) => {
                res.json({
                    response: {
                        status: true,
                        count
                    },
                    responseDetail
                })
            })
        })
}

//  categoriaCtrl.getCategorias = async (req, res) => {
//      const categorias = await Categoria.find();
//      res.json(categorias);
//  };

categoriaCtrl.getCategoria = (req, res) => {
     let id = req.params.id;
     Categoria.findById(id, (err, responseDetail) => {
         if (err) {
             return res.status(500).json({
                 response: {
                     status: false,
                     err
                 }
             });
         }

         if (!responseDetail) {
             return res.status(400).json({
                 response: {
                     status: false,
                     err: {
                         message: "ID NO ENCONTRADO"
                     }
                 }
             });
         }

         res.json({
             response: {
                 status: true,
             },
             responseDetail
         });

     });
 }

//  categoriaCtrl.getCategoria = async(req, res) => {
//      const categoria = await Categoria.findById(req.params.id);
//      res.json(categoria);  
//  };

categoriaCtrl.createCategoria = (req, res) => {

    const { nombreCategoria } = req.body;
    let userId = req.usuario._id;
    var categoria = new Categoria({ nombreCategoria,userId});

    categoria.save((err, responseDetail) => {

        if (err) {
            return res.status(400).json({
                response: {
                    status: false,
                    err
                }
            })
        }

        res.status(201).json({
            response: {
                status: true,
                description: "CATEGORIA GUARDADA"
            },
            responseDetail
        });

    });

}

//  categoriaCtrl.createCategoria = async(req, res) => {
//      const categoria = new Categoria(req.body);
//      await categoria.save();
//      res.json({
//          'ESTADO': 'CATEGORIA GUARDADA'
//      });
//  };
categoriaCtrl.editCategoria = (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Categoria.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, responseDetail) => {
        if (err) {
            return res.status(500).json({
                response: {
                    status: false,
                    err: err
                }
            });
        }

        if (!responseDetail) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: "ID NO ENCONTRADO"
                    }
                }
            });
        }

        res.json({
            response: {
                status: true,
                description: "CATEGORIA ACTUALIZADA"
            },
            responseDetail
        });
    });

}

//  categoriaCtrl.editCategoria = async(req, res) => {
//      const {id} = req.params;
//      await Categoria.findByIdAndUpdate(id, req.body,{new: true});
//       res.json({ESTADO: 'CATEGORIA ACTUALIZADA'});
//  };

categoriaCtrl.deleteCategoria = (req, res) => {
    let id = req.params.id;
    console.log(id);

    Categoria.findByIdAndDelete(id, (err, responseDetail) => {

        if (err) {
            return res.status(500).json({
                response: {
                    status: false,
                    err: err
                }
            })
        }

        if (!responseDetail) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: "ID NO ENCONTRADO"
                    }
                }
            });
        }

        res.json({
            response: {
                status: true,
                description: "CATEGORIA ELIMINADA"
            },
            responseDetail
        })

    });

}

//  categoriaCtrl.deleteCategoria = async(req, res) => { 
//      await Categoria.findByIdAndRemove(req.params.id);
//      res.json({ESTADO: 'CATEGORIA ELIMINADA'});
//  };

module.exports = categoriaCtrl;