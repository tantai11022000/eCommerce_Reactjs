import React from 'react';
import CommentBlog from '../../component/Blog/CommentBlog';
import CommentFormBlog from '../../component/Blog/CommentFormBlog';
import RightBlog from '../../component/Blog/RightBlog';
function DetailBlog(props) {
    return (
        <section className="blog_area single-post-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 posts-list">
                        <div className="single-post">
                            <div className="feature-img">
                                <img className="img-fluid" src="resources/img/blog/main-blog/m-blog-1.jpg" alt="" />
                            </div>
                            <div className="blog_details">
                                <h2>Second divided from form fish beast made every of seas
                                    all gathered us saying he our</h2>
                                <ul className="blog-info-link mt-3 mb-4">
                                    <li><a href="#"><i className="ti-user" /> Travel, Lifestyle</a></li>
                                    <li><a href="#"><i className="ti-comments" /> 03 Comments</a></li>
                                </ul>
                                <p className="excert">
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                                </p>
                                <p>
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                                </p>
                                <div className="quote-wrapper">
                                    <div className="quotes">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                                    </div>
                                </div>
                                <p>
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                                </p>
                                <p>
                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                                </p>
                            </div>
                        </div>
                        <div className="navigation-top">
                            <div className="navigation-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                        <div className="thumb">
                                            <a href="#">
                                                <img className="img-fluid" src="resources/img/blog/prev.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="arrow">
                                            <a href="#">
                                                <span className="ti-arrow-left text-white" />
                                            </a>
                                        </div>
                                        <div className="detials">
                                            <p>Bài viết trước</p>
                                            <a href="#">
                                                <h4>Space The Final Frontier</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                        <div className="detials">
                                            <p>Bài viết tiếp theo</p>
                                            <a href="#">
                                                <h4>Telescopes 101</h4>
                                            </a>
                                        </div>
                                        <div className="arrow">
                                            <a href="#">
                                                <span className="ti-arrow-right text-white" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="#">
                                                <img className="img-fluid" src="resources/img/blog/next.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comments-area">
                            <h4>05 Comments</h4>
                            <CommentBlog />
                            <CommentBlog />
                            <CommentBlog />
                            <CommentBlog />
                            <CommentBlog />
                        </div>
                        <CommentFormBlog />
                    </div>
                    <RightBlog></RightBlog>
                </div>
            </div>
        </section>

    );
}

export default DetailBlog;