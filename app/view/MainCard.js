Ext.define('eBook.view.MainCard', {
    extend: 'Ext.Container',

    requires: [
        'eBook.view.Showbook',
        'eBook.view.Recentbook',
        'eBook.view.Setting',
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
                width: '100%',
                items: [
                    {
                        xtype: 'button',
                        id: 'btnbrandingicon',
                        style: 'background:#E3E3E4;border:1px solid;color: #000;',
                        ui: 'plain',
                        text: 'b'
                    },
                    {
                        xtype: 'button',
                        id: 'btnlibrary',
                        style: 'background:#E3E3E4;border:1px solid;color: #000;',
                        ui: 'plain',
                        text: 'Library'
                    },
                    {
                        xtype: 'button',
                        id: 'btnmenu',
                        style: 'background-image:url(resources/images/menu.png);background-size: 37px; background-repeat: no-repeat; width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        id: 'btnrecent',
                        style: 'background:#E3E3E4;border:1px solid;color: #000;margin:0 auto;',
                        ui: 'plain',
                        text: 'The Promised Day, Shoghi Effendi'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnsearch',
                        style: 'background-image:url(resources/images/search.png);background-size: 37px; background-repeat: no-repeat; width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnsetting',
                        style: 'background-image:url(resources/images/setting.png);background-size: 34px; background-repeat: no-repeat; width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnchat',
                        style: 'background-image:url(resources/images/chat.png);background-size: 37px; background-repeat: no-repeat; width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnmessage',
                        style: 'background-image:url(resources/images/message.png);background-size: 37px; background-repeat: no-repeat; width: 40px;',
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
                xtype: 'setting'
            }
        ]
    }

});