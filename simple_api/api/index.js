const router = require("express").Router();
const { products } = require("./mock");
const { reply, getById, updateById } = require("./utils");

router.get("/products", (req, res, next) => {
  reply(res, products);
});

module.exports = router;
