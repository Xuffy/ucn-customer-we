import * as db from './db.js'

const page={
    //btns
    addNewProduct:'添加新产品',    //Add New Product
    setUp:'设为上架',              //Set Up
    setDown:'设为下架',            //Set Down
    downloadSelectProducts:'下载选中的商品',//Download Select Products
    delete:'删除',                //Delete



    //title
    basicInformation:'Basic Information',
    customInformation:'Custom Information',
    priceInfo:'Price Information',


    //add New Product
    //basic info
    pic:'图片',
    skuSaleStatus:'产品状态',
    skuCode:'供应商货号',
    skuNameCN:'产品中文名',
    skuDescriptionCN:'产品中文描述',
    skuNameEN:'产品英文名',
    skuDescriptionEN:'产品英文描述',
    skuNameInCustomerLanguage:'产品客户语言名',
    skuDescriptionInCustomerLanguage:'产品客户语言描述',
    customerSkuCode:'客户货号',
    supplierName:'供应商名称',
    supplierCode:'供应商编号',
    unit:'计量单位',
    productFormation:'产品组成',
    martialEN:'英文材质',
    martialCN:'中文材质',
    colourEN:'英文颜色',
    colourCN:'中文颜色',
    minimumOrderQuantity:'起订量',
    deliveryDays:'交期',
    productDesign:'产品设计',
    categoryLevel:'分类名称',
    // categoryLevel2:'二级分类名称',
    // categoryLevel3:'三级分类名称',
    // categoryLevel4:'四级分类名称',
    barCode:'产品条码',
    readilyAvailable:'是否现货',
    skuAvailable:'现货数量',
    restrictedSellingCountry:'不可销售国家',
    applicableAge:'适用年龄',
    expirationDate:'保质期',
    expirationDateUnit:'保质期单位',
    explain:'说明',


    //custom information
    rateOfValueAddedTax:'增值税率%',
    taxRefundRate:'退税率%',
    hsCode:'海关编码',
    customsDeclarationNameCN:'报关中文品名',
    customsDeclarationNameEN:'报关英文品名',
    chineseTradeMark:'中文商标',
    englishTradeMark:'英文商标',
    commodityInspectionChineseName:'商检中文品名',
    commodityInspectionEnglishName:'商检英文品名',
    DeclareElements:'申报要素',
    origin:'原产地',
    inspectionAndQuarantineCategory:'检验检疫类别',
    brand:'品牌',
    brandRemark:'品牌备注',
    relatedBrand:'相关品牌',
    certificat:'认证',









};




export default {
    page,
    ...db
}
