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
        var ConnectedDevices = response.result.Peripherals.ConnectedDevice;
        var BookingStatus = response.result.Bookings.Availability.Status;
        var BookingTime = response.result.Bookings.Availability.TimeStamp;
        var Software = response.result.SystemUnit.Software.Version;

        $("#AmbientNoise").html(AmbientNoise + " dBA");
        $("#SoundLevel").html(SoundLevel + " dBA");
        $("#RT60").html(RT60 / 1000 + "s");
        $("#PeoplePresence").html(PeoplePresence);
        $("#Current").html(Current);
        $("#Capacity").html(Capacity);
        $("#Name").html(Name);
        $("#Humidity").html(Humidity);
        $("#Temperature").html(Temperature);
        $("#AirQuality").html(AirQualityIndex);
        $("#BookingStatus").html(BookingStatus);
        $("#BookingTime").html(BookingTime);
        $("#Software").html(Software);
    });
}

//Getting data immediately, just once
getData();

//Getting data every 3 seconds after that
setInterval(getData, 3000);
