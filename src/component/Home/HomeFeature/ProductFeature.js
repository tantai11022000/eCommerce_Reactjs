import React from 'react';
import ItemProductFeature from './ItemProductFeature';
function ProductFeature(props) {
    return (

        <section className="feature_product_area section_gap_bottom_custom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <h2><span>Sản phẩm đặc trưng</span></h2>
                            <p>Bạn sẽ không thất vọng khi lựa chọn</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ItemProductFeature img="resources/img/product/feature-product/f-p-1.jpg"
                        price="$35.00" discountPrice="$25.00"> </ItemProductFeature>
                    <ItemProductFeature img="resources/img/product/feature-product/f-p-2.jpg"
                        price="$35.00" discountPrice="$25.00"> </ItemProductFeature>
                    <ItemProductFeature img="resources/img/product/feature-product/f-p-3.jpg"
                        price="$35.00" discountPrice="$25.00"> </ItemProductFeature>
                </div>
            </div>
        </section>

    );
}

export default ProductFeature;