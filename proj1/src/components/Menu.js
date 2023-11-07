import React from 'react'

function Menu() {
    return (
        <>
            <div className="list-group">
                <a href="?#" className="list-group-item list-group-item-action active" aria-current="true">
                    The current link item
                </a>
                <a href="?#" className="list-group-item list-group-item-action">A second link item</a>
                <a href="?#" className="list-group-item list-group-item-action">A third link item</a>
                <a href="?#" className="list-group-item list-group-item-action">A fourth link item</a>
                <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
            </div>
            <div className='mt-2 mb-2 d-none d-lg-block'>
                <a target='_blank' href='https://www.google.com.tr'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXsbDN_TqkXiho_EBTbMzP29gsZez9TygFnVkA-Yyt2gEHRbPyHyV1s3PIeBHq4DhL9g&usqp=CAU' className='img-fluid'></img>
                </a>
            </div>
        </>
    )
}

export default Menu