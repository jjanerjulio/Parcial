import express, {Application} from "express";
import {Routes} from "../routes/index";


export class App {
    app: Application;
    public route: Routes = new Routes();
    constructor(
        private port ? : number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set("port", this.port || process.env.PORT || 3000);
    }

    async listen() {
        await this.app.listen(this.app.get("port"));
        console.log("Server on port ", this.app.get("port"));
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes() {
        this.route.servicioRouter.routes(this.app);
    
    }
}