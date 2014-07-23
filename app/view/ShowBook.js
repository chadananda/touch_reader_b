Ext.define('eBook.view.ShowBook', {
    extend: 'Ext.Panel',
    xtype: 'showBook',
    config: {
        layout : 'vbox',
        items: [{
                xtype : 'list',
                disableSelection : false,
                flex : 1,
                padding : ' 7px',
                scrollToTopOnRefresh : false,
                name:'showBookList',
                store : 'ShowBookData',
                itemTpl : new Ext.XTemplate('<table width="100%"><tr><td rowspan="2" style="font-size: 15px;"><img src={page} style="width: 60px;" /></td><td><table><tr><td>Title: {name}</td></tr><tr><td>Author: {writer}</td></tr><tr><td>Release Date: {date}</td></tr></table></td></tr></table>')
            }
        ]
    }
});
