import './signin.html';

Template.login.events({

  'click #login': function(evt, tmpl) {
    evt.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    Meteor.loginWithPassword(email, password, function(err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("login");
      }
    })
  }
})
