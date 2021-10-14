import React from 'react';

function ShopCartItem(props) {
    return (
        <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src="resources/img/product/single-product/cart-1.jpg" alt="" />
                    </div>
                    <div className="media-body">
                        <p className="text-justify">Minimalistic shop for multipurpose use Minimalistic shop for multipurpose use Minimalistic shop for multipurpose use Minimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose useMinimalistic shop for multipurpose use</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>$360.00</h5>
            </td>
            <td>
                <div className="product_count">
                    <input type="text" name="qty" id="sst" maxLength={12} defaultValue={1} title="Quantity:" className="input-text qty" />
                    <button className="increase items-count" type="button">
                        <i className="lnr lnr-chevron-up" />
                    </button>
                    <button className="reduced items-count" type="button">
                        <i className="lnr lnr-chevron-down" />
                    </button>
                </div>
            </td>
            <td>
                <h5>$720.00</h5>
            </td>
        </tr>
    );
}

export default ShopCartItem;