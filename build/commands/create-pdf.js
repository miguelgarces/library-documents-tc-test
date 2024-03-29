"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prueba_pdf_1 = require("../pdfs/prueba/prueba-pdf");
const fs_1 = require("fs");
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .description("An example CLI for generate Meli document PDFs with ReactPdf")
    .requiredOption('-i, --pathdata <path>', 'Json file path absolute with information for the pdf')
    .requiredOption('-o, --pathoutput <path>', 'PDF file output path absolute')
    .parse(process.argv);
const options = program.opts();
let rawdata = (0, fs_1.readFileSync)(options.pathdata.toString().trim());
let info = JSON.parse(rawdata.toString());
const pruebaPdf = new prueba_pdf_1.PruebaPdf(info);
pruebaPdf.saveFile(options.pathoutput.toString().trim());
console.log('Finish PDF in ' + options.pathoutput);
