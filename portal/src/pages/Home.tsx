import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Api'
import { IProducts } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import SimpleImageSlider from "react-simple-image-slider";
import {Helmet} from "react-helmet";

//import images
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import NavBar from '../components/NavBar';
import Header from '../components/Header';


function Home() {

  const images = [
    { url: img1 },
    { url: img2 },
  ];

  const [proObj, setProObj] = useState<IProducts>()

  useEffect(() => {
    getAllProducts().then(res => {
      //işlem başarılı, datalar geldi.
      const dt = res.data
      setProObj(dt)
    }).catch(err => {
      alert('Servis Hatası Oluştu!')
    })
  }, [])


  return (
    <>
    <Helmet>
    <title>Portal E-Commerce</title>
    <meta name='description' content='Portal E-Commerce Site'></meta>
    </Helmet>
    <Header/>
    <div className='mb-3'>
      <NavBar/>
    </div>
    <div style={{position:'relative',marginBottom:3}}>
      <SimpleImageSlider
        width={'100%'}
        height={340}
        images={images}
        showBullets={true}
        showNavs={true}
      />
     </div> 

      <div className="row">
        {proObj && proObj.products.map((item, index) =>
          <ProductItem item={item} key={index} />
        )}
      </div>
    </>
  )
}

export default Home