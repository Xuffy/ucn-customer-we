<template>
  <section>
    <Poptip placement="bottom">
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
    </Poptip>
  </section>
</template>

<script>

  export default {
    name: 'VFilterValue',
    data() {
      return {
        indeterminate: true,
        checkAll: false,
        checkAllGroup: [],
        sortType: ''
      }
    },
    watch: {},
    created() {
    },
    methods: {
      handleCheckAll() {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange(data) {
        if (data.length === 3) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-box {
    padding: 10px;
    max-height: 300px;
  }

  .checkbox-box {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .sort {
    /*font-size: 14px;*/
    cursor: pointer;
    text-align: center;
    margin-bottom: 5px;
  }

  .sort.active {
    color: #2d8cf0;
  }

  .sort:first-child {
    border-right: solid 1px #CCCCCC;
  }
</style>
