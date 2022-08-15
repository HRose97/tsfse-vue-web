import http from './http';
export const baseUrl = "http://localhost:6001/hzh-event";

export const CODE_SUCCESS = 20000;
export const CODE_FAILED = 40000;

//获取订单列表
export const listEvents = () => {
    return http.requestGet(baseUrl + "/event/eventInfo/getAllEvent?current=1&size=10");
};





