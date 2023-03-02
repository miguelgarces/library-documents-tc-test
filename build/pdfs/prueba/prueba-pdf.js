"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PruebaPdf = void 0;
const react_1 = __importDefault(require("react"));
const create_template_1 = require("./create-template");
const renderer_1 = __importDefault(require("@react-pdf/renderer"));
class PruebaPdf {
    constructor(data) {
        this.data = data;
    }
    /**
     * @description Method for save file in local server
     * @return Promise<void>
     */
    saveFile(routeFile) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield renderer_1.default.renderToFile(react_1.default.createElement(create_template_1.PDF, Object.assign({}, { data: this.data })), routeFile);
        });
    }
    /**
     * @description Method for return stream pdf
     * @return Promise<NodeJS.ReadableStream>
     */
    toStream() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield renderer_1.default.renderToStream(react_1.default.createElement(create_template_1.PDF, Object.assign({}, { data: this.data })));
        });
    }
    /**
     * @description Method for return html from pdf
     * @return Promise<string>
     */
    toHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Proximamente';
        });
    }
}
exports.PruebaPdf = PruebaPdf;
