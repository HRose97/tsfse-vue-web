<template>
    <div id="user-manager">
        <div class="user-action">
            <el-form :inline="true" class="user-action-from" size="medium">
                <el-form-item >
                    <el-input v-model="seach.userName" placeholder="用户名"></el-input>
                </el-form-item>

                <el-form-item >
                    <el-input v-model="seach.email" placeholder="邮箱地址"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-input v-model="seach.phone" placeholder="手机号"></el-input>
                </el-form-item>


                <el-form-item >
                    <el-select v-model="seach.status" placeholder="禁用/正常">
                    <el-option label="禁用" value="1"></el-option>
                    <el-option label="正常" value="0"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item >
                    <el-select v-model="seach.level" placeholder="会员等级">
                    <el-option label="大众会员" value="0"></el-option>
                    <el-option label="黄金会员" value="1"></el-option>
                    <el-option label="铂金会员" value="2"></el-option>
                    <el-option label="钻石会员" value="3"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item >
                    <el-select v-model="seach.userType" placeholder="用户类型">
                    <el-option label="平台管理员" value="check"></el-option>
                    <el-option label="系统管理员" value="sys"></el-option>
                    <el-option label="赛事管理员" value="events"></el-option>
                    <el-option label="赛事管理员" value="sportstypeman"></el-option>           
                    <el-option label="球队管理员" value="teams"></el-option>
                    <el-option label="游客/访客" value="visitor"></el-option>
                    <el-option label="会员" value="member"></el-option>
                    <el-option label="贵宾" value="vip"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="doSeache">查询</el-button>
                    <el-button type="danger" @click="doReSet">重置</el-button>
                </el-form-item>
                </el-form>
        </div>
        <div class="user-list">
            <el-table
                :data="userList"
                border
                style="width: 100%">

                <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
                </el-table-column>

                <el-table-column
                    label="用户"
                    width="180">
                        <template slot-scope="scope">
                            <!-- 不展示头像
                            <img :src="scope.row.avater" class="user-avater"> -->
                            <span class="user-name">
                                {{scope.row.userName}}
                            </span>
                        </template>
                </el-table-column>

                <el-table-column
                    prop="email"
                    label="邮箱地址"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="phonenumber"
                    label="电话"
                    width="180">
                </el-table-column>

                <el-table-column
                    label="性别"
                    width="100">
                        <template slot-scope="scope">
                            <span class="user-name" v-if="scope.row.sex=='0'">男性</span>
                            <span class="user-name" v-if="scope.row.sex=='1'">女性</span>
                            <span class="user-name" v-if="scope.row.sex=='2'">未知</span>                            
                        </template>
                </el-table-column>

                <el-table-column
                    label="用户类型"
                    width="100">
                        <template slot-scope="scope">
                            <span class="user-name" v-if="scope.row.userType=='check'">平台管理员</span>
                            <span class="user-name" v-if="scope.row.userType=='sys'">系统管理员</span>
                            <span class="user-name" v-if="scope.row.userType=='events'">赛事管理员</span>           
                            <span class="user-name" v-if="scope.row.userType=='sportstypeman'">场馆管理员</span>   
                            <span class="user-name" v-if="scope.row.userType=='teams'">球队管理员</span>
                            <span class="user-name" v-if="scope.row.userType=='visitor'">游客/访客</span>           
                            <span class="user-name" v-if="scope.row.userType=='member'">会员</span>         
                            <span class="user-name" v-if="scope.row.userType=='vip'">vip</span>         
                        </template>
                </el-table-column>

                <el-table-column
                    label="会员等级"
                    width="100">
                        <template slot-scope="scope">
                            <span class="user-name" v-if="scope.row.level=='0'">大众会员</span>
                            <span class="user-name" v-if="scope.row.level=='1'">黄金会员</span>
                            <span class="user-name" v-if="scope.row.level=='2'">铂金会员</span>           
                            <span class="user-name" v-if="scope.row.level=='3'">钻石会员</span>            
                        </template>
                </el-table-column>

                <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="updateTime"
                    label="更新时间"
                    width="180">
                </el-table-column>

                <el-table-column
                    label="状态"
                    width="100">
                        <template slot-scope="scope">
                            <el-tag type="success" v-if="scope.row.status=='0'">正常</el-tag>
                            <el-tag type="danger" v-if="scope.row.status=='1'">停用</el-tag>                        
                        </template>
                </el-table-column>

                <el-table-column
                    label="是否注销"
                    width="100">
                        <template slot-scope="scope">
                            <el-tag type="success" v-if="scope.row.delFlag=='0'">未注销</el-tag>
                            <el-tag type="danger" v-if="scope.row.delFlag=='1'">已注销</el-tag>                        
                        </template>
                </el-table-column>


                <el-table-column
                    label="编辑">
                    <template>
                        <el-button type="primary" size="medium">
                            重置密码
                        </el-button>
                        <el-button type="danger" size="medium">
                            禁用
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <div class="pager-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="pagination.total"
                :current-page="pagination.current"
                :page-count="pagination.totalPage">
                </el-pagination>
        </div>
    </div>
</template>
<script>
    import {listUsers,CODE_SUCCESS} from '../../api/api'
    import {getUserInfoByFilter} from '../../api/api'

    export default {
        data(){
            return{
                seach:{
                    phone:'',
                    email:'',
                    userName:'',
                    userType:'',
                    status:'',
                    level:''
                },
                pagination:{
                    current: '',
                    totalPage: '',
                    size:'', 
                    total:''
                },
                userList:[]
            }
        },
        methods: {
            doSeache(){
                getUserInfoByFilter(
                        this.seach.phone,
                        this.seach.email,
                        this.seach.userName,
                        this.seach.userType,
                        this.seach.status,
                        this.seach.level).then(result => {
                    console.log("getUserInfoByFilter === > "+result);
                    if(result.code === CODE_SUCCESS){
                        this.userList = result.data.records
                    }
                })
            },
            doReSet(){
                    this.seach.phone = '',
                    this.seach.email = '',
                    this.seach.userName = '',
                    this.seach.userType = '',
                    this.seach.status = '',
                    this.seach.level = '',
                    this.listUser()
            },
            listUser(){
                listUsers(this.pagination.currentPage).then(result => {
                //listUsers().then(result => {
                    console.log("result == > "+result.data);
                    if(result.code === CODE_SUCCESS){
                        this.userList = result.data.records;
                        this.pagination.total = result.data.total;
                        this.pagination.totalPage = result.data.pages;                        
                        this.pagination.current = result.data.current;
                        this.pagination.size = result.data.size;
                    }
                })
            }
        },
        mounted(){
            //加载第一页数据
            this.listUser();
        }
    }

</script>
<style>
    #user-manager{
        padding: 20px
    }
   
    /*    //头像相关设置
    .user-avater {
        width: 30px;
        vertical-align: center;
        padding: 10px;
        height: 30px;
        border-radius: 50%;
    } */

</style>
