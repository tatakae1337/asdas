Ext.define('LoginAppDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['LoginAppDemo.user.Profile'],
    views: ['LoginForm', 'Viewport'],
    init: function () {
        this.control({ // "Привязываем" события
            'button[id=testButton]': { // кнопке с id=testButton
                click: this.testButtonAction // по клику выполнить функцию testButtonAction
            }
        });
    },

    testButtonAction: function (button, e, options) {
        Ext.create("LoginAppDemo.view.Viewport");
        //
        //var login.close;
        //var viewport = Ext.create('Ext.data.Store', {
        //    storeId: 'simpsonsStore',
        //    fields: ['login', 'password', 'role'],
        //    data: [
        //        { login: 'login1', password: '123456', role: 'user' },
        //        { login: 'login2', password: 'qwerty', role: 'user' },
        //        { login: 'admin', password: 'hasdasda', role: 'admin' },
        //        { login: 'login3', password: '54321', role: 'user' }
        //    ]
        //});

        //Ext.create('Ext.grid.Panel', {
        //    title: 'Users',
        //    store: Ext.data.StoreManager.lookup('simpsonsStore'),
        //    columns: [
        //        { text: 'login', dataIndex: 'login' },
        //        { text: 'Password', dataIndex: 'password', flex: 1 },
        //        { text: 'Role', dataIndex: 'role' }
        //    ],
        //    height: 200,
        //    width: 400,
        //    renderTo: Ext.getBody()
        //});
    }
});

       
//    init: function(application) {
//        this.control({
//            "loginform": {
//                login: this.onLogin
//            }
//        });
//    },


//    onLogin: function(loginDialog,loginForm,loginCredentials) {
//    	console.log(loginCredentials);

//    	var me = this;

//    	// authenticate
//    	Ext.Ajax.request({
//    		url: 'resources/sampledata/cred.json',
//    		params: {
//    			username: loginCredentials.username,
//    			password: loginCredentials.password
//    		},
//    		success: function(response) {
    			
//    			var data = Ext.decode(response.responseText);
    			
//    			if (data.firstName) {

//    				// instantiate user info in global scope for easy referencing
//    				LoginAppDemo.User = Ext.create("LoginAppDemo.user.Profile", {
//    					firstName: data.firstName,
//    					lastName: data.lastName,
//    					roles: data.roles
//    				});

//    				// destroy login dialog
//    				loginDialog.destroy();


//    				Ext.Msg.alert("Login Successful",
//    							  Ext.String.format("Welcome {0} {1}",
//    							  					LoginAppDemo.User.getFirstName(),
//    							  					LoginAppDemo.User.getLastName())
//    				);

//    				// load main UI
//    				Ext.create("LoginAppDemo.view.Viewport");


//    			} else {
//    				Ext.Msg.alert("Invalid credentials","You entered invalid credentials.", function() {
//    					loginForm.getForm().reset();
//    				})
//    			}
//    		}
//    	});


//    }
//});



