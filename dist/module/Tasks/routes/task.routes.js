"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_controller_1 = require("../controller/list.controller");
const router = (0, express_1.Router)();
router.get('/create', list_controller_1.create);
router.post('/newTasks', list_controller_1.newTasks);
router.get('/listing', list_controller_1.listing);
router.delete('/delete/:id', list_controller_1.deliting);
//router.get('/edit/',editing) 
router.post('/edit/:id', list_controller_1.editingList);
exports.default = router;
