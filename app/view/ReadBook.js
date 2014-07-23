Ext.define('eBook.view.ReadBook', {
    extend: 'Ext.Panel',
    xtype: 'readBook',
    config: {
        layout:'vbox',
        items: [{
                xtype:'pdfpanel',
                flex:1,
                id:'pdfReaders',
                src:'',
                style:{
                    backgroundColor: '#333'
                }
            }
        ]
    }
});
