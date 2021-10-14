import React from 'react';

function Brand(props) {
    return (
        <aside className="left_widgets p_filter_widgets">
            <div className="l_w_title">
                <h3>Các thương hiệu</h3>
            </div>
            <div className="widgets_inner">
                <ul className="list">
                    <li>
                        <a href="#">Adidas</a>
                    </li>
                    <li>
                        <a href="#">Nike</a>
                    </li>
                    <li>
                        <a href="#">Samsung</a>
                    </li>
                    <li>
                        <a href="#">Asus</a>
                    </li>
                    <li>
                        <a href="#">Van</a>
                    </li>
                </ul>
            </div>
        </aside>

    );
}

export default Brand;