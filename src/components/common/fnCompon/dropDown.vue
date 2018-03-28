<template>
    <div class="dropDown" @click.stop>
        <div class="checkInputBox" @click="theeSwitch" :class="{'active':theeStatus}">
			<div class="checkInputBoxPl" v-if="selectedList.length <= 0">{{checkInputBoxPl}}</div>
            <div class="dataBox" @click.stop>
				<span v-for="(item, index) in selectedList" :key="item.id" @click="del(item, index)">{{item.label}}<i class="el-icon-close"></i></span>
			</div>
			<i class="el-icon-arrow-up"></i>
        </div>
        <div class="deepBox" v-if="theeStatus" :style="{'height':treeHeight}">
			<el-input
				:placeholder="searchPlaceholder"
				v-model="filterText">
			</el-input>
			<div class="deep">
				<el-tree
					:data="list"
					show-checkbox
					node-key="id"
					:props="defaultProps"
					default-expand-all
					:filter-node-method="filterNode"
					@check="getChecked"
					ref="tree"
					:empty-text="emptyText"
					>
				</el-tree>
			</div>
		</div>
    </div>
</template>

<script>
	/**dropDown
	 * author -LuoTao
     * Time -2018-03-20
     * @param { emptyText } - 内容为空时 树形展示的文本
	 * @param { searchPlaceholder } - 搜索框提示文字
	 * @param { checkInputBoxPl } - 操作框提示文字
	 * @param { list } - 树型组件数组
	 * @param { selectedList } - 选中nodes => 返回数组 可用过 vw.$refs.theeStatus 取值
	 * @param { getChecked } -methods 当复选框被点击的时候触发 返回值getChecked 
	 * @param { treeHeight } - 树高度 默认 200
	*/ 
	export default {
		data() {
			return {
				filterText: '',
				selectedList:[],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				data:[],
				theeStatus: false
			};
		},
		mounted() {
			this.$nextTick(() => {
				document.onclick = () => {
					this.theeStatus = false;
				}
			})
		},
		props: {
			emptyText: {
				type: String,
				default: 'no data'
			},
			searchPlaceholder: {
				type: String,
				default: 'Please be here to screen'
			},
			checkInputBoxPl: {
				type: String,
				default: 'Please choose'
			},
			list: {
				type: Array,
				default: []
			},
			treeHeight: {
				type: String,
				default: '200px'
			}
		},
		computed: {
			
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			},
		},
		methods: {
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			},
			getChecked() {
				this.selectedList = this.$refs.tree.getCheckedNodes(true);
			},
			del(item, index) {
				this.selectedList.splice(index, 1);
				const ergodic = (val, selectedList) => {
					selectedList.forEach(nodes => {
						if (nodes.label === val.label) return this.$refs.tree.setChecked(nodes.id, false);
						if (nodes.children && nodes.children.length) return ergodic(val, nodes.children)
					});
				};
				ergodic(item, this.list);
			},
			theeSwitch() {
				this.theeStatus = !this.theeStatus;
			}
		}
	};
</script>
<style scoped lang="less">
	.dropDown {
		.deepBox {
			padding:10px;
			border-radius: 5px;
			box-shadow: 0 0 5px #ccc;
			overflow-y: auto;
			background:#fff;
			.deep {
				margin-top:10px;
				max-height:200px;
			}
		}
		.checkInputBox {
			position: relative;
			-webkit-appearance: none;
			background-color: #fff;
			background-image: none;
			border-radius: 4px;
			border: 1px solid #dcdfe6;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			color: #606266;
			display: inline-block;
			font-size: inherit;
			min-height: 40px;
			outline: 0;
			padding: 0 15px;
			-webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
			transition: border-color .2s cubic-bezier(.645,.045,.355,1);
			&.active {
				border-color:#409eff;
				.el-icon-close {
					color:#409eff;
					transform: rotate(180deg);
				}
			}
			width: 100%;
			.dataBox {
				span {
					background:#f4f4f4;
					color:#94979a;
					padding:8px 8px;
					margin:5px 5px 5px 0;
					border-radius: 5px;
					display:inline-block;
					font-size:12px;
					i {
						font-size:14px;
						cursor: pointer;
					}
				}
			}
			.checkInputBoxPl {
				color:#999;
				line-height:40px;
				font-weight: normal;
				font-size: 12px;
			}
			.el-icon-arrow-up {
				position: absolute;
				right:5px;
				top:50%;
				margin-top:-8px;
			}
		}
	}
</style>
