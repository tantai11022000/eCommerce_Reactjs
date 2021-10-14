import React from 'react';

function HomeBanner(props) {
    return (
        <section className="home_banner_area mb-40">
            {/* class home_banner_area trong file style.css chứa background banner  */}
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content row">
                        <div className="col-lg-12">
                            <p className="sub text-uppercase">Thể hiện phong cách thời thượng</p>
                            <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
                            <h4>Hãy đến với cửa hàng chúng tôi</h4>
                            <a className="main_btn mt-40" href="#">Đến cửa hàng ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );

}

export default HomeBanner;