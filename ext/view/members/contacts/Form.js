Ext4.define('App.view.members.contacts.Form', {
    extend: 'Ext.form.Panel',
    uses: [ 'Ext.form.field.Text' ],
    stateful: true,
    bodyPadding: 10,
    border: false,
    items: [{
        xtype: 'textfield',
        name: 'subject',
        fieldLabel: trl('Subject')
    },{
        xtype: 'textarea',
        name: 'text',
        fieldLabel: trl('Text')
    }]
});