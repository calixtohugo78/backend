import bodyParser from "body-parser";
import { Express } from "express";

export default function routes(app: Express) {
    app.use(
        bodyParser.json(),
    )
}