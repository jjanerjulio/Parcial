import { Application } from "express";

import { ServicioController } from "../controllers/servicio.controller";

export class ServicioRouter {
    public servicioController: ServicioController = new ServicioController();

    public routes(app: Application): void {
        app.route("/servicios").get(this.servicioController.getAllServicio);
        app.route("/servicios/:id").get(this.servicioController.getOneServicio);
        app.route("/servicio").post(this.servicioController.createServicio);
        app.route("/servicio/:id").patch(this.servicioController.updateServicio);
        app.route("/delservicio/:id").patch(this.servicioController.deleteServicio);
    }
}