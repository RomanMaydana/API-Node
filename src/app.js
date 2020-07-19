import express, { json } from "express";
import morgan from "morgan";

// import routes
import usuarioRoute from "./routes/usuarios";

const app = express();

//midlewares
app.use(morgan("dev"));
app.use(json());

app.use("/usuarios", usuarioRoute);

// const date = new Date();
// const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
// console.log(dateString);
export default app;
