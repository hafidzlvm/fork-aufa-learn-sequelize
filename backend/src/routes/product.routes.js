import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRoutes = Router();

productRoutes.post('/product', productController.add); // CREATE
productRoutes.get('/product', productController.get); // READ ALL
productRoutes.get('/product/:id', productController.find); // READ BY ID
productRoutes.put('/product/:id', productController.update); // UPDATE
productRoutes.delete('/product/:id', productController.delete); // DELETE

export { productRoutes };
