import * as db from './db';

const INQUIRYOVERVIEW = {
    INDEX:"inquiryOverview",
    STATUS: {
        INDEX: "Status",
        TBCBYCUSTOMER: "TBC by Customer",
        TBCBYSUPPLIER: "TBC by Supplier",
        FINISH: "finish",
        CANCEL: "cancel"
    },
    BTN: {
        COMPARE: "Compare",
        CREATENEWINQUIRY: "Create New Inquiry",
        CANCELTHEINQUIRY: "Cancel the Inquiry",
        DELETE: "Delete"
    },
    VIEWBY: {
        INDEX: "View by",
        INQUIRY: "Inquiry",
        SKU: "SKU"
    }
};

const INQUIRYDETAIL = {
    TITLE: "Inquiry No.1273",
    BASICINFO: "Basic Info",
    HIDETHESAME: "Hide the Same",
    HIGHLIGHTTHEDIFFERENT: "Highlight the Different",
    PRODUCTINFO: "Product Info",
    MESSAGEBOARD: "Message board",
    BTN: {
        ADDPRODUCT: "Add Product",
        REMOVE: "Remove",
        ACCEPT: "Accept",
        CREATEORDER: "Create Order",
        ADDROCOMPARE: "Add to Compare",
        COPY: "Copy",
        MODIFY: "Modify",
        CREATEINQUIRY: "Create Inquiry",
        CANCEL: "Cancel"
    }
};

export default {
    INQUIRYOVERVIEW,
    INQUIRYDETAIL,
    db
}