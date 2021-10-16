import React from 'react';
import SpecialItemBlog from './SpecialItemBlog'
function RightBlog(props) {
    return (
        <div className="col-lg-4">
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tìm bài vi" />
                                <div className="input-group-append">
                                    <button className="btn" type="button"><i className="ti-search" /></button>
                                </div>
                            </div>
                        </div>
                        <button className="main_btn rounded-0 w-100" type="submit">Tìm kiếm</button>
                    </form>
                </aside>

                <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Bài viết nổi bật</h3>
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                </aside>

                <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Bài viết mới đăng</h3>
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                    <SpecialItemBlog />
                </aside>
            </div>
        </div>
    );
}

export default RightBlog;