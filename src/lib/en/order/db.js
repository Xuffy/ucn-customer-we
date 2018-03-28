//.......................................................order overview
const tableData = {
    //.............................view by order
    SequenceNumber: 'Sequence Number',
    important: 'Important',
    attachment: 'Attachment',
    alert: 'Alert',
    archive: "Archive",
    orderId: 'Order ID',
    orderDate: 'Order Date',
    orderStatus: 'Order Status',
    CustomerShortName: 'Customer Short Name',
    PurchaseOrderNumber: 'Purchase Order Number',
    SupplierShortName: 'Supplier Short Name',
    SalesOrderNumber: 'Sales Order Number',
    PriceTerms: 'Price Terms',
    incotermArea: 'Incoterm Area',
    lcNumber: 'LC Number',
    PaymentMethod: 'Payment Method',
    currency: 'Currency',
    EstDeliveryDate: 'Est Delivery Date',
    ActDeliveryDate: 'Act Delivery Date',
    CountryofShipmentOrigin: 'Country of Shipment Origin',
    DestinationCountry: 'Destination Country',
    CustomerAgreementID: 'Customer Agreement ID',
    CustomerAgreementDate: "Customer Agreement Date",
    comments: 'Comments',
    PaymentRemark: 'Payment Remark',
    TotalProductPrice: 'Total Product Price',
    PaidAmount: 'Paid Amount',
    UnpaidAmount: 'Unpaid Amount',
    InboundQuantity: 'Inbound Quantity',
    QuantityofDelivery: 'Quantity of Delivery',
    ModifyTime: 'Modify Time',
    CreateTime: 'Create Time',
    SubinquiryID: 'Sub-inquiry ID',
    TotalQuantity: 'Total Quantity',
    TotalCarton: 'Total Carton',
    TotalGrossWeight: 'Total Gross Weight',
    TotalNetWeight: 'Total Net Weight',
    TotalVolume: 'Total Volume',
    SKUQuantity: 'SKU Quantity',
    //.........................................view by sku
    OrderNumber: 'Order Number',
    CustomerItemNumber: 'Customer Item Number',
    ProductBarCode: 'Product Bar-Code',
    VendorSKUcode: 'Vendor SKU code',
    SupplierShortName: 'Supplier Short Name',
    EnglishProductName: 'English Product Name',
    ProductDescriptionCustomerLanguage: 'Product Description (Customer Language)',
    ProductDescriptionEnglish: 'Product Description (English)',
    Material: 'Material',
    UnitPrice: 'Unit Price',
    Quantity: 'Quantity',
    TotalPrice: 'Total Price',
    OrderDate: 'Order Date',
    EstDeliveryDate: 'Est Delivery Date',
    ActDeliveryDate: 'Act Delivery Date',
    OnBoardDate: 'On Board Date',
    LogisticsQuantity: 'Logistics Quantity',
    ProductStatus: 'Product Status',
    PriceTerms: 'Price Terms',
    incotermarea: 'incoterm area',
    CreateTime: 'Create Time',
    ModifyTime: 'Modify Time',
    Comments: 'Comments',
}
//............................................................po detail
const basicinfo = {
    orderNumber: 'Order Number',
    orderDate: 'Order Date',
    purchaseOrderNumber: 'Purchase Order Number',
    customerShortName: 'Customer Short Name',
    customerSerialNumber: 'Customer Serial Number',
    salesOrderNumber: 'Sales Order Number',
    supplierShortName: 'Supplier Short Name',
    supplierSerialNumber: 'Supplier Serial Number',
    //...下拉框
    referencesInquiryID: 'References Inquiry ID',
    TBCByCustomer: 'TBC by customer',
    TBCBySupplier: 'TBC by supplier',

    //....下拉框
    orderStatus: 'Order Status',
    Process: 'Process',
    Finished: 'Finished',
    Cancled: 'Cancled',

    estDeliveryDate: 'Est Delivery Date',
    actDeliveryDate: 'Act Delivery Date',
    //。。。下拉框
    priceTerms: 'Price Terms',
    fob: 'fob',
    exw: 'exw',
    //    其他:'其他'


    incortermAea: 'incoterm area',
    paymentMethod: 'Payment Methods',
    lcNumber: 'LC Number',
    countryofShipmentOrigin: 'Country of Shipment Origin',
    portofLoading: 'Port of Loading',
    destinationCountry: 'Destination Country',
    destinationPort: 'Destination Port',
    //......下拉框
    transportationWay: 'Transportation Way',
        海运:'海运',

    customerAgreementID: 'Customer Agreement ID',
    customerAgreementDate: 'Customer Agreement Date',
    //下拉框
    batchForLogistics: 'Batch For Logistics',
        Yes:'Yes',
        No:'No',

    //下拉框
    paymentCondition: 'Payment Condition',
    paySinceBL: 'Pay Since B/L',
    paySinceLCNumber: 'Pay Since LC Number',


    agreeOnDateInterval: 'Agree On Date Interval',
    paymentStatus: 'Payment Status',
    comments: 'Comments',
}

const responsibility = {
    NeedLabelDesignInfoDate: 'Need Label/Design Info Date',
    LableDesignDate: 'Lable/Design Date',
    DesignNeedConfirmDate: 'Design Need Confirm Date',
    ReceiveSampleDate: 'Receive Sample Date',
    SampleNeedConfirmDate: 'Sample Need Confirm Date',
    OtherDate: 'Other Date',
}

const productinfo = {

}
export {
    tableData,
    responsibility,
    basicinfo,
    productinfo
}
