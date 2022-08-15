<template>
    <div id="order-manager">
        <div class="order-list">
            <el-table
                :data="orderList"
                border
                style="width: 100%">

                <el-table-column
                    prop="orderId"
                    label="订单ID"
                    width="280">
                </el-table-column>

                <el-table-column
                    prop="memberUsername"
                    label="用户名"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="totalAmount"
                    label="订单总额"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="payAmount"
                    label="应付总额"
                    width="180">
                </el-table-column>

                <el-table-column
                    label="支付方式"
                    width="180">
                        <template slot-scope="scope">
                            <span class="order-name" v-if="scope.row.payType=='1'">支付宝</span>
                            <span class="order-name" v-if="scope.row.payType=='2'">微信</span>           
                            <span class="order-name" v-if="scope.row.payType=='3'">银联</span>            
                        </template>
                </el-table-column>

                <el-table-column
                    label="订单状态"
                    width="180">
                        <template slot-scope="scope">
                            <span class="order-name" v-if="scope.row.status=='0'">待付款</span>
                            <span class="order-name" v-if="scope.row.status=='1'">待发货</span>
                            <span class="order-name" v-if="scope.row.status=='2'">已发货</span>
                            <span class="order-name" v-if="scope.row.status=='3'">已完成</span>
                            <span class="order-name" v-if="scope.row.status=='4'">已关闭</span>   
                            <span class="order-name" v-if="scope.row.status=='5'">无效订单</span>                                                                                
                        </template>                    
                </el-table-column>

                <el-table-column
                    label="是否需要发票"
                    width="180">
                        <template slot-scope="scope">
                            <span class="order-name" v-if="scope.row.billType=='0'">不开发票</span>
                            <span class="order-name" v-if="scope.row.billType=='1'">纸质发票</span>
                            <span class="order-name" v-if="scope.row.billType=='2'">电子发票</span>                            
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
    
    </div>
</template>
<script>
    import * as orderApi from '../../api/orderApi' 


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
            listOrder(){
                orderApi.listOrders(this.pagination.currentPage).then(result => {
                //listUsers().then(result => {
                    console.log("result == > "+result.data);
                    if(result.code === orderApi.CODE_SUCCESS){
                        this.orderList = result.data.records;
                    }
                })
            }
        },
        
        mounted(){
            //加载第一页数据
            this.listOrder();
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
