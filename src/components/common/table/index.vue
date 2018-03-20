<template>
  <div class="ucn-table">
    <Table border :columns="columns6" :data="data5">
    </Table>
    <br>
    <Page :total="100" show-sizer show-elevator></Page>
  </div>
</template>

<script>
  import VFilterValue from './filterValue'

  export default {
    name: 'VTable',
    components: {
      VFilterValue
    },
    data() {
      return {
        checkValue: [],
        columns6: [
          {
            type: 'selection',
            width: 60,
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
            renderHeader: (h, params) => {
              return h(VFilterValue);
            }
          },
          {
            title: 'Name',
            key: 'name',
            renderHeader: (h, params) => {
              return h(VFilterValue);
            }
          },
          {
            title: 'Age',
            key: 'age',
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
    }
    ,
    watch: {}
    ,
    created() {
    }
    ,
    methods: {}
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
