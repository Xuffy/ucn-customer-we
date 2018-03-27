<template>
  <section class="filter-value">

    <el-popover
      popper-class="filter-value-popper"
      placement="bottom"
      trigger="click">
      <i class="el-icon-circle-plus-outline" slot="reference">列名</i>

      <el-checkbox-group v-model="sortType" size="mini" @change="changeSortType">
        <el-checkbox-button label="1">升序</el-checkbox-button>
        <el-checkbox-button label="2">降序</el-checkbox-button>
      </el-checkbox-group>

      <el-input placeholder="请输入内容" size="mini"></el-input>

      <div class="content-box">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <br/>

        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox class="checkbox-item" v-for="city in cities" :label="city" :key="city"
                       style="">{{city}}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </el-popover>
    <!--<Poptip placement="bottom" style="width: 100%">
      <p class="title">name &nbsp;
        <Icon type="navicon-round" style="vertical-align: middle;font-size: 14px"></Icon>
      </p>
      <div slot="content" class="content-box">
        {{sortType}}
        <Row>
          <Col span="12" class="sort" :class="{active:sortType === 'asc'}"
               @click="sortType = 'asc'">
          <Icon type="arrow-up-c"></Icon>
          升序
          </Col>
          <Col span="12" class="sort" :class="{active:sortType === 'esc'}"
               @click="sortType = 'esc'">
          <Icon type="arrow-down-c"></Icon>
          升序
          </Col>
        </Row>
        <Input placeholder="Please select" clearable></Input>
        <div class="checkbox-box">
          <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">all(70/80)
          </Checkbox>
        </div>
        <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
          <Checkbox label="香蕉"></Checkbox>
          <br>
          <Checkbox label="苹果"></Checkbox>
          <br>
          <Checkbox label="西瓜"></Checkbox>
          <br>
        </CheckboxGroup>
      </div>
    </Poptip>-->
  </section>
</template>

<script>

  export default {
    name: 'VFilterValue',
    props: {},
    data() {
      return {
        sortType: [],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: ['上海', '北京', '广州', '深圳'],
        isIndeterminate: true
      }
    },
    watch: {},
    created() {
    },
    methods: {
      changeSortType(val) {
        if (val.length > 1) {
          val.shift();
        }
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checkbox-item {
    display: block;
    margin-left: 0;
    margin-top: 5px;
  }

  .content-box {
    margin-top: 10px;
  }
</style>

<style>

  .filter-value-popper .el-checkbox__label {
    font-size: 12px;

  }

  .filter-value-popper .el-checkbox-button__inner {
    border: none;
    border-color: inherit!important;
    border-left: none !important;
  }

  .filter-value-popper .el-checkbox-button.is-checked .el-checkbox-button__inner {
    background-color: inherit;
    color: #409EFF;
  }
  .filter-value-popper .el-checkbox-button, .el-checkbox-button__inner{
    width: 50%;
  }
</style>
