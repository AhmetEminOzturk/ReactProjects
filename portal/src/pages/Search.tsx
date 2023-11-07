import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { search } from '../Api'
import ProductItem from '../components/ProductItem'
import { IProducts } from '../models/IProducts'
import load from '../assets/load.gif'
import { Helmet } from 'react-helmet'

function Search() {

    const { q } = useParams()
    const [proObj, setProObj] = useState<IProducts | null>()
    const [skipCount, setSkipCount] = useState(0)
    const [limitCount, setLimitCount] = useState(8)
    const [totalPage, setTotalPage] = useState(0)
    const [pageArr, setPageArr] = useState<number[]>([])
    const [isLoad, setIsLoad] = useState(false)


    useEffect(() => {
        goToData(0)
    }, [])

    const goToData = (skip: number) => {

        if (q) {
            setIsLoad(true)
            setProObj(null)
            setSkipCount(skip)

            search(q, limitCount, skip).then(res => {
                const dt = res.data
                if (dt) {
                    setProObj(dt)
                    var pageCount = Math.ceil(dt.total / limitCount)
                    const arr = []
                    for (let i = 0; i < pageCount; i++) {
                        arr.push(i)
                    }
                    setPageArr(arr)
                }
            }).finally(() => {
                setIsLoad(false)
            })
        }
    }

    return (
        <>
            <Helmet>
                <title>Portal Search</title>
                <meta name='description' content={'Portal-Search'}></meta>
            </Helmet>
            <Header />
            <NavBar />
            <h2>Search Result : {q}</h2>
            {isLoad === true &&
                <div className='text-center'>
                    <img className='img-fluid' style={{ maxWidth: 300 }} src={load}></img>
                </div>
            }
            <div className="row">
                {proObj && proObj.products.map((item, index) =>
                    <ProductItem item={item} key={index} />
                )}
                <nav>
                    <ul className="pagination justify-content-center">
                        {pageArr.map((item, index) =>
                            <li key={index} className={skipCount === item ? 'page-item active' : 'page-item'}><a onClick={() => goToData(item)} className="page-link" role='button'>{(item + 1)}</a></li>
                        )}

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Search