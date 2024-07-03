import express from 'express';
import productm from "../models/product.js";


const router = express.Router();

//Search user
router.get('/products',(req, res) => {
    res.json(product);
})

//create user
router.post("/products",(req,res)=>{
    const product = productm(req.body);
    product.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Search by ID
router.get('products/:id',(req, res) => {
    const productID = parseInt(req.params.id);
    const product = productos.find((p) => p.id === productId);

    if(product){
        res.json(product);
    }else{
        res.status(404).json({mensaje: 'Producto no encontrado'});
    }
});

//Put 
router.put('/products/:id',(req, res) => {
    const productId = parseInt(req.params.id);
    const productoActualizado = req.body;

    productos = productos.map((p) =>
     p.id === productId ? productoActualizado : p
    );
    res.json(productoActualizado);
})


export default router;