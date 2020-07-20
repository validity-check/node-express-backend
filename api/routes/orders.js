const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched",
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "detail:",
    id: req.body.orderId,
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    order: order,
  });
});

router.delete("/", (req, res, next) => {
  res.status(201).json({
    message: "Orders were deleted",
  });
});

module.exports = router;
