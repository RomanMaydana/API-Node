import app from "./app";

async function main(port) {
  await app.listen(port);
  console.log(`Escuchando Servidor en puerto ${port}`);
}

if (process.argv.length > 3) {
  const port = process.argv[2];
  const nombre = process.argv[3];
  console.log(`Api Name: ${nombre}`);
  main(port);
} else console.log("ingrese puerto o nombre");
