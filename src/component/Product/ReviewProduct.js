import React from 'react';

function ReviewProduct(props) {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="row total_rate">
                    <div className="col-6">
                        <div className="box_total">
                            <h5>Sao trung bình</h5>
                            <h4>4.0</h4>
                            <h6>(5 lượt đánh giá)</h6>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="rating_list">
                            <h3>5 lượt đánh giá</h3>
                            <ul className="list">
                                <li>
                                    <a href="#">5 
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /> Có 1 lượt đánh giá</a>
                                </li>
                                <li>
                                    <a href="#">4 
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /> Có 1 lượt đánh giá</a>
                                </li>
                                <li>
                                    <a href="#">3 
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /> Có 1 lượt đánh giá</a>
                                </li>
                                <li>
                                    <a href="#">2 
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /> Có 1 lượt đánh giá</a>
                                </li>
                                <li>
                                    <a href="#">1
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" /> Có 1 lượt đánh giá</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="review_list">
                    <div className="review_item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/product/single-product/review-1.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Blake Ruiz</h4>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>
                    <div className="review_item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/product/single-product/review-2.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Blake Ruiz</h4>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>
                    <div className="review_item">
                        <div className="media">
                            <div className="d-flex">
                                <img src="img/product/single-product/review-3.png" alt="" />
                            </div>
                            <div className="media-body">
                                <h4>Blake Ruiz</h4>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="review_box">
                    <h4>ĐƯA RA LỜI ĐÁNH GIÁ</h4>
                    <p>Bạn hiện chọn: </p>
                    <ul className="list">
                        <li>
                            <a href="#">
                                <i className="fa fa-star" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-star" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-star" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-star" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-star" />
                            </a>
                        </li>
                    </ul>
                    
                    <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Tên của bạn" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="number" name="number" placeholder="Số điện thoại" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea className="form-control" 
                                name="message" id="message" rows={1} placeholder="Lời đánh giá của bạn"
                                 defaultValue={""} style={{height: '150px'}}/>
                            </div>
                        </div>
                        <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn submit_btn">
                                Gửi đánh giá
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewProduct;