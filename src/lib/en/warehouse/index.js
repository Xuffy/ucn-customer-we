import * as db from './db.js'

const page={

    //title
    qcOrderDetail:'QC Order Detail',
    basicInfo:'Basic Info',
    productInfo:'Product Info',
    createQCOrder:'Create QC Order',
    downLoad:'Download',




    //qc detail
    qcOrderNo:'QC Order No',
    buyerOrderNo:' Buyer order No',
    buyerOrderDate:'Buyer Order Date',
    qcType:'QC Type',
    qcDate:'QC Date',
    supplierID:' Supplier ID',
    supplierName:'Supplier Name',
    factoryAddressInEnglish:'Factory Address (In English)',
    factoryContactPhone:'Factory Contact Phone',
    qcResult:'QC Result',
    qcMethod:'QC Method',
    surveyor:'Surveyor',
    servicePrice:'Service price',
    remark:'Remark',
    attachment:'Attachment',
    serviceID:'Service ID',
    serviceName:'Service name',
    serviceProviders:'Service providers',


    //btns
    close:'Close',
    cancelQC:'Cancel QC',
    deleteQC:'Delete QC',



};



export default {
    page,
    ...db
}
