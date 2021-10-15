import React from 'react';
// độ phân giải ảnh có thể làm vỡ layout
function ItemProduct(props) {
    return (
        <div className={props.type}>
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
                        <h4>{props.name}</h4>
                    </a>
                    <div className="mt-3">
                        <span className="mr-4">{props.discountPrice}</span>
                        <del>{props.price}</del>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;