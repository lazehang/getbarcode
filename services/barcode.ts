import JsBarcode from 'jsbarcode';
import fs from 'fs';
import { DOMImplementation, XMLSerializer } from 'xmldom';
import path from 'path';

export default {
  handle(value: string, options?: JsBarcode.Options, fileName: string = '') {
    console.log('generating svg for: ' + fileName);

    const xmlSerializer = new XMLSerializer();

    const document = new DOMImplementation().createDocument(
      'http://www.w3.org/1999/xhtml',
      'html',
      null
    );

    const svgNode = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );

    JsBarcode(svgNode, value, {
      xmlDocument: document,
      ...options,
    });

    const svgText = xmlSerializer.serializeToString(svgNode);

    const root = path.resolve(__dirname, '../public');
    const filename = '/svgs/' + fileName + '.svg';

    fs.writeFileSync(root + filename, svgText);

    return filename;
  },
};

export const optionKeys: string[] = [
  'format',
  'width',
  'height',
  'displayValue',
  'text',
  'fontOptions',
  'textAlign',
  'textPosition',
  'textMargin',
  'fontSize',
  'background',
  'lineColor',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
];
