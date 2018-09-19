	document.addEventListener("deviceready",onDeviceReady,false);
	document.getElementById("createContact").addEventListener("click", createContact);
	function onDeviceReady(){
		alert("device is starting");
	function createContact() {
			var myContact = navigator.contacts.create({"displayName": "Unknown"});
			myContact.save(contactSuccess, contactError);
    
		function contactSuccess() {
			alert("Contact is saved!");
		}
	
		function contactError(message) {
			alert('Failed because: ' + message);
		}
	
	}
}			
