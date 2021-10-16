import React from 'react';

function CommentFormBlog(props) {
    return (
        <div className="comment-form">
            <h4>Hãy để lại lời bình luận của bạn</h4>
            <form className="form-contact comment_form" action="#" id="commentForm">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Lời bình luận" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" name="name" id="name" type="text" placeholder="Họ tên" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="main_btn">Gửi lời bình luận</button>
                </div>
            </form>
        </div>
    );
}

export default CommentFormBlog;