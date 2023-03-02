import { PruebaPdf } from '../pdfs/prueba/prueba-pdf'
import { readFileSync } from 'fs'
import { Command } from 'commander'
import figlet from 'figlet'


const program = new Command()
console.log(figlet.textSync("Pdfs Meli Creator"))

program
    .description("An example CLI for generate Meli document PDFs with ReactPdf")
    .requiredOption('-i, --pathdata <path>', 'Json file path absolute with information for the pdf')
    .requiredOption('-o, --pathoutput <path>', 'PDF file output path absolute')
    .parse(process.argv);

const options = program.opts()

let rawdata = readFileSync(options.pathdata)
let info = JSON.parse(rawdata.toString())

const pruebaPdf = new PruebaPdf(info)
pruebaPdf.saveFile(options.pathoutput)

console.log('Finish PDF in '+options.pathoutput)