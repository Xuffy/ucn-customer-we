<template>
  <div class="ucn-table" ref="testTable" style="width: 500px;height: 500px;overflow: auto">
    <table>
      <tr>
        <th v-for="item in dataColumn" v-text="item.prop"></th>
      </tr>
    </table>
    <!--<ul class="table-title">
      <li v-for="item in dataColumn" v-text="item.prop"></li>
    </ul>-->
    <table>
      <thead>
      <tr v-for="item in dataList">
        <td v-for="cItem in item" v-text="cItem"></td>
      </tr>
      </thead>
      <tbody>
      <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  /**
   * 表格组件
   * @desc 组件描述
   * @author xuffy
   * @param {Object} [title]    - 参数说明
   * @param {String} [columns] - 参数说明
   *
   * @method @sort-change(val, key)   - 点击排序
   * @method @page-size-change(size)    - 改变分页条数
   * @method @page-change(page)   - 改变分页
   *
   * @example
   *  <v-table></v-table>
   */

    // import VFilterValue from './filterValue'
    // import VFilterColumn from './filterColumn'

  let allData = [];
  let i = 0;

  export default {
    name: 'VSimpleTable',
    components: {
      // VFilterValue,
      // VFilterColumn
    },
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        dataList: [],
        dataColumn: [],

      }
    },
    watch: {},
    mounted() {
      this.getList();
      let node = this.$refs.testTable;
      let scrollNum = 0;
      node.addEventListener('scroll', (e) => {
        let h = e.target.scrollTop
          , sh = e.target.scrollHeight - e.target.clientHeight - 10;
        /*if (h > sh) {
          console.log(i * 50, i * 50 + 50)
          this.dataList = allData.slice(i * 50, i * 50 + 50);
          e.target.scrollTop = 0;
        }*/

        if (h > sh) {
          let n = (i - 1) * 50;
          this.dataList = this.dataList.concat(allData.slice(n, n + 50));
          console.log(this.dataList.length)
          i++;
        }


      }, false);
    },
    methods: {
      getList() {
        this.ajax.get('/getBigList').then((data) => {
          allData = data;
          // this.dataList = data;
          this.dataList = data.slice(0, 50);
          i++;
          this.dataColumn = this.$getTableColumn(data, 'negotiation.tableProductInfo');
        });
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ucn-table {
    position: relative;
  }

  .table-title {
    position: absolute;
    width: 100%;
  }

  .table-title li {
    float: left;
  }

  .table-title:after {
    content: '';
    display: block;
    clear: both;
  }

  table {
    border-collapse: collapse;
    border: none;
    width: 200px;
  }

  td {
    border: solid #000 1px;
  }
</style>
