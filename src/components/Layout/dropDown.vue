<template>
    <div class="drop-down" :class="{'active':isActive}" :style="{ 'z-index':zIndex, 'width':w+'px' }" @click.stop>
        <div class="AnalogInputBox" :style="`width: ${w}px`" @click="dropSwitch">
            <div class="label">
                <div class="placeholder" v-show="selected.length <= 0">{{DownPlaceholder}}</div>
                <span v-for="(item, index) in selected" :key="item.id" @click.stop="clone(item, index)" v-if="item.isActive">{{item.title}}</span>
                <i class="ivu-icon ivu-icon-chevron-down ivu-input-icon ivu-input-icon-normal"></i>
            </div>
        </div>
        <div class="drop-down-menu" :style="`width: ${w}px`" v-show="isActive">
            <Input v-model="val" icon="search" :placeholder="ScreenPlaceholder" @on-focus="onFocus" @on-blur="onBlur" @on-enter="onEnter" @on-change="onChange" @on-keyup="onKeyup" @on-keydown="onKeydown" @on-click="iconClick" />
            <div class="list" v-if="list" :style="`max-height: ${h}px`">
                <Tree :data="treeData" :empty-text="noData" show-checkbox multiple @on-check-change="boxChange" ref="tree"></Tree>
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
     * @param { noData } -树形选择 没有数据时提示
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
                screen: [],
                data:[]
            }
        },
        computed: {
            treeData: {
                get() {
                    let result = JSON.parse(JSON.stringify(this.list));
                    return this.getVisiableNodes(result, this.val);
                },
                set(result) {
                    
                }
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
                type:String,
                default: 'Please choose'
            },
            ScreenPlaceholder: {
                type:String,
                default: 'Please search here'
            },
            list: {
                type:Array,
                default: []
            },
            noData: {
                type:String,
                default: 'no data'
            }
        },
        created() {
            this.$nextTick(() => {
                document.onclick = () => {
                    this.isActive = false;
                };
            });
            this.data = this.list;
        },
        methods: {
            getVisiableNodes(nodes, keyword) {
                nodes.forEach((node, index) => {
                    if (!this.nodeHasSpecialStr(node, keyword, nodes)) {
                        nodes.splice(index, 1)
                    }
                    node.children && this.getVisiableNodes(node.children, keyword)
                });
                return nodes;
            },
            nodeHasSpecialStr(node, target) {
                return node.title.indexOf(target) > -1 || (node.children && node.children.some(child => this.nodeHasSpecialStr(child, target)))
            },
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
                const treeData = this.list;
                function resetListToCheckedFalse(list) { //clear
                    list.forEach((item) => {
                        item.checked = false;
                        if(item.children && item.children.length) resetListToCheckedFalse(item.children);
                    })
                }

                function findSelectedNodeInTreeData(list, target) {
                    for(let i = 0; i < list.length; i++) {
                        const node = list[i];
                        if (node.title === target.title) {
                            return node
                        };
                        if (node.children && node.children.length) {
                            return findSelectedNodeInTreeData(node.children, target)
                        };
                        if(node.children && node.children.length) {
                            const targetNode = findSelectedNodeInTreeData(node.children, target)
                            if(targetNode) return targetNode;
                        }
                    }         
                }
                resetListToCheckedFalse(treeData)
                getSelectedNodes.forEach(selectedNode => {
                    const targetNode = findSelectedNodeInTreeData(treeData, selectedNode);
                    targetNode && (targetNode.checked = true)
                })

                this.treeData = [...treeData]        
                this.selected = getSelectedNodes;
            },
            clone(item, index) {
                
            }
        }
    }
</script>
<style scoped lang="less">
    ul{
        padding:0;
        margin:0;
        li {
            list-style: none;
        }
    }
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
            &:hover {
                border-color: #57a3f3;
            }
            padding:0;
            display:flex;
            min-height:32px;
            line-height: 1.5;
            padding: 4px 7px;
            font-size: 12px;
            border: 1px solid #dddee1;
            border-radius: 4px;
            color: #495060;
            background-color: #fff;
            background-image: none;
            position: relative;
            cursor: text;
            -webkit-transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
            transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
            transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
            transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
            .label {
                position: relative;
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
                .ivu-input-icon {
                    position:absolute;
                    right:0;
                    top:50%;
                    margin-top:-16px;
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
