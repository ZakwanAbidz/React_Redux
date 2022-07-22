import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios';
import {set_products} from '../Redux/Actions/ProductActions'

const ProductListing = () => {
  
  const products=useSelector((state)=>state);
  const dispatch=useDispatch();

  const fakeProducts=async()=>{
    const response= await axios.get('https://fakestoreapi.com/products')
    .catch((err)=>{console.log('Error',err);})
    dispatch(set_products(response.data));
  }

  useEffect(() => {
    fakeProducts();
  }, []);

  console.log('Products Updated', products);
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing