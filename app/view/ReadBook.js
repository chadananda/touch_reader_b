Ext.define('eBook.view.ReadBook', {
    extend: 'Ext.Panel',
    alias: 'widget.readBook',

    config: {
        height: '100%',
        scrollable: true,
        listeners: {
            element: 'element',
            tap: function() {
                if(Ext.getCmp('mainToolbar').getHidden()){
                   Ext.getCmp('mainToolbar').setHidden(false);
                }else{
                    Ext.getCmp('mainToolbar').setHidden(true);
                }
                
               
            }
        }
    }

});
