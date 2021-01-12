const mogoose =require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

let Schema= mogoose.Schema;


let bancoSchema=new Schema({
    caja:{
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
bancoSchema.plugin(uniqueValidator,{message:'{PATH} debe ser unico'});

module.exports=mogoose.model('Banco',bancoSchema);