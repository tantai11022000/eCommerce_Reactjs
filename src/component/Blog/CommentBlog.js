import React from 'react';

function CommentBlog(props) {
    return (
        <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                    <div className="thumb">
                        <img src="resources/img/blog/c1.png" alt="" />
                    </div>
                    <div className="desc">
                        <p className="comment">
                            Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                        </p>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <h5>
                                    <a href="#">Emilly Blunt</a>
                                </h5>
                                <p className="date">December 4, 2017 at 3:12 pm </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentBlog;