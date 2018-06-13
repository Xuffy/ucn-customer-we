<template>
  <div>
    <div class="hd" v-if="showHd"></div>
    <div class="hd active">{{ title }}</div>
    <el-row :gutter="10">
      <el-form label-width="300px" label-position="right" class="form" >
        <el-col :xs="gap" :sm="gap" :md="gap" :lg="gap" :xl="gap" v-for="a of listData" :key="'el-col-' + a.label">
          <el-form-item v-if="!edit" :label="a.label+'：'">
            <p class="textFilter">{{ textFilter(a) }}</p>
          </el-form-item>
          <div v-else>
            <!-- <el-form-item :label="validator(a.label)" v-if="a.type === 'input'" prop="value"> -->
            <el-form-item :label="a.label" v-if="a.type === 'input'" prop="value">
              <el-input placeholder="请输入内容" v-model="a.value" :disabled="a.disabled" />
            </el-form-item>

            <el-form-item :label="a.label+'：'" v-if="a.type === 'selector'" prop="value">
              <el-select v-model="a.value" placeholder="请输入内容" :clearable="true" :disabled="a.disabled">
                <el-option :label="item.name" :value="Number(item.code) || item.code" v-for="item of selectArr[a.key]" :key="'el-option-' + item.code"
                  v-if="selectArr[a.key]" />
              </el-select>
            </el-form-item>

            <el-form-item :label="a.label+'：'" v-if="a.type === 'date'" prop="value">
              <el-date-picker v-model="a.value" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions" />
            </el-form-item>
          </div>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      showHd: {
        type: Boolean,
        default: true
      },
      edit: {
        type: Boolean,
        default: false
      },
      gap: {
        type: Number,
        default: 8
      },
      listData: {
        type: Array,
        default () {
          return []
        }
      },
      selectArr: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        paymentList: [],
        pickerOptions: {
          // disabledDate(time) {
          //   return time.getTime() > Date.now();
          // },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      }
    },
    methods: {
      // validator(val){
      //   return this.component('span', {
          
      //   })
      // },
      textFilter(a) {
        if (a.type === 'input' || a.type === 'text') return a.value
        if (a.type === 'date') return a.value ? this.$dateFormat(a.value, 'yyyy-mm-dd') : null
        if (a.type === 'selector' && this.selectArr[a.key]) {
          let obj = this.selectArr[a.key].find(item => item.code == a.value)
          return obj ? obj.name : null
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .hd-top {
    font-size: 18px;
    color: #666;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    padding: 0 15px;
  }

  .hd {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    padding: 0 15px;
    font-weight: bold;
    &.active {
      border: none;
    }
  }
  .form {
    /deep/.el-form-item p{
      min-width: 150px;
    }
    /deep/.el-input,
    /deep/.el-input__inner {
      width: 100%;
      min-width: 150px;
    }
    /deep/.el-select{
      width: 100%;
      min-width: 150px;
    }
  }

</style>
