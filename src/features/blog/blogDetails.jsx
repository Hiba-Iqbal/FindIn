import React from "react";
import moment from "moment";
import ImageGallery from "../../app-ui/imageGallery/imgageGallery";
import Carousel from "react-multi-carousel";
import BlogCard from "../../shared-ui/blogCard/blogCard";

const blogDetails = (props) => {
  const { unitBlog, otherBlogsByAuthor, OtherBlogs, setUnitBlog } = props;

  const createMarkup = (html) => {
    return { __html: html };
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1401 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1201 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 541 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
    },
  };

  console.log(unitBlog?.blogsPhoto, "unitBlog");

  return (
    <div className="inner-items-wrapper">
      <div className="blog-cover">
        <img src={unitBlog?.bannerPhoto} alt="" />
      </div>
      <div className="blog-details">
        <p className="date">
          {moment(unitBlog?.createdAt).format("MMMM DD YYYY")}
        </p>
        <div className="title-with-desc">
          <h1 className="title">{unitBlog?.title}</h1>
          <p
            className="desc"
            dangerouslySetInnerHTML={createMarkup(unitBlog?.content)}></p>
        </div>
        <p
          className="long-desc"
          dangerouslySetInnerHTML={createMarkup(unitBlog.description)}></p>

        <div className="image-slider">
          {unitBlog?.blogsPhoto?.length > 0 && (
            <ImageGallery image={unitBlog?.blogsPhoto} />
          )}
        </div>
        <div className="user-post-wrapper">
          <div className="main-card">
            <div className="inner-box">
              <div className="image-box">
                <img src={unitBlog?.blogAuthor?.displayPhoto} />
              </div>
              <div>
                <h1 className="author-details-name">
                  {unitBlog?.blogAuthor?.name}
                </h1>
                <p className="ml-3">{unitBlog?.blogAuthor?.aboutMe}</p>
              </div>
            </div>
            <div className="inner-box2">
              <h3>Other Content By {unitBlog?.blogAuthor?.name}</h3>
              <Carousel responsive={responsive}>
                {otherBlogsByAuthor.map((value, key) => (
                  <div className="inner-carousel" key={key}>
                    <img src={value?.bannerPhoto} alt="" />
                    <p>{value?.title}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="other-blogs">
          <h1 className="other-blogs-title">
            Other blogs you may be intrested in
          </h1>
          <Carousel responsive={responsive}>
            {OtherBlogs.map((data) => (
              <div
                onClick={() => {
                  setUnitBlog(data);
                  console.log(data, "fa");
                }}
                key={data?.id}
                className="blog-cards">
                <BlogCard
                  postedBy={`Posted by ${data?.blogAuthor.name}`}
                  userImage={data?.blogAuthor.displayPhoto}
                  blogImage={data?.bannerPhoto}
                  date={moment(data?.createdAt).format("MMMM DD YYYY")}
                  blogTitle={data?.title}
                  blogDesc={data?.content}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default blogDetails;
