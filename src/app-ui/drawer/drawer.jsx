import React, { useState, useEffect } from "react";
import { getTitleById, useWindowSize } from "../../utils/helper";
import { AiOutlineMore as Arrow } from "react-icons/ai";
import { HiChevronLeft } from "react-icons/hi";
import { Spin } from "antd";

const Drawer = ({
  children,
  addLoader = false,
  showDrawer,
  handleDrawer,
  classname,
}) => {
  const { width, height } = useWindowSize();

  return (
    <>
      {width < 1025 && (
        <>
          <button className="drawer-show-btn" onClick={handleDrawer}>
            <Arrow />
          </button>
        </>
      )}
      <div
        className={`drawer-wrapper ${
          showDrawer && "show-drawer"
        } ${classname}`}>
        {addLoader && (
          <div className="is-loader">
            <Spin />
          </div>
        )}
        {width < 1025 && (
          <>
            <button className="drawer-close-btn" onClick={handleDrawer}>
              <HiChevronLeft />
            </button>
          </>
        )}
        <div className="drawer-items">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
