/*
 * File: app/view/Recentbook.js
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

Ext.define('eBook.view.Recentbook', {
    extend: 'Ext.Panel',
    alias: 'widget.recentbook',

    requires: [
        'Ext.Label',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        height: 300,
        hidden: true,
        itemId: 'mypanel',
        style: 'background:#FFF;',
        width: 300,
        hideOnMaskTap: true,
        modal: true,
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                xtype: 'label',
                html: '<div style="    border: 1px solid;    width: 96%;    margin: 0 auto;    border-radius: 0.3em;    height: 30px;"><img src=\'resources/images/recentbook.png\' style="width: 25px;position: absolute;margin-left: 10px;"/><span style="    margin-left: 45px;    padding: 6px;">Recently Opened Books</span></div>',
                margin: '5 0 0 0',
                width: '100%'
            },
            {
                xtype: 'dataview',
                height: 200,
                id: 'recentbooklist',
                itemId: 'recentbooklist',
                margin: '5 0 0 0',
                width: 260,
                itemTpl: [
                    '<table width="100%">',
                    '    <tr style=" border: 1px solid;border-radius: 0.3em;">',
                    '        <td rowspan="2" style="font-size: 15px;padding: 5px 0 5px 10px;"><img src=\'resources/images/book.png\' style="width: 30px;" /></td>',
                    '        <td>{name},{writer}</td>',
                    '    </tr>',
                    '</table>',
                    ''
                ],
                store: 'ShowBookData'
            }
        ]
    }

});