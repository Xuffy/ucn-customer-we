<template>
  <div class="QCOrderDetail">
    <el-form ref="ruleform" :model="fromArg" label-width="190px">
      <el-row :gutter="10">
        <el-col
          v-for="(item, index) in $db.warehouse.qcDetailBasicInfo"
          :key="index"
          :xs="item.xs || 8"
          :sm="item.sm || 8"
          :md="item.md || 8"
          :lg="item.lg || 8"
          v-if="!item._inquiryHide && !item._hide"
        >
          <el-form-item
            :label="item.label"
            :prop="item.key"
            :rules="item.rules"
            :label-width="item.width || '200px'"
          >
            <el-input
              v-model="basicInfo[item.key]"
              :size="item.size || 'mini'"
              v-if="item.type === 'String' && !item._hide"
            />
            <el-input-number v-model="basicInfo[item.key]"  :min="0" :max="100" v-if="item.type === 'phone'" controls-position="right" size="mini" :controls="false" style="width:100%;"/>
            <el-select
              v-model="basicInfo[item.key]"
              value-key="id"
              :size="item.size || 'mini'"
              v-if="item.type === 'Select'"
              style="width:100%;"
            >
              <el-option
                v-for="item in MdOptions"
                :key="item.id"
                :id="item.id"
              />
            </el-select>
            <el-input
              type="textarea"
              v-model="basicInfo[item.key]"
              :rows="item.rows || 4"
              :size="item.size || 'mini'"
              :placeholder="item.placeholder"
              v-if="item.type === 'textarea'"
              resize="none"
            />
            <v-up-load v-if="item.type === 'attachment' || item.type === 'upData'"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <h5 class="solid">付款信息</h5>
    <el-table
      :data="tableData6"
      border
      show-summary
      style="width: 100%"
    >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
      <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
      <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
    </el-table>
    <h5 class="solid">产品信息</h5>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="验货结果" name="first">
        <el-button>接受</el-button>
        <v-table
          :data.sync="tabData"
          :buttons="[{'label': '详情', type: 'detail'}]"
          @action="producInfoAction"
          @change-checked="changeChecked"
          :totalRow="true"
        />
      </el-tab-pane>
      <el-tab-pane label="返工申请" name="second">
        <el-button>接受返工</el-button>
        <v-table
          :data.sync="tabData"
          :buttons="[{'label': '详情', type: 'detail'}]"
          @action="producInfoAction"
          @change-checked="changeChecked"
          :totalRow="true"
        />
      </el-tab-pane>
      <el-tab-pane label="退货申请" name="third">
        <el-button>接受退货</el-button>
        <v-table
          :data.sync="tabData"
          :buttons="[{'label': '详情', type: 'detail'}]"
          @action="producInfoAction"
          @change-checked="changeChecked"
          :totalRow="true"
        />
      </el-tab-pane>
    </el-tabs>
    <h5 class="solid">总结</h5>
    <el-form ref="ruleform" :model="fromArg">
      <el-row :gutter="12">
        <el-col
          v-for="(item, index) in $db.warehouse.summary"
          :key="index"
          :xs="item.xs || 8"
          :sm="item.sm || 8"
          :md="item.md || 8"
          :lg="item.lg || 8"
          v-if="!item._inquiryHide && !item._hide"
        >
          <el-form-item
            :label="item.label"
            :prop="item.key"
            :rules="item.rules"
            :label-width="item.width || '280px'"
          >
            <el-input
              v-model="fromArg[item.key]"
              :size="item.size || 'mini'"
              v-if="!item._hide"
              :disabled="item.disabled"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="footer">
        <hr>
        <span slot="footer">
            <el-button type="primary" @click="postQcSave">{{$i._baseText.ok}}</el-button>
            <el-button>{{$i._baseText.cancel}}</el-button>
        </span>
      </div>
    </el-form>
  </div>
