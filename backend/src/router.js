const express = require("express");

const router = express.Router();

const workControllers = require("./controllers/workControllers");

router.get("/works", workControllers.browse);
router.get("/works/:id", workControllers.read);
router.put("/works/:id", workControllers.edit);
router.post("/works", workControllers.add);
router.delete("/works/:id", workControllers.destroy);

const technoControllers = require("./controllers/technoControllers");

router.get("/technos", technoControllers.browse);
router.get("/technos/:id", technoControllers.read);
router.put("/technos/:id", technoControllers.edit);
router.post("/technos", technoControllers.add);
router.delete("/technoss/:id", technoControllers.destroy);

module.exports = router;
