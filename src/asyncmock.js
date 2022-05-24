const products = [
    {
        id: '0',
        nombre: 'Zapatillas Adidas Ultraboost 22',
        precio: 40000,
        categoria: 'Zapatillas',
        img: '/zapatillas-adidas.jpg',
        stock: 10,
        descripcion: 'Descripcion zapatillas adidas'
    },
    {
        id: '1',
        nombre: 'Zapatillas Nike Legend Trainer',
        precio: 23000,
        categoria: 'Zapatillas',
        img: '/zapatillas-nike.jpg',
        stock: 25,
        descripcion: 'Descripcion zapatillas nike'
    },
    {
        id: '2',
        nombre: 'Zapatillas Puma Alt Fade',
        precio: 15000,
        categoria: 'Zapatillas',
        img: '/zapatillas-puma.jpg',
        stock: 40,
        descripcion: 'Descripcion zapatillas puma'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}