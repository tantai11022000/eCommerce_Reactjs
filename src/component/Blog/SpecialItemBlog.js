import React from 'react';

function PopularItemBlog(props) {
    return (
        <div className="media post_item">
            <img src="resources/img/blog/popular-post/post1.jpg" alt="post" />
            <div className="media-body">
                <a href="single-blog.html">
                    <h3>From life was you fish...</h3>
                </a>
                <p>January 12, 2019</p>
            </div>
        </div>
    );
}

export default PopularItemBlog;