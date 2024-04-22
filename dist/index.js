"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App")); // Import the Express app
const dotenv_1 = __importDefault(require("dotenv"));
const env_1 = require("./env");
dotenv_1.default.config();
const Port = env_1.PORT || 3003;
App_1.default.listen(env_1.PORT, () => {
    console.log(`Server is running on port ${Port}`);
});