</template>
<script>
  import { Upload, VTable } from '@/components/index';
  export default {
    name: 'QCOrderDetail',
    data() {
      return {
        basicInfo: {},
        tabData: [],
        activeName2: 'first',
        tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        id:1,
        MdOptions:[],
        StatusOptions:[],
        TypeOptions:[],
        CurrencyOptions:[],
        type:''
      }
    },
    computed: {
      fromArg() {
        let json = {};
        _.mapObject(this.$db.warehouse.qcDetailBasicInfo, (val, k) => {
          json[k] = '';
        });
        return json;
      }
    },
    components: {
      'v-up-load': Upload,
      'v-table': VTable
    },
    created() {
      this.getDetail();
    },
    methods: {
      //获取详细信息
      getDetail() {
        //this.$route.query.id
        this.$ajax.get(`${this.$apis.get_qc_getById}?id=${this.id}`)
          .then(res => {
            this.basicInfo = res;
            console.log(res)
          })
        console.log(this.basicInfo)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelectionChange() {

      },
      producInfoAction() {

      },
      changeChecked() {

      },
      postQcSave(){
        //提交修改
        const params = {
          qcDate:this.basicInfo.QCDate,
          qcMethodDictCode:this.basicInfo.QCStatus,
          surveyor:this.basicInfo.surveyor,
          serviceFee:this.basicInfo.serviceFee,
        }
        // this.$ajax.post(this.$apis.get_qcOrderData,this.post_qc_result_save).then(res=>{
        //
        //
        // }).catch(err=>{
        //   console.log(err)
        // });
      },
      postPaymentList(){
        //获取付款信息
        console.log(this.basicInfo)
        console.log(this.basicInfo.QCOrderNo,this.basicInfo.QCType)
        this.$ajax.post(this.$apis.post_payment_list,{
          orderNo:11111111111,
          orderType:1
        }).then(res=>{
          console.log(res)

        }).catch(err=>{
          console.log(err)
        });
      },
      postPaymentAccept(){
        //确认付款
        this.$ajax.post(this.$apis.post_payment_accept,{
          id:1
        }).then(res=>{
          console.log(res)

        }).catch(err=>{
          console.log(err)
        });
      },
      getUesrLList(){
        //获取当前登录用户所在企业下所有用户信息
        this.$ajax.post(this.$apis.get_user_list).then(res=>{
          console.log(res)

        }).catch(err=>{
          console.log(err)
        });
      },
      getCodePart(){
        //获取元数据 下拉框
        this.$ajax.post(this.$apis.POST_CODE_PART,['QC_TYPE','QC_MD','QC_STATUS']).then(res=>{
          _.map(res, function(num){
            if (num.code === 'QC_MD'){   //验货方式
                this.MdOptions = res.codes
            }else if (num.code === 'QC_STATUS'){   //验货结果
                this.StatusOptions = res.codes
            }else if (num.code === 'QC_TYPE'){
              console.log(res.codes)
              console.log(res)
              this.TypeOptions = res.codes   //验货类型
              return this.TypeOptions
              console.log(this.TypeOptions)

            }
          })

        }).catch(err=>{
          console.log(err)
        });
      },
      getCurrency(){
        //币种
        this.$ajax.get(this.$apis.get_currency_all).then(res=>{
          this.CurrencyOptions = res
          console.log(this.CurrencyOptions)

        }).catch(err=>{
          console.log(err)
        });
      }
    },
    created(){
      // this.getUesrLList()
      this.getCodePart()
      // this.getCurrency()
      // this.getDetail()
      // this.postPaymentList()
      console.log(this.TypeOptions)
    }
  }
</script>
<style scoped>
  .QCOrderDetail .el-form {
    padding: 10px;
  }
  .QCOrderDetail .el-form-item >>> .el-form-item__label {
    display:flex;
    justify-content:flex-end;
    text-align: left;
  }
</style>
<style scoped lang="less">
  .QCOrderDetail h5 {
    font-size:15px;
    font-weight: bold;
    color:#666;
    padding:10px 0;
    margin: 5px 0;
  &.solid {
     border-bottom:1px dotted #ccc;
   }
  }
  .footer{
    text-align: center;
    padding-top: 20px;
  }
</style>

