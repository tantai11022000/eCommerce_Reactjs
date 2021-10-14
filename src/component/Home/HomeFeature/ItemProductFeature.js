import React from 'react';

function ItemProductFeature(props) {
    return (

        <div className="col-lg-4 col-md-6">
            <div className="single-product">
                <div className="product-img">
                    <img className="img-fluid w-100" src={props.img} alt="" />
                    <div className="p_icon">
                        <a href="#">
                            <i className="ti-eye" />
                        </a>
                        <a href="#">
                            <i className="ti-heart" />
                        </a>
                        <a href="#">
                            <i className="ti-shopping-cart" />
                        </a>
                    </div>
                </div>
                <div className="product-btm">
                    <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                        <span className="mr-4">{props.price}</span>
                        <del>{props.discountPrice}</del>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ItemProductFeature;