import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import { useNavigate } from "react-router-dom";
function UpdateProduct() {
    const context = useContext(myContext);
    const { products,product , setProducts, updateProduct } = context;
    console.log('products2',products)
    const navigate = useNavigate();
    return (
        <Layout>
        <div>
            <div className=' flex justify-center top-0 z-150   items-center'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={products.split("#")[0]}
                            onChange={(e) => setProducts({ ...products, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.price}
                            onChange={(e) => setProducts({ ...products, price: e.target.value })}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.imageUrl}
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.category}
                            onChange={(e) => setProducts({ ...products, category: e.target.value })}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                         value={products.description}
                         onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={updateProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Update Product
                        </button>
                        <button onClick={() => navigate(-1)}>Go back</button>
                    </div>
                 
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default UpdateProduct