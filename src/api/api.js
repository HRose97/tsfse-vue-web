import http from './http';
export const baseUrl = "http://localhost:9001/hzh-user";

export const CODE_SUCCESS = 20000;
export const CODE_FAILED = 40000;



//解析token
export const checkToken = () => {
    return http.requestGet(baseUrl + '/uc/account/token');
};

//获取用户列表
export const listUsers = () => {
    return http.requestGet(baseUrl + "/admin/user/getAllUserByPage?current=1&size=10");
};


//获取用户列表
export const getUserInfoByFilter = (phone,email,userName,userType,status,level) => {
    return http.requestGet(baseUrl + "/admin/user/getUserInfoByFilter?current=1&size=10"
    + "&phone=" + phone 
    + "&email=" + email   
    + "&userName=" + userName 
    + "&userType=" + userType   
    + "&level=" + level    
    + "&status=" + status    
    );
};



