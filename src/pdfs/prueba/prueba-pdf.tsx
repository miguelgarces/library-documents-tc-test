import React from "react"
import { TemplateData, PDF } from "./create-template"
import ReactPDF from "@react-pdf/renderer"

export class PruebaPdf  {

    data: TemplateData

    constructor(data: TemplateData) {
        this.data = data
    }

    /**
     * @description Method for save file in local server
     * @return Promise<void>
     */
    async saveFile(routeFile: string) {
        return await ReactPDF.renderToFile(<PDF {...{ data: this.data }} />, routeFile)
    }

    /**
     * @description Method for return stream pdf
     * @return Promise<NodeJS.ReadableStream>
     */
    async toStream() {
        return await ReactPDF.renderToStream(<PDF {...{ data: this.data }} />)
    }

    /**
     * @description Method for return html from pdf
     * @return Promise<string>
     */
    async toHtml() {
        return 'Proximamente'
    }
}