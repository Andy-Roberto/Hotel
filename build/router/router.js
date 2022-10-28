import express from 'express';
const router = express.Router();
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function () {
    router.get("/a", (req, res) => {
        res.sendFile(join(__dirname, '../../public/views/inicio.html'));
    });
    router.get("/libros", (req, res) => {
        res.sendFile(join(__dirname, '../../public/views/libros.html'));
    });
    router.get("/", (req, res) => {
        res.render('inicio');
    });
    return router;
}
;
