import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import { ImWhatsapp } from "react-icons/im";
import { GrLocal, } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";

function ProductCard() {
    const context = useContext(myContext)
    const { mode, product, product2, searchkey, setSearchkey, filterType, setFilterType,
        filterPrice, setFilterPrice, edithandle } = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems)

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('add to cart');

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <section >
            <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    
                    ProductCard.jsx
                    <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                        <tr>
                            
                            <th scope="col" className="px-1 py-3">
                                Firm Name
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Owner
                            </th>

                            <th scope="col" className="px-1 py-3">
                                Category
                            </th>

                            <th scope="col" className="px-1 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-1 py-3">
                                hhhhhhhhhhhhh
                            </th>
                        </tr>
                    </thead>

                    {product2
                        .filter((obj) => obj.toLowerCase().includes(searchkey.toLowerCase()))
                        .filter((obj) => obj.includes(filterType))
                        .slice(0, 100).map((item, index) => {
                            { console.timeEnd() }
                            return (

                                // eslint-disable-next-line react/jsx-key
                                

                                    <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                      {/*  <td   className="px-1 py-1 "   > <a href="tel:${item.split('#')[3]}">
                                            <PiPhoneCallFill />


                            </a></td>*/}
                                        <td className="px-1 py-1 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            {item.split("#")[0]}
                                        </td>
                                        <td className="px-1 py-1 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            {item.split("#")[1]}
                                        </td>
                                        <td className="px-1 py-1 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            {item.split("#")[2]}   {item.split("#")[3]}
                                        </td>
                                      { /* <td className="px-1 py-1 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            {item.split("#")[6]}
                        </td>*/}
                                        <td className="px-1 py-1">
                                            <div className=" flex gap-2">
                                                <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    <div onClick={() => deleteProduct(item)}  >
                                                        <ImWhatsapp />
                                                    </div>

                                                    <Link to={'/updateproduct'}>
                                                        <div onClick={() => edithandle(item)}  >
                                                            <FaInfoCircle />

                                                        </div>
                                                    </Link>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                
                            )
                        })}

                </table>
            </div>
        </section >

    )
}

export default ProductCard