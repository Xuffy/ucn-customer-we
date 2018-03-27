<template>
  <div class="ucn-table">
    <Row>
      <Col span="16">12</Col>
      <Col span="8" style="text-align: right;cursor: pointer">
      <v-filter-colum></v-filter-colum>
      </Col>
    </Row>
    <Table :columns="columns6" :data="data5" size="small">
      <!--<div slot="footer">123</div>-->
    </Table>

    <!--<CheckboxGroup>
      <table style="width: 100%">
        <tr>
          <th>
            <v-filter-value></v-filter-value>
          </th>
          <th>132</th>
          <th>132</th>
          <th>132</th>
        </tr>
        <tr>
          <td>132</td>
          <td>132</td>
          <td>132</td>
          <td>132</td>
        </tr>
        <tr>
          <td>132</td>
          <td>132</td>
          <td>132</td>
          <td>132</td>
        </tr>
        <tr>
          <td>132</td>
          <td>132</td>
          <td>132</td>
          <td>132</td>
        </tr>
        <tr>
          <td>132</td>
          <td>132</td>
          <td>132</td>
          <td>132</td>
        </tr>
        <tr>
          <td>132</td>
          <td>132</td>
          <td>132</td>
          <td>132</td>
        </tr>
      </table>
    </CheckboxGroup>-->

    <br>
    <Page :total="100" show-sizer show-elevator style="display: inline-block;vertical-align: middle"></Page>
    <span style="display: inline-block;vertical-align: middle">View 123,432 Products</span>
  </div>
</template>

<script>
  /**
   * 表格组件
   * @desc 组件描述
   * @author xuffy
   * @param {Object} [title]    - 参数说明
   * @param {String} [columns] - 参数说明
   * @example
   *  <v-table></v-table>
   */

  import VFilterValue from './filterValue'
  import VFilterColum from './filterColumn'

  export default {
    name: 'VSimpleTable',
    props: {
      border: {
        type: Boolean,
      }
    },
    components: {
      VFilterValue,
      VFilterColum
    },
    data() {
      return {
        checkValue: [],
        columns6: [
          {
            type: 'selection',
            width: 34,
            fixed: 'left',
            align: 'center'
          },
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: 'Date',
            key: 'date',
            width: 200,
            renderHeader: (h, params) => {
              return h(VFilterValue);
            }
          },
          {
            title: 'Name',
            key: 'name',
            width: 200,
            renderHeader: (h, params) => {
              return h(VFilterValue);
            }
          },
          {
            title: 'Age',
            key: 'age',
            width: 200,
            filters: [
              {
                label: 'Greater than 25',
                value: 1
              },
              {
                label: 'Less than 25',
                value: 2
              }
            ],
            filterMultiple: false,
            filterMethod(value, row) {
              if (value === 1) {
                return row.age > 25;
              } else if (value === 2) {
                return row.age < 25;
              }
            }
          },
          {
            title: 'Address',
            key: 'address',
            width: 200,
            filters: [
              {
                label: 'New York',
                value: 'New York'
              },
              {
                label: 'London',
                value: 'London'
              },
              {
                label: 'Sydney',
                value: 'Sydney'
              }
            ],
            fixed: 'right',
            filterMethod(value, row) {
              return row.address.indexOf(value) > -1;
            }
          }
        ],
        data5: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
      }
    },
    watch: {},
    created() {
    },
    methods: {
      /**
       * 函数说明
       * @method getList
       * @param {Object} [title]    - 参数说明
       * @param {Object} [title]    - 参数说明
       * @return {Object} - 参数说明
       */
      getList() {

      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ucn-table table {
    border-collapse: collapse;
    border-spacing: 0;
    border-left: 1px solid #e9eaec;
    background-color: #ffffff;
  }

  .ucn-table table tr:first-child {
    border-top: 1px solid #e9eaec;
    background-color: #f8f8f9;
  }

  .ucn-table table tr {
    border-right: 1px solid #e9eaec;
  }

  .ucn-table table tr th,
  .ucn-table table tr td {
    text-align: center;
    border-bottom: 1px solid #e9eaec;
    padding: 10px 5px;
  }
</style>
<style>
  .ucn-table .ivu-checkbox-wrapper {
    margin-right: 0;
  }

  .ucn-table td.ivu-table-expanded-cell {
    padding: 0 0 0 64px;
  }

  .ucn-table .ivu-table-fixed-body {
    background-color: #f8f8f9;
  }
</style>
