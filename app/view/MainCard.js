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
                style: 'background: #B7C5E2 ;border:none;position: absolute;z-index:1;height:35px;-webkit-box-shadow: 0px 0px 0px 2px #9BCBFF;',
                width: '100%',
                items: [
                    {
                        xtype: 'button',
                        id: 'btnbrandingicon',
                        style: 'background-image:url(resources/images/logo.png);margin-top: 0px; margin-left: -10px; background-size: 36px; width: 30px; background-repeat: no-repeat no-repeat;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'container',
                        docked: 'right',
                        hidden: true,
                        id: 'searchContainer',
                        style: 'margin-top: -4px;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'txtSearch',
                                width: 160,
                                inputCls: 'txt_enlarge'
                            },
                            {
                                xtype: 'button',
                                id: 'btnSearch',
                                style: 'background-image:url(resources/images/search.png);background-size: 20px; background-position: 0px 10px; background-repeat: no-repeat;margin-left: -34px; width: 35px;',
                                ui: 'plain'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'btnlibrary',
                        style: 'color: #3C99FF;height: 30px; margin-top: 4px; font-family: Arial; font-size: 25px; width: 66px; margin-right: 0px; padding: 0px;',
                        ui: 'plain',
                        text: 'Library'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'btnmenu',
                        style: 'background-image:url(resources/images/menu.png);background-size: 30px 45px; width: 35px; background-repeat: no-repeat no-repeat; margin-top: -2px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        id: 'btnsetting',
                        style: 'background-image:url(resources/images/setting.png);background-size: 25px; width: 30px; background-repeat: no-repeat no-repeat; margin-left: 0;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'btnrecent',
                        style: 'color:#3C99FF; font-family: Arial; font-size: 25px; width: 300px; height: 30px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        hidden: false,
                        id: 'btnLanguageSelector',
                        style: 'background-image:url(resources/images/language.png);background-size: 27px; margin-left: 5px; width: 40px; background-repeat: no-repeat no-repeat; margin-top: 5px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnchat',
                        style: 'background-image:url(resources/images/chat.png);background-size: 33px; width: 40px; background-repeat: no-repeat no-repeat; margin-top: 3px;',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'btnmessage',
                        style: 'background-image:url(resources/images/message.png);background-size: 26px; margin-right: -5px; width: 30px; background-repeat: no-repeat no-repeat;',
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