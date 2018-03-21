<template>
  <div class="messagelist">
     <div class='list'>
        <div class='list_item' v-for='item in list'>
            <p class='list_item_title'>
             <span>{{item.name}}</span>
             <span>{{item.time}}</span>
            </p>
            <p>
                {{item.content}}
                <img :src='item.src'/>
            </p>          
        </div>     
     </div>
     <upload 
       style='display:flex; justify-content: flex-end;margin-top:20px;margin-right:5%;' 
      :format="['jpg','jpeg','png']"
     ></upload>
     <div class="form">       
          <textarea class="text_enter" placeholder="Add..." v-model='addtext'></textarea>
           <Button type="primary" @click='sub'>submit</Button>          
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
        props: ['list'],
        data() {
            return {
                addtext: ''
            }
        },
        watch: {

        },
        created() {

        },
        methods: {
            //提交文字输入内容 
            sub() {
                if (this.addtext != '') {
                    this.$emit('sub', this.addtext)
                    this.addtext = ''
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
        height: 80px;
        margin: auto;
        border-radius: 5px;
        padding-left: 5px
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

</style>
