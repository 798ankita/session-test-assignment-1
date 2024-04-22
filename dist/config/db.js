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
const sequelize_1 = require("sequelize");
const user_model_1 = __importDefault(require("../models/user.model")); // Import the User model
const db = {};
initialize();
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = new sequelize_1.Sequelize('my_app', 'root', 'admin', {
            host: '127.0.0.1',
            dialect: 'mysql',
            dialectOptions: {},
            port: 6033,
            logging: false,
            pool: {
                max: 10,
                min: 1,
                acquire: 30000,
                idle: 10000,
            },
        });
        // Assign the User model to the db object
        db.users = (0, user_model_1.default)(sequelize, sequelize_1.DataTypes);
        // Test the database connection
        sequelize
            .authenticate()
            .then(() => {
            console.log('Database connected successfully');
        })
            .catch((err) => {
            console.error('Failed to connect to the database:', err);
        });
        db.Sequelize = sequelize_1.Sequelize;
        db.sequelize = sequelize;
        // sync all models with database
        yield sequelize.sync({ alter: true });
    });
}
exports.default = db;
