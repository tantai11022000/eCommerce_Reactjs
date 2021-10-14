import React from 'react';
import ItemNewProductFeature from './ItemNewProductFeature';
function NewProductFeature(props) {
    return (
        <section className="new_product_area section_gap_top section_gap_bottom_custom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="main_title">
                            <h2><span>Sản phẩm mới</span></h2>
                            <p>Những sản phẩm vừa ra mắt mới lạ cuốn hút người xem</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <ItemNewProductFeature img="resources/img/product/new-product/new-product1.png"
                        name="Áo thun mùa hè" price="$120.70"> </ItemNewProductFeature>
                    <ItemNewProductFeature img="resources/img/product/new-product/new-product1.png"
                        name="Áo thun mùa hè" price="$120.70"> </ItemNewProductFeature>
                    <ItemNewProductFeature img="resources/img/product/new-product/new-product1.png"
                        name="Áo thun mùa hè" price="$120.70"> </ItemNewProductFeature>
                </div>
            </div>
        </section>
    );
}

export default NewProductFeature;