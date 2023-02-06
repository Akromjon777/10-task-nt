import express, { Application }  from "express";
import { AppDataSource } from "./config/config";
import model from "./controller";
import { ErrorMiddleware } from "./middleware/error.middleware";

const app:Application = express()

app.use(express.json())

AppDataSource
.initialize()
.then(():void => console.log("Connectd"))
.catch((error:unknown):void => console.log(error))  

app.use(model)

app.use(ErrorMiddleware)

app.listen(9090, ()=> {
    console.log(9090);
})
