import db from './db';

const status = {
    index: "Status",
    TBCByCustomer: "TBC by Customer",
    finish: "Finish",
    canceled: "Canceled"
};

const btn = {
    downloadSelected: "Download Selected",
    sentAsOrder: "Sent as Order",
    delete: "Delete",
    addProduct: "Add product",
    remove: "Remove",
    save: "Save"
};

const viewBy = {
    index: "View By",
    plan: "Plan",
    transportationUnit: "Transportation unit",
    SKU: "SKU"
};

const text = {
    placeNewLogisticPlan: "Place New Logistic Plan",
    basicInfo: "Basic basicInfo",
    logisticsPlanNo: "logistics plan No",
    productInfo: "Product Info",
    placeNewLogisticOrder: "Place New Logistic Order",
    basicInfo: "Basic Info"
};

const basicInfo = {
    invoiceNumber: "Invoice Number",
    logisticsID: "Logistics ID",
    shipmentStatus: "Shipment Status",
    billDate: "Bill Date",
    declareType: "Declare Type",
    declareDate: "Declare Date",
    bookingDate: "Booking Date",
    containerStuffingDate: "Container Stuffing Date",
    customsCleanceDate: "Customs Cleance Date",
    sailDate: "Sail Date",
    arrivalDate: "Arrival Date",
    releaseDate: "Release Date",
    companyName: "Company Name",
    customerShortName: "Customer Short Name",
    receiptCompany: "Receipt Company",
    shippingAgentCompany: "Shipping Agent Company",
    priceTerms: "Price Terms",
    currency: "Currency",
    paymentMethod: "Payment Method",
    paymentTerm: "Payment Term",
    transportationWay: "Transportation Way",
    batchForLogistics: "Batch For Logistics",
    permitedOrNotPrmitedForTransshipment: "Permited or not Prmited for Transshipment",
    BLType: "BLType",
    BLQuantity: "B/L Quantity",
    BLNumber: "BL Number",
    shipper: "shipper",
    consignee: "consignee",
    notify: "notify",
    transportCompany: "Transport Company",
    vesselNameVesselNo: "Vessel Name/Vessel No.",
    countryOfShipmentOrigin: "Country of Shipment Origin",
    portOfLoading: "Port of Loading",
    destinationCountry: "Destination Country",
    destinationPort: "Destination Port"
};

const shipInfo = {
    index: "Ship Info",
    transportCompany: "Transport Company",
    shipNumber: "Ship Number",
    departCountry: "Depart Country",
    departPort: "Depart Port",
    destinationCountry: "Destination Country",
    destinationPort: "Destination Port"
};

export default {
    status,
    btn,
    viewBy,
    text,
    shipInfo,
    basicInfo,
    ...db
}