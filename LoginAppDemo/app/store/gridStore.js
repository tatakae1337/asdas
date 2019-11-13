Ext.define('app.store.gridStore', {
    extend: 'Ext.data.Store',

    autoLoad: true,
    storeId: 'gridStoreId',
    proxy: {
        type: 'ajax',
        url: '../../Bank/Bank',
        reader: {
            type: 'json'

        }
        //
    }
});