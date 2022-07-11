import JsBarcode from 'jsbarcode';
import fs from 'fs';

export default {
  handle(
    value: string,
    options: JsBarcode.Options | null = {},
    fileName: string = ''
  ) {
    const { DOMImplementation, XMLSerializer } = require('xmldom');
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

    const root = __dirname + '/../../public/';
    const filename = 'svgs/' + fileName + '.svg';

    fs.writeFileSync(root + filename, svgText);

    return filename;
  },
};
