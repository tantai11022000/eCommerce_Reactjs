import React from 'react';
import ItemProduct from '../Product/ItemProduct';
import HeaderContent from '../Content/HeaderContent';
function ProductFeature(props) {
    return (

        <section className="feature_product_area section_gap_bottom_custom">
            <div className="container">
                <HeaderContent mainContent="Sản phẩm đặc trưng"
                    infoContent="Bạn sẽ không thất vọng khi lựa chọn"> </HeaderContent>

                <div className="row">
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/feature-product/f-p-1.jpg"
                        price="$35.00" discountPrice="$25.00"> </ItemProduct>
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/feature-product/f-p-2.jpg"
                        price="$35.00" discountPrice="$25.00"> </ItemProduct>
                    <ItemProduct type="col-lg-4 col-md-6" name="Tên sản phẩm" img="resources/img/product/feature-product/f-p-3.jpg"
                        price="$35.00" discountPrice="$25.00"> </ItemProduct>
                </div>
            </div>
        </section>

    );
}

export default ProductFeature;