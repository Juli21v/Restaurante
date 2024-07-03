import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  nombre: String,
  Descripcion: String,
  Precio: Number,
  Categoria_videojuego:String
})

const product = mongoose.model("Productos", productSchema);




export default product;