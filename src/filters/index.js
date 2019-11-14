/*
 * filters
 */

// 专题PV显示方式
export const pvHandle = num => {
  var num = parseInt(num);
  if (num >= 0 && num <= 999) {
    return num;
  }
  if (num > 999 && num <= 9999) {
    return (num / 1000).toFixed(1) + "K";
  }
  if (num > 9999) {
    return (num / 10000).toFixed(1) + "W";
  }
};

// 专题标题副标题超出省略号
export const titleHandle = value => {
  var length = value.length;
  if (length > 20) {
    return value.substring(0, 20) + "...";
  } else {
    return value;
  }
};
