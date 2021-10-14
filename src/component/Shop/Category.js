import React from 'react';

function Category(props) {
    return (
        <aside className="left_widgets p_filter_widgets">
            <div className="l_w_title">
                <h3>Các danh mục</h3>
            </div>
            <div className="widgets_inner">
                <ul className="list">
                    <li>
                        <a href="#">Áo</a>
                    </li>
                    <li>
                        <a href="#">Quần</a>
                    </li>
                    <li>
                        <a href="#">Nón</a>
                    </li>
                    <li>
                        <a href="#">Găng tay</a>
                    </li>
                    <li>
                        <a href="#">Nội y</a>
                    </li>
                </ul>
            </div>
        </aside>

    );
}

export default Category;