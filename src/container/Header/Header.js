import React from 'react';




const Header = props => {
    return (

        <header className="header_area">
            <div className="top_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="float-left">
                                <p>Điện thoại: xxxxxxxxxxx </p>
                                <p>email: xxxxxxxxxx@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="float-right">
                                <ul className="right_side">
                                    <li>
                                        <a href="cart.html">
                                            Đăng nhập
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tracking.html">
                                            Đăng ký
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <a className="navbar-brand logo_h" href="index.html">
                            <img src="resources/img/logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
                            <div className="row w-100 mr-0">
                                <div className="col-lg-9 pr-0">
                                    <ul className="nav navbar-nav center_nav pull-right">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Trang chủ</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="index.html">Cửa hàng</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="index.html">Bài viết</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Giảm giá</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Tìm kiếm nâng cao</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 pr-0">
                                    <ul className="nav navbar-nav navbar-right right_nav pull-right">
                                        <li className="nav-item">
                                            <a className="icons">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="icons">
                                                <i className="ti-shopping-cart" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="icons">
                                                <i className="ti-user" aria-hidden="true" />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>


    );
};

export default Header;