import express from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("hola"+import.meta.url);
// const router = Router();
import { resolve } from 'path';

