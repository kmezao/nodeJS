const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");
const { getItems, getItem, createItem } = require("../controllers/tracks");

/**Lista Item */
router.get("/", getItems);

/**Ibtener detalle */
router.get("/:id", getItem);

/**Crear item */
router.post("/", validatorCreateItem, createItem);

module.exports = router
