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
                        <el-option label="至尊会员" value="4"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item >
                    <el-select v-model="seach.userType" placeholder="用户类型">
                        <el-option label="平台管理员" value="check"></el-option>
                        <el-option label="系统管理员" value="sys"></el-option>
                        <el-option label="赛事管理员" value="events"></el-option>
                        <el-option label="场馆管理员" value="sportstypeman"></el-option>           
                        <el-option label="球队管理员" value="teams"></el-option>
                        <el-option label="游客/访客" value="visitor"></el-option>
                        <el-option label="会员" value="member"></el-option>
                        <el-option label="贵宾" value="vip"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="doSeache" icon="el-icon-search">查询</el-button>
                    <el-button type="danger" @click="doReSet" icon="el-icon-refresh">重置</el-button>
                    <el-button type="primary" size="medium" @click="toAddUserByAdmin"  icon="el-icon-circle-plus" >
                            新增    
                    </el-button>
                    <el-upload
                            :show-file-list="false"
                            :before-upload="beforeUpload"
                            :on-success="onSuccess"
                            :on-error="onError"
                            :disabled="importDisabled"
                            style="display: inline-flex;margin-right:13px; margin-left:13px;"
                            action="http://localhost:9001/hzh-user/admin/user/import" >
                        <el-button class="import-batton" size="medium" :disabled="importDisabled"  type="success" :icon="importDataIcon">
                            {{importDataText}}
                        </el-button>
                    </el-upload>

                    <el-button type="primary" size="medium" @click="toEmport"  icon="el-icon-upload2" >
                            导出    
                    </el-button>    

                </el-form-item>
            </el-form>
        </div>
        <div class="user-list">
            <el-table
                :data="userList"
                border
                style="width: 100%">

                <!-- 全选按钮 -->
                <!-- <el-table-column
                    type="selection"
                    width="45">
                </el-table-column> -->

                <el-table-column
                    prop="id"
                    label="ID"
                    width="80">
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
                    width="130">
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
                    label="会员等级"
                    width="120">
                        <template slot-scope="scope">
                            <span class="user-name" v-if="scope.row.level=='0'">大众会员</span>
                            <span class="user-name" v-if="scope.row.level=='1'">黄金会员</span>
                            <span class="user-name" v-if="scope.row.level=='2'">铂金会员</span>           
                            <span class="user-name" v-if="scope.row.level=='3'">钻石会员</span> 
                            <span class="user-name" v-if="scope.row.level=='4'">至尊会员</span>            
                        </template>
                </el-table-column>

                <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="150">
                </el-table-column>

                <el-table-column
                    prop="updateTime"
                    label="更新时间"
                    width="150">
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
                    <template slot-scope="scope">
                        <el-button type="primary" size="medium" icon="el-icon-key">
                            重置密码
                        </el-button>
                        <el-button type="danger" size="medium"  @click.native.prevent="disableUser(scope.row.id,scope.row.status)" icon="el-icon-warning">
                            禁用    
                        </el-button>
                        <el-button type="danger" size="medium" @click.native.prevent="updateUser(scope.row)" icon="el-icon-edit">
                            修改    
                        </el-button>

                        <el-button type="danger" size="medium" @click.native.prevent="deleteUser(scope.row.id)" icon="el-icon-delete">
                            删除    
                        </el-button>

                    </template>
                </el-table-column>

            </el-table>
        </div>

        <!-- 分页组件 -->
        <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>

    </div>
</template>
<script>
    import {listUsers,CODE_SUCCESS} from '../../api/api'
    import {getUserInfoByFilter} from '../../api/api'
    import * as api from '../../api/api' 
    import Pagination from '../../utils/Pagination'
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
                // 分页参数
                pageparm: {
                    currentPage: 1,
                    pageSize: 10,
                    total: 10
                },
                userList:[],
                importDataText: '导入数据',
                importDataIcon: 'el-icon-download',
                importDisabled: false
            }
        },
        // 注册组件
        components: {
            Pagination
        },
        methods: {
            // 分页插件事件
            callFather(parm) {
            this.formInline.page = parm.currentPage
            this.formInline.limit = parm.pageSize
            this.getdata(this.formInline)
            },
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
            //删除用户
            //deleteUser 0未删除  1删除
            deleteUser(id) {
                //console.log(id)
                api.delUserById(id).then(result => {
                    if(api.CODE_SUCCESS === result.code ){
                        this.$message.success(result.msg)
                        this.listUsers();
                    }else{
                        this.$message.success(result.msg)
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
                    this.listUsers()
            },
            disableUser(id,status){
                api.disableUser(id,status).then(result => {
                    if(result.code === api.CODE_SUCCESS){
                        //禁用成功
                         this.$message.success(result.msg);
                         listUsers();
                    }else{
                        this.$message.error(result.msg);
                         listUsers();
                    }
                })
            },
            listUsers(){
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
            },
            //新增方法addUserByAdmin
            toAddUserByAdmin() {
                //this.$message.success("开始新增")
                this.$router.push({
                    path: '/user/addAndUpdateUser'
                })
            },
            updateUser(){
                    //this.$message.success("开始修改")
                    this.$router.push({
                    path: '/user/addAndUpdateUser'
                })
            },
            //批量导入文件失败后回调
            onError(){
                this.importDataText = '导入数据';
                this.importDataIcon = 'el-icon-upload2';
                this.importDisabled = false;
                //调用刷新数据的方法
                this.listUsers();
                this.$message.error("导入失败！");
            },
            //导入文件成功后回调
            onSuccess(){
                // 成功后文本修改为原来的导入数据
                this.importDataText = '导入数据';
                // 图标修改
                this.importDataIcon = 'el-icon-upload2';
                // 将上传组件改为允许使用
                this.importDisabled = false;
                // 调用刷新数据的方法
                this.listUsers();
                // message 弹出消息
                if(window.msg === '导入成功'){
                    this.$message.success("导入成功");
                }else{
                    this.$message.error("数据已存在");
                }
            
            },
            beforeUpload() {
                //将文本修改为正在导入
                this.importDataText = '正在导入';
                //修改图标
                this.importDataIcon = 'el-icon-loading';
                // 将其上传组件暂时禁用
                this.importDisabled = true;
            },
            //导出文件
            toEmport(){
                api.ouPuttEcexl().then(result => {
                    console.log("1111111")
                    if(result.code === api.CODE_SUCCESS){
                        this.$message.success(result.msg)
                    }else{
                        this.$message.error(result.msg)
                    }
                })
            },
        },
        mounted(){
            //加载第一页数据
            this.listUsers();
        }
    }

</script>
<style>
    #user-manager{
        padding: 20px;
    }
    .el-input {
        width: 200px;
    }

    .el-button--medium {
        padding: 10px 20px;
        /* 按钮圆角 */
        border-radius: 10px;
    }

    .btn-upload {
        top: 70px;
        right: 40px;
        z-index: 100;
        box-shadow: 0 2px 12px 0 #67c23a;
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
