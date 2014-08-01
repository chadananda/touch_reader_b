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
                      /*----- code for auto hide maintoolbar-------*/
                              if(eBook.app.taskAutoHide){
                                eBook.app.taskAutoHide.delay(5000);   
                              }
                  }else{
                      Ext.getCmp('mainToolbar').setHidden(true);
                      /*----- code for auto hide maintoolbar-------*/
                              if(eBook.app.taskAutoHide){
                                eBook.app.taskAutoHide.delay(5000);   
                              }
                  }
              }
          }
    }

});
