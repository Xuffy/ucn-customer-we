
export default {
    categoryId: {
        key: 'categoryId',
        type: 'String',
        showType:'dropdown',
        isOutside:'true',               //是否是默认显示
        // isText:true,
    },
    nameCnLike: {
        key: 'nameEn',
        type: 'String',
        showType:'input',
        isOutside:'true',               //是否是默认显示
        length: 45,
        rule:''

    },
    isReadilyAvailable: {
        key: 'isReadilyAvailable',
        type: 'Boolean',
        showType:'select',
        isOutside:'true',               //是否是默认显示
    },
    customerSkuCodeLike: {
        key: 'customerSkuCode',
        type: 'String',
        showType:'input',
        length: 10,
    },
    exwPrice: {
        key: 'exwPrice',
        type: 'Number',
        showType:'exwNumber',
        length: 10,
    },
    codeLike:{
        key: 'code',
        type: 'String',
        showType:'input',
        length: 10,
    },

    nameEnLike:{
        key: 'nameEn',
        type: 'String',
        showType:'input',
        length: 10,
    },
    fobPrice:{
        key: 'fobPrice',
        type: 'String',
        showType:'fobNumber',
        length: 10,
    },
    materialEnLike:{
        key: 'materialEn',
        type: 'String',
        showType:'input',
        length: 10,
    },
    country:{
        key: 'country',
        type: 'String',
        showType:'select',
        length: 10,
    },
    supplierNameLike:{
        key: 'supplierName',
        type: 'String',
        showType:'input',
        length: 10,
    },
    outerCartonMethodEnLike:{
        key: 'outerCartonMethodEn',
        type: 'String',
        showType:'input',
        length: 10,
    },
    methodPkgEnLike:{
        key: 'methodPkgEn',
        type: 'String',
        showType:'input',
        length: 10,
    },
    deliveryDates:{
        key: 'deliveryDates',
        type: 'String',
        showType:'number',
        length: 10,
    },
    descEnLike:{
        key: 'descEn',
        type: 'String',
        showType:'input',
        length: 10,
    },
    descCn:{
        key: 'descCn',
        type: 'String',
        showType:'input',
        length: 10,
    },


}
