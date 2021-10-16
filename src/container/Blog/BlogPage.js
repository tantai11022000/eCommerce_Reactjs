import React from 'react';
import ItemBlog from '../../component/Blog/ItemBlog';
import Pagination from '../../component/Shop/Pagination';
import SpecialItemBlog from '../../component/Blog/SpecialItemBlog';
import RightBlog from '../../component/Blog/RightBlog';
function BlogPage(props) {
    return (
        <section className="blog_area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="blog_left_sidebar">
                            <ItemBlog></ItemBlog>
                            <ItemBlog></ItemBlog>
                            <ItemBlog></ItemBlog>
                            <div style={{ position: 'absolute', right: '50%', top: '98%' }} >
                                <Pagination amountPage={3}> </Pagination>
                            </div>
                        </div>
                    </div>
                    <RightBlog />
                </div>
            </div>
        </section>

    );
}

export default BlogPage;