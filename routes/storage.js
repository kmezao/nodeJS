const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const { validatorGetItem } = require("../validators/storage")
const { createItem, getItems, getItem, updateItem, deleteItem } = require("../controllers/storage");

//TODO http://localhost:3000/storage

router.get("/", getItems);

/**Obtener detalle de item*/
router.get("/:id", validatorGetItem, getItem);

/**Eliminar un registro */
router.delete("/:id", validatorGetItem, deleteItem);

router.post("/", uploadMiddleware.single("myfile"), createItem)

module.exports = router;