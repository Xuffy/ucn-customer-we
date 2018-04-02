import * as db from './db';

const status = { 
    index: "Status",
    TBCByCustomer: "TBC by Customer",
    TBCBySupplier: "TBC by Supplier",
    finish: "finish",
    cancel: "cancel"
};

const btn = {
    Compare: "Compare",
    createNewInquiry: "Create New Inquiry",
    cancelTheInquiry: "Cancel the Inquiry",
    Delete: "Delete",
    addProduct: "Add Product",
    remove: "Remove",
    accept: "Accept",
    createOrder: "Create Order",
    addToCompare: "Add to Compare",
    copy: "Copy",
    modify: "Modify",
    createInquiry: "Create Inquiry",
    cancel: "Cancel",
    add: "add",
    submit: "submit",
    saveAsDraft: "Save as Draft"
};

const viewBy = {
    index: "View by",
    inquiry: "Inquiry",
    SKU: "SKU"
};

const text = {
    inquiryOverview: "inquiryOverview",
    inquiryDetail: "Inquiry No.1273",
    basicInfo: "Basic Info",
    hideTheSame: "Hide the Same",
    highlightTheDifferent: "Highlight the Different",
    productInfo: "Product Info",
    messageBoard: "Message board",
};

const basicInfo = {
    shippingMethod: "Shipping method",
    paymentTerm: "Payment Term",
    departureCountry: "Departure Country",
    departurePort: "Departure Port",
    incoterm: "Incoterm",
    currency: "Currency",
    inquiryData: "Inquiry Data",
    inquiryStatus: "Inquiry Status",
    inquirySequance: "Inquiry Sequance",
    destinationCountry: "Destination Country",
    quotationValidity: "Quotation Validity",
    destinationPort: "Destination Port",
    myInquiryID: "My Inquiry ID",
    remarks: "Remarks",
    attachment: "Attachment"
};

export default {
    status,
    btn,
    viewBy,
    text,
    basicInfo,
    ...db
}