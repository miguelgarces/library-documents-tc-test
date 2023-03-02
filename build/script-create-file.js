"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_template_1 = require("./pdfs/create-template");
const fs_1 = require("fs");
let rawdata = (0, fs_1.readFileSync)(__dirname + '/../storejson/data.json');
let info = JSON.parse(rawdata.toString());
(0, create_template_1.PdftoFile)(info, './pruebas.pdf');
console.log('Pdf Finalizado');
