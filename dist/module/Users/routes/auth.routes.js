"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.Router)();
router.post('/register', user_controller_1.signUp);
router.post('/login', user_controller_1.signIn);
exports.default = router;
