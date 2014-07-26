Ext.define('eBook.model.ShowBookData', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'src'
            },
            {
                name: 'date'
            },
            {
                name: 'writer'
            },
            {
                name: 'page'
            },
            {
                name: 'name'
            }
        ]
    }
});