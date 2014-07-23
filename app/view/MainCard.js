Ext.define('eBook.view.MainCard', {
	extend : 'Ext.Container',
	alias : 'widget.MainCard',
	xtype : 'mainCard',
	config : {
		layout : 'card',
		items : [{
			xtype : 'toolbar',
			docked : 'top',
			id:'toptoolbar',
			title : 'E - Book',
			items : [{
				xtype : 'button',
				text : 'Back',
				ui : 'back',
				hidden:true,
				action : 'backBtn'
			}]
		},{
			xtype:'menu'
		}]
	}
});
