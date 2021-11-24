import { useEffect, useState } from "react";

import moment from "moment";

export const uuid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  return s4() + s4() + "-" + s4();
};
export const findTitleById = (data, id) => {
  const found = data?.find((d) => d.id === id);
  return found?.title || null;
};

export const toCommas = (value) => {
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const MappedElement = ({ data, renderElement, count }) => {
  if (data && data.length) {
    return data.map((obj, index, array) => {
      if (count) {
        return index <= count ? renderElement(obj, index, array) : null;
      } else {
        return renderElement(obj, index, array);
      }
    });
  }
  return null;
};

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const navigateToHome = () => {
  window.location = process.env.REACT_APP_HOMEPAGE_URL;
};

export const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

export const isRejectedAction = (action) => {
  return action.type.endsWith("/rejected");
};

export const getConsistentData = (response) => {
  if (response && response.data?.items) {
    return response.data.items;
  }
  return response.data;
};

export const readableYearDate = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).format("YYYY");
};

export const readableShortDate = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).format("MMMM YYYY");
};

export const readableDate = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).format("DD MMM YYYY");
};

export const dayTimeLeftFromNowTrue = (d) => {
  if (!d) {
    return null;
  }
  return moment(d).fromNow(true);
};

export const setTimeToZero = (d) => {
  if (!d) {
    return null;
  }
  return moment(d)
    .utcOffset(0)
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toISOString();
};

export const checkDisabledDate = (d) => {
  if (!d) {
    return false;
  }
  const days = moment().diff(d);
  if (days > 0) {
    return true;
  }
  return false;
};

export const getTitleById = (data, id) => {
  if (!id) {
    return null;
  }
  const d = data?.find((d) => d.id === id);
  return d?.title;
};
export const findCurrencyCodeById = (data, id) => {
  const found = data?.find((d) => d.id === id);
  return found?.code || null;
};

export const getLat = (location) => {
  if (!location) {
    return 25.3430485;
  }
  return location[0];
};

export const getLng = (location) => {
  if (!location) {
    return 50.6572839;
  }
  return location[1];
};
export const jsonToQueryString = (data) => {
  if (!data) {
    return "";
  }
  const params = Object.fromEntries(
    Object.entries(data).filter(([_, v]) => v != null)
  );
  return "?" + new URLSearchParams(params).toString();
};

export const DobChecker = (current) => {
  // let customDate = '2018-11-25'
  // console.log(current)
  // return current && current > moment(customDate, "YYY-MM-DD")
  var myCurrentDate = new Date();
  var myPastDate = new Date(myCurrentDate);
  return myPastDate.setDate(myPastDate.getDate() - 8);
};

export const createMarkup = (mutahhir) => {
  return { __html: mutahhir };
};
