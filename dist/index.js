"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_handlebars_1 = require("express-handlebars");
const barcode_1 = __importDefault(require("./services/barcode"));
const cache_1 = __importDefault(require("./services/cache"));
const PORT = process.env.PORT || 4001;
const app = (0, express_1.default)();
app.set('view engine', 'handlebars');
app.engine('handlebars', (0, express_handlebars_1.engine)());
app.set('views', './templates');
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    return res.render('index');
});
app.get('generate/:code', async (req, res, next) => {
    var _a;
    const cacheKey = `barcode_${req.params.code}_${((_a = req.query) === null || _a === void 0 ? void 0 : _a.height) || '0'}`;
    const cache = await (0, cache_1.default)();
    const cachedData = await cache.get(cacheKey);
    if (cachedData) {
        return res.sendFile(cachedData, {
            root: __dirname + '/../public',
        });
    }
    const fileName = barcode_1.default.handle(req.params.code, req.query, cacheKey);
    await cache.set(cacheKey, fileName);
    res.sendFile(fileName, {
        root: __dirname + '/../public',
    });
});
app.listen(PORT, () => {
    console.info(`Server listening on ${PORT}`);
});
console.log('TypeScript Eslint Prettier Starter Template!');
