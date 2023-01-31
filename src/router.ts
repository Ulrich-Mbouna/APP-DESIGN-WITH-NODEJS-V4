import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handlerInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProduct,
} from "./handlers/product";

const router = Router();

/**
 * Product
 */
router.get("/product", getProduct);

router.get("/product/:id", getOneProduct);
router.put(
  "/product/:id",
  body("name").isString(),
  handlerInputErrors,
  (req, res) => {}
);
router.post(
  "/product",
  body("name").isString(),
  handlerInputErrors,
  createProduct,
  (req, res) => {}
);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  () => {}
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  () => {}
);
router.delete("/update/:id", () => {});

/**
 * UpdatePoint
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
