Ext.define('eBook.controller.MainController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            booklist: 'dataview#booklist',
            btnbrandingicon: 'button#btnbrandingicon',
            btnlibrary: 'button#btnlibrary',
            btnmenu: 'button#btnmenu',
            btnrecent: 'button#btnrecent',
            btnsearch: 'button#btnsearch',
            btnsetting: 'button#btnsetting',
            btnchat: 'button#btnchat',
            btnmessage: 'button#btnmessage',
            recentbook: 'panel#mypanel',
            recentbooklist: 'dataview#recentbooklist',
            setting: 'panel#settingpanel',
            btndecrease: 'button#btndecrease',
            btndinrease: 'button#btndinrease',
            btncolor1: 'button#btncolor1',
            btncolor2: 'button#btncolor2',
            btncolor3: 'button#btncolor3',
            showBookPnl: 'showbook'
        },

        control: {
            "recentbooklist": {
                itemtap: 'onRecentBookListItemTap'
            },
            "btnlibrary": {
                tap: 'onLibraryButtonTap'
            },
            "btnmenu": {
                tap: 'onMenuButtonTap'
            },
            "btnrecent": {
                tap: 'onRecentBookButtonTap'
            },
            "btnsearch": {
                tap: 'onSearchButtonTap'
            },
            "btnsetting": {
                tap: 'onSettingButtonTap'
            },
            "btnchat": {
                tap: 'onChatButtonTap'
            },
            "btnmessage": {
                tap: 'onMessageButtonTap'
            },
            "btndecrease": {
                tap: 'OndecreseButtonTap'
            },
            "btndinrease": {
                tap: 'onIncreaseButtonTap'
            },
            "btncolor1": {
                tap: 'onColor1ButtonTap'
            },
            "btncolor2": {
                tap: 'onColor2ButtonTap'
            },
            "btncolor3": {
                tap: 'onColor3ButtonTap'
            }
        }
    },

    onRecentBookListItemTap: function(dataview, index, target, record, e, eOpts) {
        var dis=this.getBtnrecent();
        if(record.data.id==1){
            dis.setHtml(record.data.name+","+record.data.writer);
        }else if(record.data.id==2){
          dis.setHtml(record.data.name+","+record.data.writer);
        }
        else  if(record.data.id==3){
          dis.setHtml(record.data.name+","+record.data.writer);
        }
        else if(record.data.id==4){
          dis.setHtml(record.data.name+","+record.data.writer);
        }
        this.getRecentbook().setHidden(true);
    },

    onLibraryButtonTap: function(button, e, eOpts) {

    },

    onMenuButtonTap: function(button, e, eOpts) {

    },

    onRecentBookButtonTap: function(button, e, eOpts) {
        debugger;
        this.getRecentbook().showBy(button);
    },

    onSearchButtonTap: function(button, e, eOpts) {

    },

    onSettingButtonTap: function(button, e, eOpts) {
        this.getSetting().showBy(button);
    },

    onChatButtonTap: function(button, e, eOpts) {

    },

    onMessageButtonTap: function(button, e, eOpts) {

    },

    OndecreseButtonTap: function(button, e, eOpts) {
        var dis=this;
        if(gblfontsize>=14){
            gblfontsize=gblfontsize-2;
            dis.getShowBookPnl().setStyle('font-size:'+gblfontsize+'px');
        }
    },

    onIncreaseButtonTap: function(button, e, eOpts) {
            gblfontsize=gblfontsize+2;
            this.getShowBookPnl().setStyle('font-size:'+gblfontsize+'px');
    },

    onColor1ButtonTap: function(button, e, eOpts) {
        this.getShowBookPnl().setStyle('background:#FFF');
    },

    onColor2ButtonTap: function(button, e, eOpts) {
        this.getShowBookPnl().setStyle('background:antiquewhite');
    },

    onColor3ButtonTap: function(button, e, eOpts) {
        debugger;
        this.getShowBookPnl().setStyle('background:#000');
    },

    launch: function() {
        Ext.getCmp('maincard').setActiveItem(0);
        gblfontsize=14;
    }

});