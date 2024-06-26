import Image from 'next/image'

const CheckoutProduct = ({id,title, price, rating, description, category, image, hasPrime }) => {
  return (
   <div className="grid grid-col-5">
        <Image src={image} height={200} width={200} objectFit="contain"/>
   </div>
  )
}

export default CheckoutProduct