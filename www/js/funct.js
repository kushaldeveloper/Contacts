	document.addEventListener("deviceready",onDeviceReady,false);
		
	function onDeviceReady(){
		alert("device is starting");
		document.getElementById("createContact").addEventListener("click", createContact);
	}
		//document.getElementById("findContact").addEventListener("click", findContact);
		//document.getElementById("deleteContact").addEventListener("click", deleteContact);
		function createContact() {
			//alert("......");
			var myContact = navigator.contacts.create({"displayName": "Test User"});
			alert("1234");
		};
		document.addEventListener("Success", onSuccess, false);
			function onSuccess(myContact) {
			alert("Contact is saved!");
		}
		document.addEventListener("Error", onError, false);
		function onError(message) {
			alert('Failed because: ' + message);
		}
		
		

		/*function findContacts() {
			var options = new ContactFindOptions();
			options.filter = "";
			options.multiple = true;
			fields = ["displayName"];
			navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
    
		function contactfindSuccess(contacts) {
			for (var i = 0; i < contacts.length; i++) {
			alert("Display Name = " + contacts[i].displayName);
		}
    }
	
		function contactfindError(message) {
			alert('Failed because: ' + message);
		}
	
	}
		function deleteContact() {
			var options = new ContactFindOptions();
			options.filter = "Test User";
			options.multiple = false;
			fields = ["displayName"];
	   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

		function contactfindSuccess(contacts) {
			var contact = contacts[0];
			contact.remove(contactRemoveSuccess, contactRemoveError);

      function contactRemoveSuccess(contact) {
			alert("Contact Deleted");
		}

      function contactRemoveError(message) {
			alert('Failed because: ' + message);
		}
   }

   function contactfindError(message) {
      alert('Failed because: ' + message);
		}
	
	}*/
				
