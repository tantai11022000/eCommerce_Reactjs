import React from 'react';
import ItemProduct from '../../../container/Product/ItemProduct';
import HeaderContent from '../../../container/Content/HeaderContent';
function NewProductFeature(props) {
    return (
        <section className="new_product_area section_gap_top section_gap_bottom_custom">
            <div className="container">
                <HeaderContent mainContent="Sản phẩm mới" 
                infoContent="Những sản phẩm vừa ra mắt mới lạ cuốn hút người xem"> </HeaderContent>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="new_product">
                            <h5 className="text-uppercase">collection of 2019</h5>
                            <h3 className="text-uppercase">Men’s summer t-shirt</h3>
                            <div className="product-img">
                                <img className="img-fluid" src="resources/img/product/new-product/new-product1.png" alt="" />
                            </div>
                            <h4>$120.70</h4>
                            <a href="#" className="main_btn">Thêm vào giỏ</a>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="row">
                            <ItemProduct type="col-lg-6 col-md-6" name="Tên sản phẩm" img="resources/img/product/new-product/n1.jpg"
                                price="$35.00" discountPrice="$25.00"> </ItemProduct>
                            <ItemProduct type="col-lg-6 col-md-6" name="Tên sản phẩm" img="resources/img/product/new-product/n2.jpg"
                                price="$35.00" discountPrice="$25.00"> </ItemProduct>
                            <ItemProduct type="col-lg-6 col-md-6" name="Tên sản phẩm" img="resources/img/product/new-product/n3.jpg"
                                price="$35.00" discountPrice="$25.00"> </ItemProduct>
                            <ItemProduct type="col-lg-6 col-md-6" name="Tên sản phẩm" img="resources/img/product/new-product/n4.jpg"
                                price="$35.00" discountPrice="$25.00"> </ItemProduct>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default NewProductFeature;