import express, { RouterOptions } from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function(){
    router.get("/a",(req:express.Request,res:express.Response)=>{
        res.sendFile(join(__dirname,'../../public/views/inicio.html'));
    })
    router.get("/libros",(req:express.Request,res:express.Response)=>{
        res.sendFile(join(__dirname,'../../public/views/libros.html'))
    })
    router.get("/",(req:express.Request,res:any)=>{
        res.render('inicio');
    })
    return router;
};
