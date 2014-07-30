/*
 * File: app/view/Contents.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('eBook.view.ContentsMenu', {
    extend: 'Ext.Menu',
    alias: 'widget.contentsMenu',

    requires: [
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        height: '100%',
        style: 'background: #fff;',
        width: 200,
        layout: {
            type: 'vbox',
            align: 'start'
        },
        items: [
            {
                xtype: 'dataview',
                flex: '1',
                id: 'contentsMenuList',
                width: 200,
                scrollable: false,
                itemTpl: [
                    '<div style="color: #007aff;height: 30px;padding: 4px;border-radius: 0.3em;width: 90%;font-family: \'Arial\';font-size: 16px;margin-top:5px;">{text}</div>',
                    ''
                ],
                store: 'ContentsMenuStore'
            }
        ]
    }

});