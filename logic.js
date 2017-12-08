/* global moment firebase */
// Initialize Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtIQxmj7hyIdhYBeIdCxsxNmwpa3B3ZBI",
    authDomain: "time-tracker-33513.firebaseapp.com",
    databaseURL: "https://time-tracker-33513.firebaseio.com",
    projectId: "time-tracker-33513",
    storageBucket: "",
    messagingSenderId: "856633008235"
  };

  firebase.initializeApp(config);


  database.ref("/bidderData").on("value", function(snapshot) {

  var employeeData = database.ref("/employeeData");

// Upon submit click
$("#submit-name").on("click", function(event) {
  event.preventDefault();

  var name = $("#name").val().trim();
  var role = $("#role").val().trim();
  var startdate = $("#start-date").val().trim();
  var rate = parseInt($("#monthly-rate").val().trim());

  database.ref("/employeeData").set({
      name: name,
      role: role,
      startdate: start-date,
      rate: monthly-rate
    });