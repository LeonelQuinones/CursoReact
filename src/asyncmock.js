const products = [
    {
        id: '0',
        nombre: 'Zapatillas Adidas Ultraboost 22',
        precio: 40000,
        categoria: 'Zapatillas',
        img: '/zapatillas-adidas.jpg',
        stock: 10,
        descripcion: 'Disfruta de una comodidad y respuesta increíbles con estas zapatillas de running Ultraboost. Presentan una mediasuela BOOST que te proporciona un retorno de energía sin límites, un sistema Linear Energy Push y una suela con compuesto de caucho Continental™. Estas zapatillas presentan una parte superior fabricada con un hilo reciclado de alto rendimiento creado con al menos un 50% de Parley Ocean Plastic —  un material reinventado a partir de residuos plásticos recogidos en zonas costeras para evitar que contaminen nuestros océanos.'
    },
    {
        id: '1',
        nombre: 'Zapatillas Nike Legend Trainer',
        precio: 23000,
        categoria: 'Zapatillas',
        img: '/zapatillas-nike.jpg',
        stock: 25,
        descripcion: 'Las Zapatillas Nike Legend Essential 2 cuentan con una parte superior transpirable con revestimiento sintético que mejora la durabilidad. La mediasuela de espuma Nike React proporciona una amortiguación suave y acolchada. Su interior proporciona un ajuste cómodo y ceñido. Hechas para dar el máximo en cada entrenamiento.'
    },
    {
        id: '2',
        nombre: 'Zapatillas Puma Alt Fade',
        precio: 15000,
        categoria: 'Zapatillas',
        img: '/zapatillas-puma.jpg',
        stock: 40,
        descripcion: 'Las Zapatillas Puma Cell Vive Fade cuentan con una mediasuela CMEVA de largo completo de EVA que aporta confort duradero y una suela de goma que mejora la tracción para que sumes más kilómetros todos los días. Su construcción mejora la sujeción y la estabilidad para que puedas correr con más seguridad y superes tus marcas en cada salida.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.slice(0, 1))
        }, 2000)
    })
}