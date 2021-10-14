import React from 'react';

function ItemNewProductFeature(props) {
    return (
        <div className="col-lg-4">
            <div className="new_product">
                <h5 className="text-uppercase">Sản phẩm mới</h5>
                <h3 className="text-uppercase">{props.name}</h3>
                <div className="product-img">
                    <img className="img-fluid" src={props.img} alt="" />
                </div>
                <h4>{props.price}</h4>
                <button href="#" className="main_btn">Thêm vào giỏ</button>
            </div>
        </div>
    );
}

export default ItemNewProductFeature;