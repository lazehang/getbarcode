import JsBarcode from 'jsbarcode';
import fs from 'fs';
import { DOMImplementation, XMLSerializer } from 'xmldom';

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
      ...getOptions(options),
    });

    const svgText = xmlSerializer.serializeToString(svgNode);

    const root = __dirname + '/../../public/';
    const filename = 'svgs/' + fileName + '.svg';

    fs.writeFileSync(root + filename, svgText);

    return filename;
  },
};

const getOptions = (options: object | null = {}): JsBarcode.Options => {
  return options ? options : {};
  // return {
  //   format: 'pharmacode',
  //   width: 2,
  //   height: 40,
  //   displayValue: false,
  //   text: 'BJS',
  //   fontOptions: '',
  //   textAlign: 'center',
  //   textPosition: 'bottom',
  //   textMargin: 2,
  //   fontSize: 12,
  //   background: '#fff',
  //   lineColor: '#000',
  //   margin: 0,
  //   marginTop: 0,
  //   marginBottom: 0,
  //   marginLeft: 0,
  //   marginRight: 0,
  // };
};
