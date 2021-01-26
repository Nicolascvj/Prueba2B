// =================================
// Puerto
//==================================
process.env.PORT=process.env.PORT || 3000;

// =================================
// Entorno
//==================================
process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

// =================================
// Base de datos
//==================================

let urlDB;

if(process.env.NODE_ENV==='dev'){
    urlDB="mongodb+srv://cocoa-user:x8qOrxBlM4yIjsB3@cluster0.l2gsu.mongodb.net/bancos";
    
    console.log("base de datos mongo");

    //cocoa-user:zeCLBhugnx726afH
    
}else{

    urlDB="mongodb://localhost:27017/banco"
    console.log("base de datos local");
}

process.env.URLDB=urlDB;
