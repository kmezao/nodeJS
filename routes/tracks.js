const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem } = require("../validators/tracks");
const { getItems, getItem, createItem } = require("../controllers/tracks");

/**Lista Item */
router.get("/", getItems);

/**Ibtener detalle */
router.get("/:id", getItem);

/**Crear item */
router.post("/", validatorCreateItem, customHeader, createItem);

module.exports = router
