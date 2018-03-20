<template>
    <div class="drop-down" :class="{'active':isActive}" :style="{ 'z-index':zIndex, 'width':w+'px' }" @click.stop  @mousemove="inputBoxHover" @mouseout="isLabelBox = false">
        <div class="AnalogInputBox ivu-input" :style="`width: ${w}px`" @click="dropSwitch">
            <div class="label">
                <div class="placeholder" v-show="selected.length <= 0">{{DownPlaceholder}}</div>
                <span v-for="(item) in selected" :key="item.id" @click.stop v-if="item.isActive">{{item.title}}</span>
            </div>
            <i class="ivu-icon ivu-icon-chevron-down ivu-input-icon ivu-input-icon-normal"></i>
            <div class="label-box" :style="{'width':scrolW+'px', 'height':scrolH+'px', 'right':`-${scrolW + 1}px`}" v-show="isLabelBox">
                <span v-for="(item) in selected" :key="item.id" @click.stop v-if="item.isActive">{{item.title}}</span>
            </div>
        </div>
        <div class="drop-down-menu" :style="`width: ${w}px`" v-show="isActive">
            <Input v-model="val" icon="search" :placeholder="ScreenPlaceholder" @on-focus="onFocus" @on-blur="onBlur" @on-enter="onEnter" @on-change="onChange" @on-keyup="onKeyup" @on-keydown="onKeydown" @on-click="iconClick" />
            <div class="list" v-if="list" :style="`max-height: ${h}px`">
                <Tree :data="list" show-checkbox multiple @on-check-change="boxChange"></Tree>
            </div>
        </div>
    </div>
</template>
<script>
    /** dropDown
     * author LuoTao
     * Time 2018-03-20
     * @param { w } -下拉框宽度 默认200
     * @param { h } -list 默认最高300 超出 => 滚动条
     * @param { zIndex } -下拉框层级 默认11
     * @param { scrolH } -隐藏显示框高度
     * @param { scrolW } -隐藏显示框宽度
     * @param { list } -树形选择 list 格式 请参照ivie https://www.iviewui.com/components/tree
     * @param { ScreenPlaceholder } -搜索框提升文字 默认 
     * @param { DownPlaceholder } -选择input 提示文字默认 
     * @param { @onFocus } -获取焦点 返回input val
     * @param { @onBlur } -失去焦点 返回input val
     * @param { @onEnter } -按下回车触发
     * @param { @onChange } -数据发生改变触发
     * @param { @onKeyup } -原生keyUP事件
     * @param { @onKeydown } -原生Keydown事件
     * @param { @iconClick } -点击图标触发
     * 
     * 可选择元素请添加标识数据 现在用isLabelBox 暂代
    */
    export default {
        name:'dropDown',
        data() {
            return {
                isActive:false,
                val:'',
                selected:[],
                isLabelBox:false,
                screen: []
            }
        },
        props: {
            w: {
                default: 200
            },
            h: {
                default: 300
            },
            scrolW: {
                default: 200
            },
            scrolH: {
                default: 332
            },
            screenVal: {
                default: ''
            },
            zIndex: {
                default: 11
            },
            DownPlaceholder: {
                default: 'Please choose'
            },
            ScreenPlaceholder: {
                default: 'Please search here'
            },
            list: '',
            border:''
        },
        created() {
            this.$nextTick(() => {
                document.onclick = () => {
                    this.isActive = false;
                };
            });
        },
        methods: {
            onFocus() {
                this.$emit('onFocus', this.val)
            },
            onBlur() {
                this.$emit('onBlur', this.val)
            },
            onEnter() {
                this.$emit('onEnter', this.val)
            },
            onChange() {
                this.$emit('onChange', this.val);
                this.screen = [];
                this.dataHandle(this.list, this.val);
            },
            onKeyup() {
                this.$emit('onKeyup', this.val)
            },
            onKeydown() {
                this.$emit('onKeydown', this.val)
            },
            iconClick() {
                this.$emit('iconClick', this.val)
            },
            dropSwitch() {
                this.isActive = !this.isActive;
            },
            boxChange(getSelectedNodes) {
                this.selected = getSelectedNodes;
                this.inputBoxHover();
            },
            inputBoxHover() {
                if(this.selected.length >= 1) return this.isLabelBox = true;
                this.isLabelBox = false;
            },
            FuzzySearch(item, text) {
                if(!item) return;
                if(item.title === text) item.checked = false;
                item.forEach((items) => {
                    if(items.title === text) items.checked = false;
                    this.closeDataFil();
                });
            },
            vague() {
                // let len = this.list.length,
                //     arr = [],
                // for(let i=0;i<len;i++){
                //     if(this.list[i].match(reg)){
                //         arr.push(list[i]);
                //     }
                // }
                // return arr;
            },
            dataHandle(data) {
                data.forEach((item) => {
                    if(item.title.indexOf(this.val) >= 0 && item.isActive) this.screen.push(item.title);
                    if(!item.children) return;
                    item.children.forEach((items) => {
                        if(items.title.indexOf(this.val) >= 0 && items.isActive) this.screen.push(items.title);
                        items.HandleActive = false;
                        this.dataHandle(items.children);
                    });
                });
                console.log(this.screen)
            }
        }
    }
</script>
<style scoped lang="less">
    .drop-down {
        position: relative;
        &.active {
            .AnalogInputBox {
                border-color: #57a3f3;
                .ivu-icon {
                    transform:rotate(180deg);
                    color:#57a3f3;
                }
            }
        }
        .AnalogInputBox {
            padding:0;
            display:flex;
            .label {
                padding:3px;
                height:100%;
                flex:1;
                padding-right:32px;
                box-sizing: border-box;
                overflow: hidden;
                .placeholder {
                    flex:1;
                    height:100%;
                    display:flex;
                    align-items: center;
                    color:#999;
                }
                span {
                    display:inline-block;
                    background:#f4f4f4;
                    height: 24px;
                    margin-bottom:5px;
                    margin-right:5px;
                    padding:2px 5px;
                    box-sizing: border-box;
                    border-radius:5px;
                }
            }
        }
        .label-box {
            position:absolute;
            top:0;
            background:#fff;
            padding:5px;
            box-sizing: border-box;
            border-radius: 5px;
            box-shadow: 0 0 5px #ccc;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            span {
                display:inline-block;
                background:#f4f4f4;
                height: 24px;
                margin-bottom:5px;
                margin-right:5px;
                padding:2px 5px;
                box-sizing: border-box;
                border-radius:5px;
            }
            &::-webkit-scrollbar {
                width: 4px;
                height: 4px;
            }
            &::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, .5);
                border-radius: 6px;
            }
            &::-webkit-scrollbar-track {
                background-color: #ccc;
                border-radius: 6px;
            }
        }
        .drop-down-menu {
            position:absolute;
            left:0;
            top:32px;
            box-shadow: 0 0 5px #ccc;
            border-radius: 5px;
            padding:3px;
            background:#fff;
            .list {
                box-sizing: border-box;
                overflow: auto;
                -webkit-overflow-scrolling: touch;
                &::-webkit-scrollbar {
                    width: 4px;
                    height: 4px;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, .5);
                    border-radius: 6px;
                }
                &::-webkit-scrollbar-track {
                    background-color: #ccc;
                    border-radius: 6px;
                }
            }
        }
    }
</style>
