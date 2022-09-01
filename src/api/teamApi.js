import http from './http';
export const baseUrl = "http://localhost:8001/hzh-team";

export const CODE_SUCCESS = 20000;
export const CODE_FAILED = 40000;

//获取篮球队伍列表
export const BaskstBalllistTeams = () => {
    return http.requestGet(baseUrl + "/team/bastball/getAllbastballByPage?current=1&size=10");
};

//获取足球队伍列表
export const FootBalllistTeams = () => {
    return http.requestGet(baseUrl + "/team/football/getAllbastballByPage?current=1&size=10");
};





