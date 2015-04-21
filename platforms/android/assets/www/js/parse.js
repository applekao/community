$(document).ready(function(){
	Parse.initialize("iMyUdfPQnXeU1bTHi3f8jhRw5oCx40UxvMfcicno", "l9FRYJvJ5p8kTx4tNqhv7jhcBYJok4I4nHPWOcFy");
	

	var Prayer = Parse.Object.extend("Prayer");
	$('#send').click(function(){

		prayer = document.getElementById('prayer');
		var input = prayer.value;

		var savePrayer = new Prayer();
		savePrayer.set("prayer",input);
		savePrayer.save(null,{
			success:function(savePrayer){
				window.location.reload();


			},
			error:function(savePrayer){
				alert("Fail to post a prayer, with error code:"+error.description);
			}
		});


		queryPrayer.find();
	});

	var queryPrayer = new Parse.Query(Prayer);
	queryPrayer.find({
		success: function(results){

			for (var i =  results.length-1; i >0; i--) { 
				var object = results[i]._serverData.prayer;
				var objectId = results[i].id;
				$("#PrayContainer").append("<div class='ui-content'>" + "<div class='ui-body ui-body-a' background-color='gray'> <p align='center'>" + object + "</P> <button class='ui-btn' id='" + objectId + "' onclicK= 'myfunction(" + objectId + ")''>PRAY NOW</button><div align=right >12 prayers</div></div>" + "</div>");
			}
		},

		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}

	});


});




































// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });

// var user = new Parse.User();
// user.set("username", "my name");
// user.set("password", "my pass");
// user.set("email", "email@example.com");

// other fields can be set just like with Parse.Object
//user.set("phone", "650-555-0000");

// user.signUp(null, {
//   success: function(user) {
//     // Hooray! Let them use the app now.
//   },
//   error: function(user, error) {
//     // Show the error message somewhere and let the user try again.
//     alert("Error: " + error.code + " " + error.message);
//   }
// });

// Parse.User.logIn("myname", "mypass", {
//   success: function(user) {
//     // Do stuff after successful login.
//   },
//   error: function(user, error) {
//     // The login failed. Check error to see why.
//   }
// });

// var currentUser = Parse.User.current();
// if (currentUser) {
//     // do stuff with the user
// } else {
//     // show the signup or login page
// }
