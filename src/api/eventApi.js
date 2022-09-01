import http from './http';
export const baseUrl = "http://localhost:6001/hzh-event";

export const CODE_SUCCESS = 20000;
export const CODE_FAILED = 40000;

//获取订单列表
export const listEvents = () => {
    return http.requestGet(baseUrl + "/event/eventInfo/getAllEvent?current=1&size=10");
};


//中国城市获取
export const chinaCityGetAll = () => {
    return http.requestGet(baseUrl + "/common/chinacity/getAllChinacity?current=1&size=10");
};

//全球城市获取
export const getAllGlobalLocation = () => {
    return http.requestGet(baseUrl + "/common/globalLocation/getAllGlobalLocation?current=1&size=10");
};




