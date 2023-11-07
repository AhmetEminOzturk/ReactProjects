import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { firstUpper } from '../util'
import { singleCategoryProducts } from '../Api'
import { IProducts } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

function Category() {

    const [proObj, setProObj] = useState<IProducts>()
    const navigate = useNavigate()
    const { catName } = useParams()

    useEffect(() => {
        singleCategoryProducts(catName!).then(res => {
            const dt = res.data
            if (dt) {
                if (dt.products.length === 0) {
                    navigate('/')
                } else {
                    setProObj(dt)
                }
            }
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>{firstUpper(catName!)}</title>
                <meta name='description' content={firstUpper(catName!) + 'Categories'}></meta>
            </Helmet>
            <Header />
            <NavBar />
            <div className='container-fluid'>
                <h3>{firstUpper(catName!)}</h3>
            </div>
            <div className="row">
                {proObj && proObj.products.map((item, index) =>
                    <ProductItem item={item} key={index} />
                )}
            </div>
        </>
    )
}

export default Category