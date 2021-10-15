import React from 'react';
import ImgDetailProduct from '../../component/Product/ImgDetailProduct';
import InfoDetailProduct from '../../component/Product/InfoDetailProduct';
import CommentProduct from '../../component/Product/CommentProduct';
import ProfileProduct from '../../component/Product/ProfileProduct';
import ReviewProduct from '../../component/Product/ReviewProduct';
function DetailProductPage(props) {
    return (
        <div>
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <ImgDetailProduct> </ImgDetailProduct>
                        <InfoDetailProduct name="Quần jean" price="$150" category="Quần"
                            status="Còn hàng" description="Quần jean chất liệu tốt giá cả hợp lý" > </InfoDetailProduct>
                    </div>
                </div>
            </div>
            <section className="product_description_area">
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="comment-tab" data-toggle="tab" href="#comment"
                                role="tab" aria-controls="comment" aria-selected="false">Bình luận</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                role="tab" aria-controls="profile" aria-selected="false">Thông số chi tiết</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="review-tab" data-toggle="tab" href="#review"
                                role="tab" aria-controls="review" aria-selected="false">Đánh giá</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="comment" role="tabpanel" aria-labelledby="comment-tab">
                            <CommentProduct />
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                            < ProfileProduct />

                        </div>
                        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                           <ReviewProduct />
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default DetailProductPage;