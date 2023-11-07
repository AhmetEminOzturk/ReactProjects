import React from 'react'
import { Product } from '../models/IProducts'
import { useNavigate } from 'react-router-dom'


function ProductItem(props: { item: Product }) {


    const navigate = useNavigate()
    const goToUrl = (id: number) => {
        navigate('/detail/' + id)
        window.location.reload()
    }
    
    return (
        <>
            <div className='mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                <div onClick={() => goToUrl(props.item.id)} role='button' className="card">
                    <img src={props.item.images[0]} style={{ height: 250, objectFit: 'scale-down' }} className="card-img-top" alt={props.item.title} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: 45 }}>{props.item.title}</h5>
                        <span className="badge rounded-pill text-bg-secondary float-end">{props.item.brand}</span>
                        <p className="card-text">{props.item.category}</p>
                        <span className="badge rounded-pill text-bg-success fs-6 p-2">{props.item.price}₺</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem