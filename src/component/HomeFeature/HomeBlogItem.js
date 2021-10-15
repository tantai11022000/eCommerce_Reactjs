import React from 'react';

function HomeBlogItem(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-blog">
                <div className="thumb">
                    <img className="img-fluid" src={props.img} alt="" />
                </div>
                <div className="short_details">
                    <div className="meta-top d-flex">
                        <a href="#">{props.creater}</a>
                        <a href="#"><i className="ti-comments-smiley" />{props.amountComment}</a>
                    </div>
                    <a className="d-block" href="single-blog.html">
                        <h4>{props.title}</h4>
                    </a>
                    <div className="text-wrap">
                        <p>
                            {props.description}
                        </p>
                    </div>
                    <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right" /></a>
                </div>
            </div>
        </div>
    );
}

export default HomeBlogItem;