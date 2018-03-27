<template>
  <section class="filter-column">
    <Poptip placement="bottom-end" style="text-align: left">
      <p class="title">
        Set Filed&nbsp;<Icon type="funnel"></Icon>
      </p>
      <div slot="content" class="content-box">
        <Input placeholder="Please select" clearable></Input><br>
        <!--<Checkbox :value="checkAll" @click.prevent.native="changeCheck">全选</Checkbox>-->
        <Tree :data="column" show-checkbox></Tree>
      </div>
    </Poptip>
  </section>
</template>

<script>

  export default {
    name: 'VFilterColumn',
    data() {
      return {
        checkAll: false,
        column: [
          {
            title: 'all(80/60)',
            expand: true,
            children: [
              {
                title: 'parent 1',
                expand: true,
                children: [
                  {
                    title: 'parent 1-1',
                    expand: true
                  },
                  {
                    title: 'parent 1-2',
                    expand: true
                  }
                ]
              }
            ]

          }

        ]
      }
    },
    watch: {},
    created() {
    },
    methods: {
      /*changeCheck(type) {
        this.checkAll = !this.checkAll;

        console.log(_.map(this.column, val => {
          val.checked = this.checkAll;
          return val
        }));
      }*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-box {
    padding: 10px;
    max-height: 300px;
  }

</style>
<style>
  .ucn-table .ivu-poptip-body {
    padding: 0;
  }
</style>
