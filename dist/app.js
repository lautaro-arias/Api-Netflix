"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./module/Users/routes/auth.routes"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const task_routes_1 = __importDefault(require("./module/Tasks/routes/task.routes"));
const createTask_routes_1 = __importDefault(require("./module/Tasks/routes/createTask.routes"));
//inicial
const app = (0, express_1.default)();
//config
app.set('port', process.env.PORT || 4000);
// Configuración de cors
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
//middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
//routes 
app.get('/', (req, res) => {
    res.send();
});
app.use(auth_routes_1.default);
app.use(createTask_routes_1.default);
app.use('/tasks', task_routes_1.default);
exports.default = app;
