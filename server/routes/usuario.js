const express = require('express');
const Banco = require('../models/banco')
const bcrypt = require('bcrypt');
const _ = require('underscore');

const app = express();

app.get('/banco', function (req, res) {

    Banco.find({})
        .exec((err, banco) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err,
                });
            }
            res.json({
                ok: true,
                bancos: banco
            })

        })
});

app.post('/banco', function (req, res) {
    let body = req.body;
    let bancos = new Banco({
        caja: body.caja,        
        fecha: body.fecha,

        hora: body.hora,
    

    });
    console.log(bancos);

    bancos.save((err, bancoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,

            });
        }
        res.json({
            ok: true,
            bancos: bancoDB
        });

    });
});

app.delete('/banco/:id',function(req,res){
    let id=req.params.id;


    Banco.findByIdAndUpdate(id,{new: true, runValidators: true, context: 'query' },(err,bancoDB)=>{
     //   { new: true, runValidators: true, context: 'query' }
    if(err){
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      if(!bancoDB){
        return res.status(400).json({
          ok: false,
          error:{
            message:'# Caja no encontrada'
          },
        });
      }

      res.json({
        ok:true,
        banco: bancoDB
      });

    });
});

module.exports = app;
