import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';

import { toast } from 'react-toastify';

 const ProductDetail =({ children, onClose })=> {
    const context = useContext(myContext);
    const { mode, product, product2, searchkey, setSearchkey, filterType, edithandle, deleteProduct, order, user,handleOpen } = context

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
      setIsOpen(false);
    };
    return (
      <div className="modal justify-center top-0 z-150   items-center ">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleClose}>Close 1</button>
          </div>
        </div>
      </div>
     


    </div>
  
    )
}

export default ProductDetail