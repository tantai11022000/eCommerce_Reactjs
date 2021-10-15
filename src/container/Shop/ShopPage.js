import React from 'react';
import MainShop from '../../component/Shop/MainShop';
import Category from '../../component/Shop/Category';
import Brand from '../../component/Shop/Brand';
import Pagination from '../../component/Shop/Pagination';
function ShopPage(props) {
    return (

        <section className="cat_product_area section_gap">
            <div className="container">
                <div className="row flex-row-reverse">
                    <MainShop />
                    <div className="col-lg-3">
                        <div className="left_sidebar_area">
                            <Category />
                            <Brand />
                        </div>
                    </div>
                </div>
                <Pagination amountPage= {3}></Pagination>
            </div>

        </section>


    );
}

export default ShopPage;