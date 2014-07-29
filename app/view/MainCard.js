Ext.define('eBook.view.MainCard', {
    extend: 'Ext.Container',
    alias: 'widget.mainCard',

    requires: [
        'eBook.view.ShowBook',
        'eBook.view.RecentBook',
        'eBook.view.ReadBook',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Panel'
    ],

    config: {
        id: 'maincard',
        layout: 'card',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'mainToolbar',
                style: 'background: #fff ;border:none;position: absolute;z-index:1;',
                width: '100%',
                items: [
                 {
                        xtype: 'button',
                        id: 'btnbrandingicon',
                        style: 'background-image:url(resources/images/logo.png);background-size: 40px; background-position: 0px -5px; background-repeat: no-repeat; width: 35px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'container',
                        id: 'searchContainer',
                        width: 130,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'txtSearch',
                                width: '100%'
                            },
                            {
                                xtype: 'button',
                                id: 'btnSearch',
                                style: 'background-image:url(resources/images/search.png);background-size: 20px; background-position: 0px 8px; background-repeat: no-repeat;margin-left: -34px; width: 35px;',
                                ui: 'plain'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'btnmenu',
                        style: 'background-image:url(resources/images/menu.png);background-size: 30px 45px; background-position: 2px -3px; background-repeat: no-repeat;width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'btnrecent',
                        style: 'color:#3C99FF; margin: 0px auto; font-family: \'Arial\'; font-size: 23px;border-radius: 1.3em; width: 300px;height: 32px;font-family: \'Arial\'; font-size: 23px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnsearch',
                        style: 'background-image:url(resources/images/search.png);background-size: 24px; background-position: 5px; background-repeat: no-repeat; margin-left: 5px;width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnchat',
                        style: 'background-image:url(resources/images/chat.png);background-size: 33px; background-position: 0px 1px; background-repeat: no-repeat;width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnmessage',
                        style: 'background-image:url(resources/images/message.png);background-size: 26px; background-position: 0px 5px; background-repeat: no-repeat; margin-right: -5px;width: 30px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        hidden: true,
                        id: 'btnlibrary',
                        style: 'color: #3C99FF;height: 30px; margin-top: 11px; font-family: Arial; font-size: 23px; width: 66px; margin-right: -4px; padding: 0px',
                        ui: 'plain',
                        text: 'Library'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        html: '<div style="    margin-top: 8px;"><img src="resources/images/images.jpg" class="img_size" alt="" /><span class="setting_span">Demo</span></div>',
                        id: 'btnsetting',
                        style: 'padding: 0px;margin-right: -24px',
                        ui: 'plain'
                    }
                ]
            },
            {
                xtype: 'showbook'
            },
            {
                xtype: 'recentbook'
            },
            {
                xtype: 'readBook'
            }
        ]
    }

});