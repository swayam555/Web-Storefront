const express = require('express');
const {check, body} = require('express-validator');

const path = require('path');

const router = express.Router();

const adminController = require('../controllers/admin.js');
const isAuth = require('../middleware/is-auth.js');

// /admin/add-product=> GET request
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products=> GET request
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product=> POST request
router.post(
    '/add-product',
    [
      body('title')
        .isString()
        .isLength({ min: 3 })
        .trim(),
      body('price').isFloat(),
      body('description')
        .isLength({ min: 5, max: 400 })
        .trim()
    ],
    isAuth,
    adminController.postAddProduct
  );

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
    '/edit-product',
    [
      body('title')
        .isString()
        .isLength({ min: 3 })
        .trim(),
      body('price').isFloat(),
      body('description')
        .isLength({ min: 5, max: 400 })
        .trim()
    ],
    isAuth,
    adminController.postEditProduct
  );

router.delete('/product/:productId', isAuth, adminController.deleteProduct);

module.exports = router;
