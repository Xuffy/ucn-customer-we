import * as db from './db.js'

const title={
    'productSourcing':'Product Sourcing'
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
};

const btn={
    ShowTheAdvance:'Show the Advance',          //切换显示隐藏按钮的文字
    HideTheAdvance:'Hide the Advance',          //切换显示隐藏按钮的文字
    search:'Search',
    clear:'Clear',

};




export default {
    title,
    page,
    btn,
    ...db
}
