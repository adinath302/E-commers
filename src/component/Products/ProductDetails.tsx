import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'
import useCartStore from '../../store/useCartStore'

const ProductDetails = () => {
  const { productId } = useParams()

  const {
    data: product,
    isLoading,
    isError
  } = useProduct(productId ? Number(productId) : undefined)

  const addToCart = useCartStore(state => state.addToCart)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (isLoading) {
    return <div className='p-8'>Loading product...</div>
  }

  if (isError) {
    return <div className='p-8'>Failed to load product.</div>
  }

  if (!product) {
    return <div className='p-8'>Product not found.</div>
  }

  const handleDecrease = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  const handleIncrease = () => {
    setQuantity(prev => Math.min(product.stock, prev + 1))
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <main className='max-w-7xl mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
        {/* Product images */}
        <section>
          <div className='aspect-square bg-gray-100 rounded-2xl overflow-hidden'>
            <img
              src={product.images[selectedImage] ?? product.thumbnail}
              alt={product.title}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='flex gap-3 mt-4 overflow-x-auto'>
            {product.images.map((image, index) => (
              <button
                key={image}
                type='button'
                onClick={() => setSelectedImage(index)}
                className={`h-20 w-20 shrink-0 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? 'border-black'
                    : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </button>
            ))}
          </div>
        </section>

        {/* Product information */}
        <section className='flex flex-col'>
          <p className='text-sm text-gray-500 capitalize'>{product.category}</p>

          <h1 className='mt-2 text-3xl font-bold text-gray-900'>
            {product.title}
          </h1>

          <div className='mt-3 flex items-center gap-3'>
            <span className='font-semibold'>⭐ {product.rating}</span>
            <span className='text-gray-400'>Stock: {product.stock}</span>
          </div>

          <p className='mt-6 text-3xl font-bold text-gray-900'>
            ${product.price}
          </p>

          <p className='mt-6 text-gray-600 leading-7'>{product.description}</p>

          <div className='mt-8'>
            <p className='text-sm font-medium text-gray-900'>Quantity</p>

            <div className='mt-2 inline-flex items-center rounded-xl border'>
              <button
                type='button'
                onClick={handleDecrease}
                disabled={quantity <= 1}
                className='px-4 py-2 text-lg'
              >
                -
              </button>

              <span className='px-5 py-2 font-medium'>{quantity}</span>

              <button
                type='button'
                onClick={handleIncrease}
                disabled={quantity >= product.stock}
                className='px-4 py-2 text-lg'
              >
                +
              </button>
            </div>
          </div>

          <button
            type='button'
            onClick={handleAddToCart}
            className='mt-8 w-full rounded-xl bg-black px-5 py-3 font-semibold text-white hover:bg-purple-600 transition'
          >
            Add to Cart
          </button>
        </section>
      </div>
    </main>
  )
}

export default ProductDetails
