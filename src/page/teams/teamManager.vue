<template>
    <div id="order-manager">
        <div class="order-list">
            <el-table
                :data="orderList"
                border
                style="width: 100%">

                <el-table-column
                    prop="teamId"
                    label="球队编号"
                    width="100">
                </el-table-column>

                <el-table-column
                    prop="teamName"
                    label="球队名称"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="teamAdministrator"
                    label="球队管理员"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="teamType"
                    label="球队类型"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="teamCountry"
                    label="球队所属国"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="teamDate"
                    label="球队成立日期"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="teamLocal"
                    label="球队所在地"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="teamLocal"
                    label="球队所在地"
                    width="180">
                </el-table-column>

                
                <el-table-column
                    prop="teamLogo"
                    label="球队LOGO"
                    width="180">
                </el-table-column>

                <!-- <el-table-column
                    label="是否需要发票"
                    width="180">
                        <template slot-scope="scope">
                            <span class="order-name" v-if="scope.row.billType=='0'">不开发票</span>
                            <span class="order-name" v-if="scope.row.billType=='1'">纸质发票</span>
                            <span class="order-name" v-if="scope.row.billType=='2'">电子发票</span>                            
                        </template>
                </el-table-column> -->

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
    
    </div>
</template>
<script>
    import * as teamApi from '../../api/teamApi' 


    export default {
        data(){
            return{
                pagination:{
                    current: '',
                    totalPage: '',
                    size:'', 
                    total:''
                },
                orderList:[]
            }
        },
        methods: {
            listTeams(){
                teamApi.listTeams(this.pagination.currentPage).then(result => {
                //listUsers().then(result => {
                    console.log("result == > "+result.data);
                    if(result.code === teamApi.CODE_SUCCESS){
                        this.orderList = result.data.records;
                    }
                })
            }
        },
        
        mounted(){
            //加载第一页数据
            this.listTeams();
        }
    }

</script>
<style>
    #order-manager{
        padding: 20px
    }
   
    /*    //头像相关设置
    .order-avater {
        width: 30px;
        vertical-align: center;
        padding: 10px;
        height: 30px;
        border-radius: 50%;
    } */

</style>
