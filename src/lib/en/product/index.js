import * as db from './db.js'

const title={
    'productSourcing':'Product Sourcing',
    'Workbenchware':'Workbenchware',
};

const page={
    category:'Category',
    skuName:'SKU Name',
    readilyAvailable:'Readily Available',
    skuCode:'SKU Code',
    exwPrice:'EXW Price',
    vendorSKUCode:'Vendor SKU Code',
    vendorSKUName:'Vendor SKU Name',
    incotermPrice:'Incoterm Price',
    skuMaterials:'SKU Materials',
    country:'Country',
    supplierName:'Supplier Name',
    packageType:'Package Type',
    productPackageType:'Product Package Type',
    deliveryDays:'Delivery Days',
    skuDescription:'SKU Description',
    vendorSKUDescription:'Vendor SKU Description',

    skuEnglishName:'SKU English name',
    skuStatus:'SKU status',
    color:'Color',
    incoterm:'Incoterm',
    incotermArea:'incoterm area',
    unitofMeasurement:' unit of measurement',
    skuEnglishDescription:'SKU English description',

    basicInformation:'basic information',
    price:'price',
    customInformation:'custom information',
    packingInfo:'packing info',
    logisticInfo:'logistic info',
    otherInfo:'other info',
    attachment:'attachment',
    tradeHistory:'Trade History',
    remark:'remark',

    skuNo:'SKU No',
    skuDescriptionInCustomerLanguage:'SKU description in customer language',
    skuNameInCustomerLanguage:'SKU name in customer language',
    vendorSkuCode:'vendor sku code',
    supplierCode:'supplier code',
    productFormation:'product formation',
    textureEnglish:'texture(English)',
    colourEnglish:'colour(English)',
    minimumOrderQuantity:'minimum order quantity',
    deliveryDate:'delivery date',
    productDesign:'product design',
    categoryLevel1:'category level 1',
    categoryLevel2:'category level 2',
    categoryLevel3:'category level 3',
    categoryLevel4:'category level 4',
    skuAvailable:'SKU available',
    restrictedSellingCountry:'Restricted selling country',
    applicableAge:'applicable age ',
    expirationDate:'expiration date',
    unexpirationDate:'unexpiration date',
    explain:'explain',




};

const btn={
    ShowTheAdvance:'Show the Advance',          //切换显示隐藏按钮的文字
    HideTheAdvance:'Hide the Advance',          //切换显示隐藏按钮的文字
    search:'Search',
    clear:'Clear',
    createInquiry:'Create Inquiry',
    createOrder:'Create Order',
    addToCompare:'Add to Compare',
    addToBookmark:'Add to Bookmark'



};




export default {
    title,
    page,
    btn,
    ...db
}
