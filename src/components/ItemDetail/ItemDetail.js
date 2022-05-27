import ItemD from '../ItemD/ItemD'
import './ItemDetail.css'

const ItemDetail = ({products}) => {
    return (
        <div>
            {products.map(desc => <ItemD key={desc.id} {...desc}/>)}
        </div>
    )
}

export default ItemDetail