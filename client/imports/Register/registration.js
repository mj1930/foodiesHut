import './registration.html';

Template.signup.events({

  'click #register' : function(evt, tmpl) {
    evt.preventDefault();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var password = $("#password").val();
    var pincode = $("#pincode").val();
    var email = $("#email").val();
    var profile = {
      fname,
      lname,
      pincode
    }

    Accounts.createUser({email: email , password: password, profile: profile}, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("signup successful");
      }
    });
  }
})
