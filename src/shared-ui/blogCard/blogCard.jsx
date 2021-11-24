import React from "react";

const BlogCard = (props) => {
  const { postedBy, userImage, blogImage, date, blogTitle, blogDesc, onClick } =
    props;

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div>
      <div onClick={onClick} className="blog-post">
        <div>
          <p className="user-title">{postedBy}</p>
          <img className="user-photo" src={userImage} alt="" />
          <img className="blog-thumb" src={blogImage} alt="" />
          <p className="date">{date}</p>
          <h1 className="title">{blogTitle}</h1>
          <p
            dangerouslySetInnerHTML={createMarkup(blogDesc)}
            className="desc"></p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
