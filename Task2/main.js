var detData = {
  "00": {
    fio: "Смородина Алена Александровна",
    phoneNumber: "0987658923",
    mail: "alenasmorodina@gmail.com",
    skype: "alenasmorodina",
    comment: "Встреча завтра на 11:00.",
    added: "31.10.2020",
    age: "18",
    married: "не замужем",
    job: "переводчик",
    education: "Высшее, КИМО, международное право",
  },
  "01": {
    fio: "Мироненнко-Коновалов Александр Игнатьевич",
    phoneNumber: "0506123123",
    mail: "milanovalex@ua.fm",
    skype: "Milanovalex",
    comment: "Созвониться в пятницу 05.07.2019.",
    added: "21.05.2018",
    age: "23",
    married: "холост",
    job: "Фора, касир",
    education: "Высшее, НТУУ КПИ, Финансы и кредит",
  },
  "02": {
    fio: "Зайченко Валентина Александровна",
    phoneNumber: "0966671290",
    mail: "zay4enkovalya@mail.ru",
    skype: "zay4enkovalya",
    comment: "Очень занят в ближайшие 2 недели. 10.05.2019.",
    added: "31.10.2020",
    age: "28",
    married: "за мужем",
    job: "Фора, зав.складом",
    education: "Высшее, Нархоз, Менеджмент",
  },
};

$(document).ready(function () {
  $("#mainTable .table__row").click(function () {
    $(".table").css("flex-grow", "unset");
    $(".table__col--width-long").css("width", "auto");
    $(".right").css("text-align", "right");
    $(".table__row--borders")
      .css("border", "1px solid black")
      .css("width", "350px");
    $(".no-borders").css("border", "0px solid white");
    $(".small").css("font-size", "small");
    $(".table__col--flex-container-card").css("flex-direction", "column");
    $(".details-table").removeClass("hidden");
    $(".table__col--skype").addClass("hidden");
    $(".table__col--comments").addClass("hidden");
    $(".table__col--head").addClass("hidden");
    $(".table__col--flex-switch")
      .removeClass("table__col--flex-R-R")
      .addClass("table__col--flex-R-C");

    $(this)
      .addClass("table__row--active")
      .siblings()
      .removeClass("table__row--active");
    var id = $(this).attr("id");
    $("#added").text(detData[id].added);
    $("#age").text(detData[id].age);
    $("#married").text(detData[id].married);
    $("#job").text(detData[id].job);
    $("#education").text(detData[id].education);
  });

  $(".details-table")
    .find("button")
    .on("click", function () {
      $(".table").css("flex-grow", "1");
      $(".table__col--width-long").css("width", "180px");
      $(".right").css("text-align", "left");
      $(".small").css("font-size", "initial");
      $(".no-borders").css("border", "1px solid black");
      $(".table__row--borders")
        .css("border", "0px solid white")
        .css("width", "auto");
      $(".table__col--flex-container-card").css("flex-direction", "row");
      $(".table__col--flex-switch").removeClass("table__col--flex-R-C");
      $(".table__col--flex-switch").addClass("table__col--flex-R-R");
      $(".details-table").addClass("hidden");
      $(".table__col--skype").removeClass("hidden");
      $(".table__col--comments").removeClass("hidden");
      $(".table__col--head").removeClass("hidden");
      $("#mainTable .table__row").removeClass("table__row--active");
    });
});
