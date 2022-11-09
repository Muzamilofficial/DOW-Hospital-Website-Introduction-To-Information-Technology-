function carousel() {var myIndex = 0;
carousel();

  var i;
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}
		function loginaccess() 
		{
			var myusername = document.getElementById('user').value;
			var myphonenumber = document.getElementById('num').value;
			var myaddress = document.getElementById('address').value;
			var myday = document.getElementById('day').value;
			var mytime = document.getElementById('time').value;
			var myname = document.getElementById('name').value;
			if (myusername=='Ibrahim' && myphonenumber=='03353927165' && myaddress=='Airport' && myday=='monday' && mytime=='12 PM' && myname=='DrArooba') 
				alert ('Your Appointment Has Been Booked!! Thank You For Using Our Service');
			else
				alert('Please Fill Your Correct Information');
		}

		function loginaccess2() 
		{
			var mypayment = document.getElementById('payment').value;
			var myfirstname  = document.getElementById('first').value;
			var mylastname = document.getElementById('last').value;
			var myemail = document.getElementById('email').value;
			var myaddress = document.getElementById('address').value;
			var mycountry = document.getElementById('country').value;
			var mycity = document.getElementById('city').value;
			var mynumber = document.getElementById('number').value;
			if (mypayment=='Zakat' && myfirstname=='Muhammad' && mylastname=='Ibrahim' && myemail=='ik7073068@gmail.com' && myaddress=='Airport' && mycountry=='Pakistan' && mycity=='karachi' && mynumber=='03353927165') 
				alert ('Your Payment Has Been Recieved!! Thanks For Using Our Service');
			else
				alert('Please Fill Your Correct Information');
		}

		