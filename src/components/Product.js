import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({ id, title, price, description, category, image, ratings }) {

    const [rating] = useState(Math.round(ratings.rate));
    const [hasPrime] = useState(Math.random() < 0.5);

    //  dispatch an action to add items to the basket
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, ratings
        };
        //sending the product as an action to the redux store... the basket slice
        dispatch(addToBasket(product));
    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>

            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500' />
                ))}
                <p className=' text-xs text-gray-400'>{ratings.count}</p>
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <p className='text-xs font-bold'>₹ {price}</p>
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img src="/primeDelivery.png" alt="" className="w-12" />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} className='mt-auto button' >Add to Basket</button>

        </div>
    )
}

export default Product;