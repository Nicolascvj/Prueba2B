const mogoose =require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

let Schema= mogoose.Schema;


let bancoSchema=new Schema({
    numCaja:{
        type: Number,
        required:[true,'El numero de caja es requerido']

    },
    fecha:{
        type:String,
        required:[true,'La fecha es requerida']

    },
    hora:{
        type:String,
        required:[true,'La hora es requerida']
    }

});

module.exports=mogoose.model('Banco',bancoSchema);