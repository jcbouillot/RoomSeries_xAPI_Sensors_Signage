function backgr(){
    var backimg = ["./images/webex_night.jpg","./images/webex_dark.jpg","./images/webex_afternoon.jpg","./images/webex_morning.jpg","./images/webex_spiral1.jpg","./images/webex_spiral2.jpg","./images/webex_spiral3.jpg","./images/webex_spiral4.jpg"];
    var randimg =Math.floor(Math.random()*8);
    document.body.background = backimg[randimg];
    }

function getData() {
    var settings = {
        url: "https://webexapis.com/v1/xapi/status?deviceId=Y2lzY29zcGFyazovL3VybjpURUFNOnVzLXdlc3QtMl9yL0RFVklDRS8zZTkzZWQ1Ni0yZTBhLTRiMGQtODcwMi0wNTE3OTcxNjhlYWY&name=*.*",
        method: "GET",
        timeout: 0,
        headers: {Authorization: "Bearer YjU1NWY0YjEtNWU0Yi00YmEzLWJiMWMtYmI4NDQyMWY2NWRjMDE1ODgyOGEtODBj_P0A1_3f583651-ecd1-49e2-bf45-cf75e5f54d08",},
    };

    $.ajax(settings).done(function (response) {
        var AmbientNoise = response.result.RoomAnalytics.AmbientNoise.Level.A;
        var SoundLevel = response.result.RoomAnalytics.Sound.Level.A;
        var RT60 = response.result.RoomAnalytics.ReverberationTime.Middle.RT60;
        var PeoplePresence = response.result.RoomAnalytics.PeoplePresence;
        var Current = response.result.RoomAnalytics.PeopleCount.Current;
        var Capacity = response.result.RoomAnalytics.PeopleCount.Capacity;
        var Name = response.result.UserInterface.ContactInfo.Name;
        var Humidity = response.result.Peripherals.ConnectedDevice[0].RoomAnalytics.RelativeHumidity;
        var Temperature = response.result.Peripherals.ConnectedDevice[0].RoomAnalytics.AmbientTemperature;
        var AirQualityIndex = response.result.Peripherals.ConnectedDevice[0].RoomAnalytics.AirQuality.Index;
        var BookingStatus = response.result.Bookings.Availability.Status;
        var BookingTime = response.result.Bookings.Availability.TimeStamp;
        var Software = response.result.SystemUnit.Software.DisplayName;
        var ReleaseDate = response.result.SystemUnit.Software.ReleaseDate;

        $("#AmbientNoise").html(AmbientNoise + " dBA");
        $("#SoundLevel").html(SoundLevel + " dBA");
        $("#RT60").html(RT60 / 1000 + "s");
        $("#PeoplePresence").html(PeoplePresence == "Yes" ? "In use" : PeoplePresence);
        $("#Current").html(Current);
        $("#Capacity").html(Capacity);
        $("#Name").html(Name);
        $("#Humidity").html(Humidity + "%");
        $("#Temperature").html(Temperature + " °C");
        $("#AirQuality").html(AirQualityIndex + " TVOC");
        $("#BookingStatus").html(BookingStatus);
        $("#BookingTime").html(BookingTime);
        $("#Software").html(Software);
        $("#ReleaseDate").html(ReleaseDate);
    });
}

//Getting data immediately, just once
getData();

//Getting data every 3 seconds after that
setInterval(getData, 3000);
