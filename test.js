const Contenedor = require('./contenedor.js')

const item1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}

const item2 = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
}
  
const item3 ={
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

const item4 = {
    title: "Escuadra",
    price: 12343,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}

async function main() {
    const contenedor = new Contenedor('./productos.txt')

    let datos1 = await contenedor.getAll()
    console.log(datos1)

    let id1 = await contenedor.save(item1)
    console.log(id1)

    let id2 = await contenedor.save(item2)
    console.log(id2)

    let datos2 = await contenedor.getAll()
    console.log(datos2)

    let busca1 = await contenedor.getById(1)
    console.log(busca1)

    let busca2 = await contenedor.getById(10)
    console.log(busca2)

    let id3 = await contenedor.save(item4)
    console.log(id3)

    // Borra id 1
    await contenedor.deleteById(1)
    let delete1 = await contenedor.getAll()
    console.log(delete1)

    // Borra todos
    await contenedor.deleteAll()
    let delete2 = await contenedor.getAll()
    console.log(delete2)

}

main();