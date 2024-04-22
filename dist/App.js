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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)(); // Create an Express application
app.use(body_parser_1.default.json()); // Middleware to parse JSON bodies
app.get('/', (req, res) => {
    res.send('Welcome to our Express application with TypeScript!');
});
// Route that interacts with the database
app.get('/test-db', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate(); // Test the connection again
        res.send('Database connection successful');
    }
    catch (error) {
        res.status(500).send('Failed to connect to the database');
    }
}));
exports.default = app; // Export the Express app
