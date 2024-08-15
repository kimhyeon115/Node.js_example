"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

// 팝업 테스트
router.get("/grid", ctrl.output.grid);
router.get("/popup", ctrl.output.popup);
router.get("/popup2", ctrl.output.popup2);

module.exports = router;