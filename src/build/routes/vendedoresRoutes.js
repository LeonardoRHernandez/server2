"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendedoresControllers_1 = require("../controllers/vendedoresControllers");
class VendedorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/crearVendedor/', vendedoresControllers_1.vendedoresController.crear);
        this.router.get('/mostrarVendedores/', vendedoresControllers_1.vendedoresController.listar);
        this.router.get('/mostrarVendedor/:id', vendedoresControllers_1.vendedoresController.listarUno);
        this.router.put('/actualizarVendedor/:id', vendedoresControllers_1.vendedoresController.actualizar);
        this.router.delete('/eliminarVendedor/:id', vendedoresControllers_1.vendedoresController.eliminar);
        this.router.post('/iniciarSesionV/', vendedoresControllers_1.vendedoresController.iniciarSesionV);
    }
}
const vendedoresRoutes = new VendedorRoutes();
exports.default = vendedoresRoutes.router;
