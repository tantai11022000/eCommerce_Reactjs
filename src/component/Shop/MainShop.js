import React from 'react';
import ItemProduct from '../../container/Product/ItemProduct';
function MainShop(props) {
    return (
        <div className="col-lg-9">
            <div className="product_top_bar">
                <div className="left_dorp">
                    <select className="sorting">
                        <option value={1}>Sắp xếp</option>
                        <option value={2}>Theo giá tiền</option>
                        <option value={3}>Theo tên</option>
                    </select>
                    <select className="show">
                        <option value={1}>Hiển thị 6</option>
                        <option value={2}>Hiển thị 12</option>
                        <option value={3}>Hiển thị 18</option>
                    </select>
                </div>
            </div>
            <div className="latest_product_inner">
                <div className="row">
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/inspired-product/i1.jpg"
                        discountPrice="$2500" Price="$3500"></ItemProduct>
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/inspired-product/i1.jpg"
                        discountPrice="$2500" Price="$3500"></ItemProduct>
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/inspired-product/i1.jpg"
                        discountPrice="$2500" Price="$3500"></ItemProduct>
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/inspired-product/i1.jpg"
                        discountPrice="$2500" Price="$3500"></ItemProduct>
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/inspired-product/i1.jpg"
                        discountPrice="$2500" Price="$3500"></ItemProduct>
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/inspired-product/i1.jpg"
                        discountPrice="$2500" Price="$3500"></ItemProduct>
                </div>
            </div>
        </div>
    );
}

export default MainShop;