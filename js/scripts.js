//business logic
function Contact(first, last, address, phone, dob) {
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.phone = phone;
  this.dob = dob;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

//user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedPhone = $("input#new-phone").val();
    var inputtedDob = $("#new-dob").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedPhone, inputtedDob);
    console.log(newContact);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".address").text(newContact.address);
    $(".phone").text(newContact.phone);
    $(".dob").text(newContact.dob);
  });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-phone").val("");
    $("input#new-dob").val("");
  });
});
