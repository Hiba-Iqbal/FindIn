import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./blog.scss";
import Drawer from "../../app-ui/drawer/drawer";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "../../shared-ui/blogCard/blogCard";
import {
  selectAuthorBLogs,
  selectBlogList,
  selectOtherBlogs,
  selectListLoading,
} from "./slice";
import { getBlogList, getAuthorBlogs, getOtherBlogs } from "./thunk";
import moment from "moment";
import BlogDetails from "./blogDetails";
import { Spin } from "antd";

const Blog = () => {
  const dispatch = useAppDispatch();
  const allBlogs = useAppSelector(selectBlogList);
  const otherBlogsByAuthor = useAppSelector(selectAuthorBLogs);
  const OtherBlogs = useAppSelector(selectOtherBlogs);
  const isBlogLoading = useAppSelector(selectListLoading);
  const [unitBlog, setUnitBlog] = useState({});
  const [authorId, setAuthorId] = useState(null);
  const [handleDrawer, setDrawer] = useState(false);

  let handleDrawerCollapse = () => {
    setDrawer(!handleDrawer);
  };

  useEffect(() => {
    dispatch(getBlogList());
  }, []);
  useEffect(() => {
    if (Object.keys(unitBlog).length) {
      setAuthorId(unitBlog?.blogAuthor?.id);
    }
  }, [unitBlog]);

  useEffect(() => {
    if (authorId) {
      dispatch(getAuthorBlogs(authorId));
      dispatch(getOtherBlogs(authorId));
    }
  }, [authorId]);

  useEffect(() => {
    setUnitBlog(allBlogs.length && allBlogs[0]);
  }, [allBlogs]);

  return (
    <>
      {isBlogLoading && (
        <div className="isLoader">
          <Spin size="large" />
        </div>
      )}
      <div className="blog-wrapper">
        <div className="blog-wrapper-items">
          <Drawer
            addLoader={isBlogLoading}
            showDrawer={handleDrawer}
            handleDrawer={handleDrawerCollapse}>
            {allBlogs.map((blog) => (
              <div
                className={`maped-blogs ${
                  blog?.id === unitBlog?.id && "active-blogs"
                }`}>
                <BlogCard
                  postedBy={`Posted by ${" "} ${blog?.blogAuthor.name}`}
                  userImage={blog?.blogAuthor.displayPhoto}
                  blogImage={blog?.bannerPhoto}
                  date={moment(blog?.createdAt).format(`MMMM DD YYYY`)}
                  blogTitle={blog?.title}
                  blogDesc={blog?.content}
                  key={blog?.id}
                  onClick={() => {
                    setUnitBlog(blog);
                    setDrawer(false);
                  }}
                />
              </div>
            ))}
          </Drawer>
          <BlogDetails
            setUnitBlog={setUnitBlog}
            OtherBlogs={OtherBlogs}
            otherBlogsByAuthor={otherBlogsByAuthor}
            unitBlog={unitBlog}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
