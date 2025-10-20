import * as Yup from 'yup';
import Product from '../models/Product';
import {
  BadRequestError,
  ValidationError,
  NotFoundError,
} from '../utils/ApiError';

// Validasi schema menggunakan Yup
const productSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required().min(0),
  stock: Yup.number().required().min(0).integer(),
});

const productController = {
  // CREATE
  add: async (req, res, next) => {
    try {
      if (!(await productSchema.isValid(req.body))) throw new ValidationError();
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  // READ ALL
  get: async (req, res, next) => {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  },

  // READ BY ID
  find: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) throw new NotFoundError('Product not found');
      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },

  // UPDATE
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!(await productSchema.isValid(req.body))) throw new ValidationError();
      const product = await Product.findByPk(id);
      if (!product) throw new NotFoundError('Product not found');
      await product.update(req.body);
      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },

  // DELETE
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) throw new NotFoundError('Product not found');
      await product.destroy();
      return res.status(200).json({ msg: 'Product deleted' });
    } catch (error) {
      next(error);
    }
  },
};

export default productController;
