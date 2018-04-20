<template>
    <div class="bookmark">
<!--
        <div class="title">
            <el-button class="title-btn"
                       @click="switchDisplay"
                       type="text">{{btnInfo}}
            </el-button>
        </div>
-->
        <V-New-Search></V-New-Search>
<!--        <div>-->
<!--
            <el-form ref="form" :model="form" label-width="180px">
                <el-row>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Category">
                            <el-col :span="15">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Readily Available">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="body" :class="{hide:hideBody}">
            <el-form ref="form" :model="form" label-width="180px">
                <el-row>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Code">
                            <el-col :span="15">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="EXW Price">
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0" ></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Vendor SKU Code">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Vendor SKU Name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Incoterm Price">
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0" ></el-input-number>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-input-number v-model="number" controls-position="right" @change="handleChange" :min="0"></el-input-number>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Materials">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Country">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Supplier Name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Package Type">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Product Package Type">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Delivery Days">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="MOQ">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="SKU Description">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                        <el-form-item label="Vendor SKU Description">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
            </el-form>
        </div>
        <div class="btn-group">
            <el-button @click="search" type="primary">Search</el-button>
            <el-button @click="clear" type="info" plain>Clear</el-button>
        </div>
-->
    </div>
</template>

<script>
    import VNewSearch from '../../product/addProduct.vue'
    export default {
        name: "fromnewsearch",
        components: {
            // dropDown,
            VNewSearch
        },
        props: {

        },
        data() {
            return {}
        },
        methods: {

        },
        created() {

        },
        watch: {

        }
    }

</script>

<style scoped>
    .bookmark {
        padding-right: 20px;
    }

    .title {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }


    .body {
        overflow: hidden;
        max-height: 1400px;
        display: block;
        transition: max-height .5s cubic-bezier(.445, .05, .55, .95);
    }

    .hide {
        max-height: 0;

    }

    .form-spelist {
        margin-bottom: 10px !important;
    }

    .form-spelist>>>.ivu-form-item-content {
        line-height: normal;
    }

    .form-list {
        margin-bottom: 10px;
    }

    .btn-group {
        text-align: center;
        margin-top: 10px;
    }

    .btn-group .search {
        margin-right: 30px;
    }

</style>
