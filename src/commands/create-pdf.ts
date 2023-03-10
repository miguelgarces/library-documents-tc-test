import { PruebaPdf } from '../pdfs/prueba/prueba-pdf'
import { readFileSync } from 'fs'
import { Command } from 'commander'


const program = new Command()

program
    .description("An example CLI for generate Meli document PDFs with ReactPdf")
    .requiredOption('-i, --pathdata <path>', 'Json file path absolute with information for the pdf')
    .requiredOption('-o, --pathoutput <path>', 'PDF file output path absolute')
    .parse(process.argv);

const options = program.opts()

let rawdata = readFileSync(options.pathdata.toString().trim())
let info = JSON.parse(rawdata.toString())

const pruebaPdf = new PruebaPdf(info)
pruebaPdf.saveFile(options.pathoutput.toString().trim())


console.log('Finish PDF in '+options.pathoutput)