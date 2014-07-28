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
                cls: 'main_tool_bar',
                docked: 'top',
                hidden: false,
                id: 'mainToolbar',
                style: 'background: #fff ;border-bottom:1px solid #ccc;position: absolute;z-index:1;',
                width: '100%',
                items: [
                    {
                        xtype: 'button',
                        id: 'btnbrandingicon',
                        style: 'background-image:url(resources/images/logo.png);background-size: 40px; background-position: 0px -5px; background-repeat: no-repeat; width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        id: 'btnlibrary',
                        style: 'color: #007aff;height: 32px;margin-top: 8px;border-radius: 1.3em;font-family: Arial; font-size: 23px;',
                        ui: 'plain',
                        text: 'Library'
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
                        id: 'btnrecent',
                        style: 'color:#007aff; margin: 0px auto; font-family: \'Arial\'; font-size: 23px;border-radius: 1.3em; width: 300px;height: 32px;font-family: \'Arial\'; font-size: 23px;',
                        ui: 'plain',
                        text: 'Recently Opened Books'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnsearch',
                        style: 'background-image:url(resources/images/search.png);background-size: 28px; background-position: 0px 5px; background-repeat: no-repeat;width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnsetting',
                        style: 'background-image:url(resources/images/setting.png);background-size: 26px; background-position: 6px 4px; background-repeat: no-repeat; width: 40px;;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnchat',
                        style: 'background-image:url(resources/images/chat.png);background-size: 38px; background-position: 0px -2px; background-repeat: no-repeat;width: 40px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnmessage',
                        style: 'background-image:url(resources/images/message.png);background-size: 30px; background-position: 1px 50%; background-repeat: no-repeat; width: 40px;',
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