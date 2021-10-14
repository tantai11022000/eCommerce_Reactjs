import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                            <ul>
                                <li><a href="#">CÁC CÂU HỎI THƯỜNG GẶP</a></li>
                                <li><a href="#">HƯỚNG DẪN ĐẶT HÀNG</a></li>
                                <li><a href="#">CHÍNH SÁCH</a></li>
                                <li><a href="#">EMAIL HỖ TRỢ : XXXX@GMAIL.COM</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>THÔNG TIN VỀ CỦA HÀNG</h4>
                            <ul>
                                <li><a href="#">GIỚI THIỆU VỀ THƯƠNG MẠI PTIT</a></li>
                                <li><a href="#">ĐIỀU KHOẢN SỬ DỤNG</a></li>
                                <li><a href="#">ĐỊA CHỈ VĂN PHÒNG</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>CÁC ĐỐI TÁC</h4>
                            <ul>
                                <li>SHOPPE</li>
                                <li>TIKI</li>
                                <li>LAZADA</li>
                                <li>PTITHCM</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                            <ul>
                                <li><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg" alt="Ảnh bị lỗi" /></li>
                                <li><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg" alt="Ảnh bị lỗi" /></li>
                                <li><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg" alt ="Ảnh bị lỗi"/></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 single-footer-widget">
                            <h4>KẾT NỐI VÓI CHÚNG TÔI</h4>

                            <div className="footer-bottom">
                                <div className="col-md-12 footer-social">
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-dribbble" /></a>
                                    <a href="#"><i className="fa fa-behance" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    );
}

export default Footer;