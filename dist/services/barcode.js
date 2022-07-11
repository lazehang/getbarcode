"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsbarcode_1 = __importDefault(require("jsbarcode"));
const fs_1 = __importDefault(require("fs"));
exports.default = {
    handle(value, options = {}, fileName = '') {
        const { DOMImplementation, XMLSerializer } = require('xmldom');
        const xmlSerializer = new XMLSerializer();
        const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
        const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        (0, jsbarcode_1.default)(svgNode, value, Object.assign({ xmlDocument: document }, options));
        const svgText = xmlSerializer.serializeToString(svgNode);
        const root = __dirname + '/../../public/';
        const filename = 'svgs/' + fileName + '.svg';
        fs_1.default.writeFileSync(root + filename, svgText);
        return filename;
    },
};
