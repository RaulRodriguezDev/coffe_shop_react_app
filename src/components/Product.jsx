import Image from 'next/image'
import { formatCurrency } from '../../helpers';
const Product = ({ product }) => {
    const { name, price, image } = product
    return (
        <div className="border p-3">
            <Image alt={name} src={`/assets/img/${image}.jpg`} width={400} height={600}/>
            <div>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>
                    {formatCurrency(price)}
                </p>
            </div>
        </div>
    )
}

export default Product;