<template>
    <div id="user-manager">
        <div class="user-action">
            
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
                    prop="userDescription"
                    label="用户类型"
                    width="180">
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
        <div class="user-pagination">
            
        </div>
    </div>
</template>
<script>
    import {listUsers,CODE_SUCCESS} from '../../api/api'

    export default {
        data(){
            return{
                pagination:{
                    current: 1,
                    totalPage: 0,
                    size: 10
                },
                userList:[]
            }
        },
        methods: {
            listUser(){
                listUsers(this.pagination.currentPage).then(result => {
                    console.log(result);
                    if(result.code === CODE_SUCCESS){
                        this.userList = result.data.records
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
   
    /*    //头像相关设置
    .user-avater {
        width: 30px;
        vertical-align: center;
        padding: 10px;
        height: 30px;
        border-radius: 50%;
    } */

</style>
