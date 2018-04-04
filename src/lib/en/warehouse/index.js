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
    orderNo:' Order No',
    orderDate:'Order Date',
    qcType:'QC Type',
    qcDate:'QC Date',
    supplierNO:' Supplier NO',
    supplierName:'Supplier Name',
    factoryAddress:'Factory Address',
    factoryContactPhone:'Factory Contact Phone',
    qcStatus:'QC Status',
    qcMethod:'QC Method',
    surveyor:'Surveyor',
    serviceFee:'Service fee',
    remark:'Remark',
    attachment:'Attachment',
    serviceProvidersNo:'Service providers No',
    serviceProvidersName:'Service providers name',
    // orderNo:'Order No',          //重复
    // serviceProviders:'Service providers',    //删除
    supplierOrderNo:'Supplier Order No.',
    serviceProviders:'Service providers',




    //btns
    close:'Close',
    cancelQC:'Cancel QC',
    deleteQC:'Delete QC',
    send:'Send',
    saveAsDraft:'Save As Draft',



};



export default {
    page,
    ...db
}
