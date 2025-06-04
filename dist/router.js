"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const product_1 = require("./handlers/product");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Product ID
 *           example: 1
 *         name:
 *           type: string
 *           description: The Product name
 *           example: Monitor curvo de 49 pulgadas
 *         price:
 *           type: number
 *           description: The Product price
 *           example: 300
 *         availability:
 *           type: boolean
 *           description: The Product availability
 *           example: true
 */
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products
 *     tags:
 *       - Products
 *     description: Return a list of products
 *     responses:
 *       200:
 *         description: Succesful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *       - Products
 *     description: Return a product based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found
 *       400:
 *         description: Bad Request - Invalid ID
 */
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Creates a new product
 *     tags:
 *       - Products
 *     description: Returns a new record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Monitor Curvo 49 Pulgadas"
 *               price:
 *                 type: number
 *                 example: 399
 *     responses:
 *       201:
 *         description: Succesful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request - invalid input data
 */
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Updates a product with user input
 *     tags:
 *       - Products
 *     description: Returns the updated product
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Monitor Curvo 49 Pulgadas"
 *               price:
 *                 type: number
 *                 example: 399
 *               availability:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Succesful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request - Invalid ID or Invalid input data
 *       404:
 *         description: Product Not Found
 */
/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Update Product availability
 *     tags:
 *       - Products
 *     description: Returns the updated availability
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Succesful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request - Invalid ID
 *       404:
 *         description: Product Not Found
 */
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Deletes a product by a given ID
 *     tags:
 *       - Products
 *     description: Returns a confirmation message
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Succesful response
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: 'Producto Eliminado'
 *       400:
 *         description: Bad Request - Invalid ID
 *       404:
 *         description: Product Not Found
 */
router.get('/', product_1.getProducts);
router.get('/:id', (0, express_validator_1.param)('id').isInt().withMessage('Id no válido'), middleware_1.handleInputErrors, product_1.getProductById);
router.post('/', (0, express_validator_1.body)('name').notEmpty().withMessage('El nombre del producto no puede estar vacío'), (0, express_validator_1.body)('price')
    .isNumeric().withMessage('El valor del precio tiene que ser numérico')
    .notEmpty().withMessage('El precio del producto no puede estar vacío')
    .custom(value => value > 0).withMessage('Precio no válido'), middleware_1.handleInputErrors, product_1.createProduct);
router.put('/:id', (0, express_validator_1.param)('id').isInt().withMessage('Id no válido'), (0, express_validator_1.body)('name').notEmpty().withMessage('El nombre del producto no puede estar vacío'), (0, express_validator_1.body)('price')
    .isNumeric().withMessage('El valor del precio tiene que ser numérico')
    .notEmpty().withMessage('El precio del producto no puede estar vacío')
    .custom(value => value > 0).withMessage('Precio no válido'), (0, express_validator_1.body)('availability')
    .isBoolean().withMessage('Valor para disponibilidad no válido'), middleware_1.handleInputErrors, product_1.updateProduct);
router.patch('/:id', (0, express_validator_1.param)('id').isInt().withMessage('Id no válido'), middleware_1.handleInputErrors, product_1.updateAvailability);
router.delete('/:id', (0, express_validator_1.param)('id').isInt().withMessage('Id no válido'), middleware_1.handleInputErrors, product_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=router.js.map