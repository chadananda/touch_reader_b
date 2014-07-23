Ext.define('eBook.store.ShowBookData', {
	extend : 'Ext.data.Store',
	config : {
		//model : 'QuizApp.model.ShowBookData'
		data : [
	        {id: "1",page:"resources/images/images.jpg",bookSrc:'resources/PDFDatas/tracemonkey.pdf',date:"21 Oct 2013",writer:"Author 1", name: "Book 1"},
	        {id: "2",page:"resources/images/RH_MarkFinancial_FrontPage.jpg",bookSrc:'resources/PDFDatas/tracemonkey.pdf',date:"11 Mar 2013",writer:"Author 2", name: "Book 2"},
	        {id: "3",page:"resources/images/shadow.jpg",bookSrc:'resources/PDFDatas/ebookshowto.pdf',date:"01 Jan 2013",writer:"Author 3", name: "Book 3"},
	        {id: "4",page:"resources/images/spanish.jpg",bookSrc:'resources/PDFDatas/tracemonkey.pdf',date:"23 Jul 2012",writer:"Author 4", name: "Book 4"}
	    ]
	}
});
