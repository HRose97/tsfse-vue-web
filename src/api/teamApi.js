import http from './http';
export const baseUrl = "http://localhost:8001/hzh-team";

export const CODE_SUCCESS = 20000;
export const CODE_FAILED = 40000;

//获取订单列表
export const listTeams = () => {
    return http.requestGet(baseUrl + "/team/bastball/getAllbastballByPage?current=1&size=10");
};





