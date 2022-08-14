import http from './http';
export const baseUrl = "http://localhost:7001/hzh-order";

export const CODE_SUCCESS = 20000;
export const CODE_FAILED = 40000;

//获取订单列表
export const listOrders = () => {
    return http.requestGet(baseUrl + "/order/orderInfo/getAllOrderByPage?current=1&size=10&event=1");
};





