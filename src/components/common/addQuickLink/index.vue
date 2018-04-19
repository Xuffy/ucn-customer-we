<template>
  <div class="add-quick-link">

    <el-dialog title="Add Quick Link" :visible.sync="$store.state.quickLink.show">
      <el-checkbox-group v-model="checkedList">
        <el-row>
          <el-col :span="8" v-for="item in $store.state.quickLink.list" :key="item.id">
            <el-checkbox :label="item.id">
              {{item.label}}
            </el-checkbox>
          </el-col>
        </el-row>
      </el-checkbox-group>

      <div slot="footer" class="dialog-footer">
        <el-button @click="$store.state.quickLink.show = false">取 消</el-button>
        <el-button type="primary" @click="$store.state.quickLink.show = false">确 定</el-button>
      </div>
    </el-dialog>
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

  import {mapState} from 'vuex'

  export default {
    name: 'VAddQuickLink',
    components: {},
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
        checkedList: [],
        dataList: [
          'Create Inquiry1',
          'Create Inquiry2',
          'Create Inquiry3',
          'Create Inquir5',
          'Create Inquiry41',
          'Create Inquiry15',
          'Create Inquiry16',
          'Create Inquiry17',
          'Create Inquiry18',
          'Create Inquiry19',
        ]
      }
    },
    computed: {},
    watch: {},
    mounted() {
      this.getQuickLink();
    },
    methods: {
      getQuickLink() {
        this.$ajax.post(this.$apis.GET_CODE_PART,['QUICK_LINK']).then((data) => {
          this.$store.state.quickLink.list = data;
        });
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
