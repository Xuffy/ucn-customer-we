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
    cancel: "Cancel"
};

const viewBy = {
    index: "View by",
    inquiry: "Inquiry",
    SKU: "SKU"
};

const title = {
    inquiryOverview: "inquiryOverview",
    inquiryDetail: "Inquiry No.1273"
};

const basicInfo = {
    index: "Basic Info",
    hideTheSame: "Hide the Same",
    highlightTheDifferent: "Highlight the Different",
    productInfo: "Product Info",
    messageBoard: "Message board"
};

export default {
    status,
    btn,
    viewBy,
    title,
    basicInfo,
    ...db
}