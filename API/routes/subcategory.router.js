import express from 'express';
const router = express.Router();

import * as subcategoryController from '../controller/subcategory.controller.js';

router.post("/save",subcategoryController.save);

router.get("/fetch",subcategoryController.fetch);

router.delete("/delete/:id",subcategoryController.deleteCategory);

router.patch("/update",subcategoryController.updateCategory);

export default router;



