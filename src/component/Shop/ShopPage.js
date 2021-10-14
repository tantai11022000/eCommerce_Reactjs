import React from 'react';
import MainShop from './MainShop';
import Category from './Category';
import Brand from './Brand';
import Pagination from './Pagination';
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