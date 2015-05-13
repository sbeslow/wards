function findAlderman(enteredWard) {

    if (enteredWard < 1 || enteredWard > 50) {
        alert("This is not a valid ward number");
        return;
    }

    $.getJSON("https://data.cityofchicago.org/resource/htai-wnw4.json?ward=" + enteredWard, function (data) {
        aldermanName = data[0].alderman;
        aldermanPhone = data[0].city_hall_phone.phone_number;
        aldermanEmail = data[0].email;
        alert("Your alderman is " + aldermanName + "\nHis/Her phone number is: " + aldermanPhone +
              "\nAnd email is: " + aldermanEmail);
    });
}