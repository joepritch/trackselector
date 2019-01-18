// var userName = $("input#inputName").val();
//
// function showcontent(name) {
//   $(".mainContent").show();
//   $(".userName").text("");
// }

// var mA1 = $("input:radio[name=multA1]:checked").val());
// var mA2 = $("input:radio[name=multA2]:checked").val());
// var mA3 = $("input:radio[name=multA3]:checked").val());
// var mA4 = $("input:radio[name=multA4]:checked").val());
// var mA5 = $("input:radio[name=multA5]:checked").val());
// var mResult = mA1 + mA2 + mA3 + mA4 + mA5;

$(document).ready(function()  {
  // $("#getUserName").submit(function(event) {
  //   event.preventDefault();
  //   showcontent(userName);
  // });

  // $("#showMult").click(function(event)  {
  //   $(".mult").show();
  // });
  // $("#showElim").click(function(event)  {
  //   $(".elim").show();
  // });
  $("#multQuiz").submit(function(event) {
    event.preventDefault();
    var q1a1 = parseInt($("input:radio[id=q1a1]:checked").val());
    var q1a2 = parseInt($("input:radio[id=q1a2]:checked").val());
    var q1a3 = parseInt($("input:radio[id=q1a3]:checked").val());
    var q1a4 = parseInt($("input:radio[id=q1a4]:checked").val());
    var q2a1 = parseInt($("input:radio[id=q2a1]:checked").val());
    var q2a2 = parseInt($("input:radio[id=q2a2]:checked").val());
    var q2a3 = parseInt($("input:radio[id=q2a3]:checked").val());
    var q2a4 = parseInt($("input:radio[id=q2a4]:checked").val());
    var q3a1 = parseInt($("input:radio[id=q3a1]:checked").val());
    var q3a2 = parseInt($("input:radio[id=q3a2]:checked").val());
    var q3a3 = parseInt($("input:radio[id=q3a3]:checked").val());
    var q3a4 = parseInt($("input:radio[id=q3a4]:checked").val());
    var q4a1 = parseInt($("input:radio[id=q4a1]:checked").val());
    var q4a2 = parseInt($("input:radio[id=q4a2]:checked").val());
    var q4a3 = parseInt($("input:radio[id=q4a3]:checked").val());
    var q4a4 = parseInt($("input:radio[id=q4a4]:checked").val());
    var q5a1 = parseInt($("input:radio[id=q5a1]:checked").val());
    var q5a2 = parseInt($("input:radio[id=q5a2]:checked").val());
    var q5a3 = parseInt($("input:radio[id=q5a3]:checked").val());
    var q5a4 = parseInt($("input:radio[id=q5a4]:checked").val());

    // var a1Total = q1a1 + q2a1 + q3a1 + q4a1 + q5a1;
    calcTotals(q1a1, q2a1, q3a1, q4a1, q5a1, q1a2, q2a2, q3a2, q4a2, q5a2, q1a3, q2a3, q3a3, q4a3, q5a3, q1a4, q2a4, q3a4, q4a4, q5a4)
  });

});

function calcTotals(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t)  {
  var a1Total = 1;
  if (a === 1)  {
    var a1Total = a1Total + 1;
  } else {
    var a1Total = a1Total + 0;
  }
  if (b === 1)  {
    var a1Total = a1Total + 1;
  } else {
    var a1Total = a1Total + 0;
  }
  if (c === 1)  {
    var a1Total = a1Total + 1;
  } else {
    var a1Total = a1Total + 0;
  }
  if (d === 1)  {
    var a1Total = a1Total + 1;
  } else {
    var a1Total = a1Total + 0;
  }
  if (e === 1)  {
    var a1Total = a1Total + 1;
  } else {
    var a1Total = a1Total + 0;
  }
  var a2Total = 1;
  if (f === 1)  {
    var a2Total = a2Total + 1;
  } else {
    var a2Total = a2Total + 0;
  }
  if (g === 1)  {
    var a2Total = a2Total + 1;
  } else {
    var a2Total = a2Total + 0;
  }
  if (h === 1)  {
    var a2Total = a2Total + 1;
  } else {
    var a2Total = a2Total + 0;
  }
  if (i === 1)  {
    var a2Total = a2Total + 1;
  } else {
    var a2Total = a2Total + 0;
  }
  if (j === 1)  {
    var a2Total = a2Total + 1;
  } else {
    var a2Total = a2Total + 0;
  }
  var a3Total = 1;
  if (k === 1)  {
    var a3Total = a3Total + 1;
  } else {
    var a3Total = a3Total + 0;
  }
  if (l === 1)  {
    var a3Total = a3Total + 1;
  } else {
    var a3Total = a3Total + 0;
  }
  if (m === 1)  {
    var a3Total = a3Total + 1;
  } else {
    var a3Total = a3Total + 0;
  }
  if (n === 1)  {
    var a3Total = a3Total + 1;
  } else {
    var a3Total = a3Total + 0;
  }
  if (o === 1)  {
    var a3Total = a3Total + 1;
  } else {
    var a3Total = a3Total + 0;
  }
  var a4Total = 1;
  if (p === 1)  {
    var a4Total = a4Total + 1;
  } else {
    var a4Total = a4Total + 0;
  }
  if (q === 1)  {
    var a4Total = a4Total + 1;
  } else {
    var a4Total = a4Total + 0;
  }
  if (r === 1)  {
    var a4Total = a4Total + 1;
  } else {
    var a4Total = a4Total + 0;
  }
  if (s === 1)  {
    var a4Total = a4Total + 1;
  } else {
    var a4Total = a4Total + 0;
  }
  if (t === 1)  {
    var a4Total = a4Total + 1;
  } else {
    var a4Total = a4Total + 0;
  }
  tallyResults(a1Total, a2Total, a3Total ,a4Total)
}

function tallyResults(a1, a2, a3, a4) {
  if (a1 > a2 && a3 && a4)  {
    $(".aLang").show();
  } else if (a2 > a1 && a3 && a4) {
    $(".bLang").show();
  } else if (a3 > a1 && a2 && a4) {
    $(".cLang").show();
  } else if (a4 > a1 && a2 && a3) {
    $(".dLang").show();
  } else tieBreaker(a1, a2, a3, a4)
}

function tieBreaker(a1, a2, a3, a4){
  $(".tieBreakerQuestion").show();
  if (a1 === a2) {
    $("#tba1").show();
    $("#tba2").show();
  } else if (a1 === a3) {
    $("#tba1").show();
    $("#tba3").show();
  } else if (a1 === a4) {
    $("tba1").show();
    $("tba4").show();
  } else if (a2 === a3) {
    $("#tba2").show();
    $("#tba3").show();
  } else if (a2 === a4) {
    $("#tba2").show();
    $("tba4").show();
  } else if (a3 === a4) {
    $("#tba3").show();
    $("tba4").show();
  } else {
    alert("the code didn't work!")
  }
}
