import React from 'react';

function InfoDetailProduct(props) {
    return (
        <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
                <h3>{props.name}</h3>
                <h2>{props.price}</h2>
                <ul className="list">
                    <li>
                        <a className="active" href="#">
                            <span>Loại</span> : {props.category}</a>
                    </li>
                    <li>
                        <a href="#"> <span>Trạng thái</span> : {props.status}</a>
                    </li>
                </ul>
                <p>
                    {props.description}
                </p>
                <div className="product_count">
                    <label htmlFor="qty">Số lượng</label>
                    <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                    <button className="increase items-count" type="button">
                        <i className="lnr lnr-chevron-up" />
                    </button>
                    <button className="reduced items-count" type="button">
                        <i className="lnr lnr-chevron-down" />
                    </button>
                </div>
                <div className="card_area">
                    <a className="main_btn" href="#">Thêm vào giỏ</a>
                    <a className="icon_btn" href="#">
                        <i className="lnr lnr lnr-heart" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default InfoDetailProduct;