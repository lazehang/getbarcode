"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsbarcode_1 = __importDefault(require("jsbarcode"));
const fs_1 = __importDefault(require("fs"));
const xmldom_1 = require("xmldom");
exports.default = {
    handle(value, options, fileName = '') {
        const xmlSerializer = new xmldom_1.XMLSerializer();
        const document = new xmldom_1.DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
        const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        (0, jsbarcode_1.default)(svgNode, value, Object.assign({ xmlDocument: document }, options));
        const svgText = xmlSerializer.serializeToString(svgNode);
        const root = __dirname + '/../../public/';
        const filename = 'svgs/' + fileName + '.svg';
        fs_1.default.writeFileSync(root + filename, svgText);
        return filename;
    },
};
