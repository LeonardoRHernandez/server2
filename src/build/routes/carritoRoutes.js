"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoControllers_1 = require("../controllers/carritoControllers");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCarrito/', carritoControllers_1.carritoController.listar);
        this.router.post('/crearCarrito/', carritoControllers_1.carritoController.crear);
        this.router.delete('/eliminarCarrito/:id', carritoControllers_1.carritoController.eliminar);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;