import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function NewProduct() {
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('https://as2.ftcdn.net/v2/jpg/01/64/16/59/1000_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg')
    const [price,setPrice] = useState(0)
    const [desc,setDesc] = useState('')
    const [SKU,setSKU] = useState('')
    const [category,setCategory] = useState('')
    const [discount,setDiscount] = useState(0.0)

    const [categories,setCategories] = useState([])

    // read all categories
    const readAllCat = async()  =>{
        try {
            await axios.get('/api/category/all')
               .then(res => {
                    setCategories(res.data.categories)
                }).catch(err => toast.error(err.response.data.msg))
        } catch(err) {
            toast.error(err.message)
        }
    }

    useEffect(() => {
        readAllCat()
    },[])

  return (
    <div className='container'>
        <div className='row'>
      <div className="col-md-12">
        <h6 className="display-6 text-theme">New Product</h6>
      </div>
      </div>
      <div className="row">
        <div className="col-md-6">
            <div className="form-group mt-2">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className='form-control' required />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="">Product Image</label>
                <label htmlFor="image">
                <input type="file" name="image" id="image" className='form-control' required hidden />
                <div className="card">
                    <img src={image ? image : ''} alt="no image" height={400} className='card-img-top' />
                </div>
                </label>
               
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group mt-2">
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" cols="30" rows="10" className='form-control'></textarea>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" className='form-control' required />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="SKU">SKU</label>
                <input type="text" name="SKU" id="SKU" className='form-control' required />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className='for-select'>
                    <option value="null">Choose Product Category</option>
                    {
                        categories && categories.map((item,index) => {
                            return (
                                <option value={item.name} key={index}> {item.name} </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='form-group mt-2'>
                <label htmlFor="discount">Discount</label>
                <input type="number" name="discount" id="discount" className='form-control' required />
            </div>
            <div className='form-group mt-2'>
                <button className="btn btn-success">Add Product</button>
            </div>
        </div>
      </div>
    </div>
  )
}


export default NewProduct
