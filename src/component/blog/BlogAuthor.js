import React from 'react';

const BlogAuthor = ({data}) => {
    return (
        <div className="blog-author">
            <div className="author">
                <div className="author-thumb">
                    <img src={process.env.PUBLIC_URL + `/${data.author_avatar}`} alt="Blog Author" />
                </div>
            </div>
        </div>
    )
}

export default BlogAuthor;
