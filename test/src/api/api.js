/*
 * @Author: Againss
 * @Date: 2019-01-23 16:25:50
 * @Last Modified by: Againss
 * @Last Modified time: 2019-01-23 16:37:15
 */
import config from "../config/conf";
const hostUrl = config.hostUrl;

export default {
  create(type, id, obj) {
    return this.baseApi(...arguments);
  },
  save(type, id, obj) {
    return this.baseApi(...arguments);
  },
  get(type, id, obj) {
    return this.baseApi(...arguments);
  },
  update(type, id, obj) {
    return this.baseApi(...arguments);
  },
  delete(type, id, obj) {
    return this.baseApi(...arguments);
  },
  search(type, id, obj) {
    return this.baseApi(...arguments);
  },
  baseApi(type, id, obj) {
    const oLength = arguments.length,
      param = (obj) => {
        let url = "";

        for (const key in obj) {
          url += `${key}=${obj[key]}&`
        }

        return url.substr(0, url.length - 1);
      };

    switch (oLength) {
      case 1:
        {
          return `${hostUrl}/api/${type}`;
        };
      case 2:
        {
          if (typeof arguments[1] === "object") {
            return `${hostUrl}/api/${type}?${param(arguments[1])}`;
          } else {
            if (!/^[0-9]*$/.test(arguments[1])) {
              console.log("id只能包含数字");
              break;
            }

            return `${hostUrl}/api/${type}/${+arguments[1]}`;
          }
        };
      case 3:
        {
          return `${hostUrl}/api/${type}/${id}?${param(obj)}`;
        };
      default:
        {
          console.log("参数错误");
        }
    }
  }
}