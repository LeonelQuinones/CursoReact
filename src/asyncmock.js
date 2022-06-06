const products = [
    {
        id: '1',
        nombre: 'Zapatillas Adidas Ultraboost 22',
        precio: 40000,
        categoria: 'zapatillas',
        img: '/zapatillas-adidas.jpg',
        stock: 14,
        descripcion: 'Disfruta de una comodidad y respuesta increíbles con estas zapatillas de running Ultraboost. Presentan una mediasuela BOOST que te proporciona un retorno de energía sin límites, un sistema Linear Energy Push y una suela con compuesto de caucho Continental™. Estas zapatillas presentan una parte superior fabricada con un hilo reciclado de alto rendimiento creado con al menos un 50% de Parley Ocean Plastic —  un material reinventado a partir de residuos plásticos recogidos en zonas costeras para evitar que contaminen nuestros océanos.'
    },
    {
        id: '2',
        nombre: 'Zapatillas Nike Legend Trainer',
        precio: 23000,
        categoria: 'zapatillas',
        img: '/zapatillas-nike.jpg',
        stock: 25,
        descripcion: 'Las Zapatillas Nike Legend Essential 2 cuentan con una parte superior transpirable con revestimiento sintético que mejora la durabilidad. La mediasuela de espuma Nike React proporciona una amortiguación suave y acolchada. Su interior proporciona un ajuste cómodo y ceñido. Hechas para dar el máximo en cada entrenamiento.'
    },
    {
        id: '3',
        nombre: 'Zapatillas Puma Alt Fade',
        precio: 15000,
        categoria: 'zapatillas',
        img: '/zapatillas-puma.jpg',
        stock: 7,
        descripcion: 'Las Zapatillas Puma Cell Vive Fade cuentan con una mediasuela CMEVA de largo completo de EVA que aporta confort duradero y una suela de goma que mejora la tracción para que sumes más kilómetros todos los días. Su construcción mejora la sujeción y la estabilidad para que puedas correr con más seguridad y superes tus marcas en cada salida.'
    },
    {
        id: '4',
        nombre: 'Pantalon Reebok',
        precio: 9000,
        categoria: 'pantalones',
        img: '/pantalon.jpg',
        stock: 12,
        descripcion: 'El mejor complemento para tu outfit casual lo tenés con el Pantalón Reebok Myt Woven, de corte holgado y pretina elástica con cordón regulable. Es una prenda impermeable DWR que te brinda seguridad frente a la lluvia o nieve ya que repele el agua. Con bolsillos que te permiten llevar lo esencial sin miedo a perder nada gracias al cierre a presión.'
    },
    {
        id: '5',
        nombre: 'Remera Nike',
        precio: 5000,
        categoria: 'remeras',
        img: '/remera.webp',
        stock: 21,
        descripcion: 'Si te gusta lucir un look relajado y urbano, la Remera Puma Ess Logo es un básico para tener en tu ropero, su material la hace fresca y ligera; llamarás la atención en cualquier lugar donde estés, su calce regular te permite mayor libertad de movimiento. Además, el logo estampado en el pecho te da el estilo único y característico de la marca.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoriaId))
        }, 500)
    })
}