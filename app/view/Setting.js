/*
 * File: app/view/Setting.js
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

Ext.define('eBook.view.Setting', {
    extend: 'Ext.Menu',
    alias: 'widget.setting',

    requires: [
        'Ext.Label',
        'Ext.Container',
        'Ext.Button',
        'Ext.field.Slider'
    ],

    config: {
        id: '',
        itemId: 'settingpanel',
        style: ' background: #fff;margin-top: 46px; ',
        width: 280,
        layout: {
            type: 'vbox',
            align: 'start'
        },
        items: [
            {
                xtype: 'label',
                html: 'Font'
            },
            {
                xtype: 'container',
                width: 250,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        id: 'btndecrease',
                        style: 'border: 1px solid #ccc; width: 125px; font-size: 14px; height: 34px; ',
                        ui: 'plain',
                        text: 'A'
                    },
                    {
                        xtype: 'button',
                        id: 'btndinrease',
                        style: 'border: 1px solid #ccc; width: 125px; font-size: 18px; height: 34px; ',
                        ui: 'plain',
                        text: 'A'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'Color'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        id: 'btncolor1',
                        style: 'background: #fff; border-radius: 1.3em;border: 1px solid blue; margin-right: 20px;',
                        ui: 'plain',
                        text: 'A'
                    },
                    {
                        xtype: 'button',
                        id: 'btncolor2',
                        style: 'background: antiquewhite; border-radius: 1.3em;margin-right: 20px;',
                        ui: 'plain',
                        text: 'A'
                    },
                    {
                        xtype: 'button',
                        id: 'btncolor3',
                        style: 'background: black; border-radius: 1.3em;',
                        ui: 'plain',
                        text: 'A'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'Audio'
            },
            {
                xtype: 'sliderfield',
                width: '90%'
            }
        ]
    }

});