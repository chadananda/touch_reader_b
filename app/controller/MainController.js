Ext.define('eBook.controller.MainController', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			mainCard:'mainCard',
			backBtn:'mainCard>toolbar>button[action=backBtn]',
			showBookList : 'showBook>list[name=showBookList]',
			library_Btn:'menu>panel>panel>button[action=library_Btn]',
			studyprojectsBtn:'menu>panel>panel>button[action=studyprojectsBtn]',
			userSettingsBtn:'menu>panel>panel>button[action=userSettingsBtn]'

		},
		control : {
			showBookList : {
				itemtap : 'onShowBookList'
			},
			backBtn:{
				tap:'onBackBtn'
			},
			library_Btn:{
				tap:'onlibrary_Btn'
			},
			studyprojectsBtn:{
				tap:'onStudyprojectsBtn'
			},
			userSettingsBtn:{
				tap:'onUserSettingsBtn'
			}
		}
	},
	onShowBookList:function(fields, index, target, record, e, eOpts){
		
		
		if(!this.readBook) {
			this.readBook = Ext.widget('readBook');
		}
		Ext.getCmp('pdfReaders').setSrc(record.data.bookSrc);

		this.getMainCard().animateActiveItem(this.readBook, {
			type : 'slide',
			direction : 'left'
		});
		this.getBackBtn().setHidden(false);
	},

	onBackBtn:function(){
		
		var me = this;
		var itId = me.getMainCard().getActiveItem().getItemId();
		itId = itId.split('-');
		switch(itId[1]) {
			case "readBook":
				if(!me.showBook) {
					me.showBook = Ext.widget('showBook');
				}
				me.getMainCard().animateActiveItem(me.showBook, {
					type : 'slide',
					direction : 'right'
				});
				Ext.getCmp('toptoolbar').setTitle('E - Book');
				me.getBackBtn().setHidden(true);
			break;

			case "showBook":
				if(!me.menu) {
					me.menu = Ext.widget('menu');
				}
				me.getMainCard().animateActiveItem(me.menu, {
					type : 'slide',
					direction : 'right'
				});
				me.getBackBtn().setHidden(true);
				Ext.getCmp('toptoolbar').setTitle('E - Book');
				
			break;

			default:
				if(!me.menu) {
					me.menu = Ext.widget('menu');
				}
				me.getMainCard().animateActiveItem(me.menu, {
					type : 'slide',
					direction : 'right'
				});
				me.getBackBtn().setHidden(true);
				Ext.getCmp('toptoolbar').setTitle('E - Book');

		}
	},

	onlibrary_Btn:function(){
		if(!this.showBook) {
			this.showBook = Ext.widget('showBook');
		}
		this.getMainCard().animateActiveItem(this.showBook, {
			type : 'slide',
			direction : 'left'
		});
		Ext.getCmp('toptoolbar').setTitle('E - Book');
		this.getBackBtn().setHidden(false);
	},

	onStudyprojectsBtn:function(){
		Ext.Msg.alert('info','Work under process');
	},

	onUserSettingsBtn:function(){
		Ext.Msg.alert('info','Work under process');
	}

});
