<template>
    <div id="order-manager">
        <div class="order-list">
            <el-table
                :data="eventList"
                border
                style="width: 100%">

                <el-table-column
                    prop="physicalId"
                    label="赛事编号"
                    width="100">
                </el-table-column>

                <el-table-column
                    prop="heldCountry"
                    label="举办国"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="heldLocation"
                    label="举办地"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="heldHome"
                    label="举办主场"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="maximumCapacity"
                    label="最大容纳观众/人"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="awayGround"
                    label="客场队"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="matchTime"
                    label="比赛时间"
                    width="180">
                </el-table-column>

                <el-table-column
                    prop="heldVenues"
                    label="举办场馆"
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
    import * as eventApi from '../../api/eventApi' 


    export default {
        data(){
            return{
                pagination:{
                    current: '',
                    totalPage: '',
                    size:'', 
                    total:''
                },
                eventList:[]
            }
        },
        methods: {
            listEvents(){
                eventApi.listEvents(this.pagination.currentPage).then(result => {
                //listUsers().then(result => {
                    console.log("result == > "+result.data);
                    if(result.code === eventApi.CODE_SUCCESS){
                        this.eventList = result.data.records;
                    }
                })
            }
        },
        
        mounted(){
            //加载第一页数据
            this.listEvents();
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
