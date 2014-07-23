Ext.define('eBook.view.Menu', {
    extend: 'Ext.Panel',
    xtype: 'menu',
   config: {
        style: 'background: #fff;',
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        scrollable: true,
        items: [{
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            defaults: {
                flex: 1
            },
            style: 'margin-top: 0%',
            items: [{
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [{
                    cls: 'library_icon',
                    xtype: 'button',
                    action: 'library_Btn'
                }, {
                    html: 'Library'
                }]
            }, {
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [{
                    cls: 'study_projects_icon',
                    xtype: 'button',
                    action: 'studyprojectsBtn'
                }, {
                    html: 'Study Projects'
                }]
            }, {
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [{
                    cls: 'user_settings_icon',
                    xtype: 'button',
                    action: 'userSettingsBtn'
                }, {
                    html: 'User Settings'
                }]
            }]
        }, 

        ]
    }
});


