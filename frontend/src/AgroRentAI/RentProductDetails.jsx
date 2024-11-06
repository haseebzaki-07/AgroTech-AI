import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useParams } from 'react-router-dom';

const RentProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const ApiUrl = process.env.NODE_ENV === 'production'
  ? 'https://agrotech-ai-11j3.onrender.com'
  : 'http://localhost:8080';

  const {productId} = useParams()
  // Fetch product details by product ID
  useEffect(() => {
    const fetchProductDetails = async () => {
      
      const response = await fetch(`${ApiUrl}/api/rent-products/${productId}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    // Implement the add-to-cart functionality here
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const handleProceedToCheckout = () => {
    // Redirect to checkout page or handle checkout logic
    console.log('Proceeding to checkout');
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
  {/* Heading */}
  <h2 className="text-4xl font-extrabold text-green-900 mb-8 ">Product Details</h2>

  <div className="max-w-5xl bg-white rounded-lg shadow-lg p-6 w-full">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Product Image */}
      <div className="lg:w-1/2 flex justify-center items-center p-6">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full max-w-sm object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="lg:w-1/2 p-6">
        <h1 className="text-3xl font-bold text-green-900 mb-4">{product.name}</h1>
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-2 text-green-600">{product.rating} / 5</span>
        </div>
        <p className="text-lg text-green-700 mb-4">{product.description}</p>

        {/* Category */}
        <div className="flex space-x-2 mb-4">
          {product.category.map((cat, index) => (
            <span key={index} className="inline-block bg-green-200 text-green-700 rounded-full px-3 py-1 text-sm">
              {cat}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold text-green-800 mb-4">${product.price} / day</p>

        {/* Quantity Selector */}
        <div className="flex items-center mb-6">
          <label className="text-green-700 mr-4">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, e.target.value))}
            className="w-16 text-center border border-green-300 rounded-md"
          />
        </div>

        {/* Add to Cart and Checkout Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition-colors duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={handleProceedToCheckout}
            className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

   
  );
};

export default RentProductDetails;
