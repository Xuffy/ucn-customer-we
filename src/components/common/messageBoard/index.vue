<template>
  <div class="messagelist">
     <div class="list">
        <div class="list_item" v-for="item in list" :key="item.id">
            <p class="list_item_title">
             <span>{{item.name}}</span>
             <span>{{item.time}}</span>
            </p>
            <p>
                {{item.content}}
                <img :src="item.src" v-if="item.src">
            </p>          
        </div>     
     </div>
     <upload class="messagelist_upload"></upload>
     <div class="form">       
             <el-input
                  type="textarea"
                  :rows="3"
                  placeholder="Add"
                  class="text_enter"
                  v-model="textarea">
            </el-input>
<!--          <textarea class="text_enter" placeholder="Add..." v-model='addtext'></textarea>-->
           <el-button type="primary" @click='sub'>submit</el-button>          
     </div>
  </div>
</template>

<script>
    import upload from '../upload/upload.vue'
    export default {
        name: 'messagelist',
        components: {
            upload
        },
        //传送的数据
        props: {
            list: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                textarea: ''
            }
        },
        watch: {

        },
        created() {

        },
        methods: {
            //提交文字输入内容 
            sub() {
                if (this.textarea != '') {
                    this.$emit('sub', this.textarea)
                    this.textarea = ''
                }

            }
        }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .messagelist {
        border: 1px solid #BEBEBE;
        height: 600px;
        width: 300px;
    }

    .list {
        height: 400px;
        width: 100%;
        font-size: 12PX;
        overflow: auto;
    }

    .list_item {
        padding: 10px
    }

    .list_item_title {
        display: flex;
        justify-content: space-between;
        color: #BEBEBE;
        font-size: 12px;
    }

    .list p {
        word-wrap: break-word;
        word-break: break-all;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-top: 10px;
    }

    .text_enter {
        width: 90%;
        margin: auto;
    }

    .text_enter::-webkit-input-placeholder {
        padding-left: 10px;
        color: #BEBEBE
    }

    button {
        width: 40%;
        margin: auto;
        margin-top: 10px;
    }

    .messagelist_upload {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        margin-right: 5%;
    }

</style>
