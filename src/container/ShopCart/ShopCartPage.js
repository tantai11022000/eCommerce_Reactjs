import React from 'react';
import ShopCartItem from '../../component/ShopCart/ShopCartItem';

function ShopCartPage(props) {
    return (
        <section className="cart_area">
            <div className="container">
                <div className="cart_inner">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ShopCartItem />
                                <ShopCartItem />
                                <ShopCartItem />
                                <tr className="shipping_area">
                                    <td />
                                    <td />
                                    <td>
                                        <h5>Giao hàng</h5>
                                    </td>
                                    <td>
                                        <div className="shipping_box">
                                            <ul className="list">
                                                <br />
                                                <li>
                                                    <a href="#">Bình thường : $5</a>
                                                </li>
                                                <li className="active">
                                                    <a href="#">Nhanh $10</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td />
                                    <td>
                                        <h5>Tổng đơn hàng</h5>
                                    </td>
                                    <td>
                                        <h5>$2160.000</h5>
                                    </td>
                                </tr>

                                <tr className="out_button_area">
                                    <td />
                                    <td />
                                    <td />
                                    <td>
                                        <div className="checkout_btn_inner" style={{ position: 'absolute', right: '50%' }}>
                                            <a className="main_btn" href="#">Thanh toán</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopCartPage;