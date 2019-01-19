$(document).ready(function()  {
  $("#showMult").click(function(event) {
      $(".mainContent").slideToggle();
      $("#multQ1").slideToggle();
  });

  $("#b1").click(function(event) {
      $("#multQ1").slideToggle();
      $("#multQ2").slideToggle();
  });

  $("#b2").click(function(event) {
      $("#multQ2").slideToggle();
      $("#multQ3").slideToggle();
  });

  $("#b3").click(function(event) {
      $("#multQ3").slideToggle();
      $("#multQ4").slideToggle();
  });

  $("#b4").click(function(event) {
      $("#multQ4").slideToggle();
      $("#multQ5").slideToggle();
  });

  $("#b5").click(function(event) {
      $("#multQ5").slideToggle();
  });

  $("#tba1").click(function(event) {
      $(".tieBreakerQuestion").slideToggle();
      $(".aTrack").slideToggle();
      $(".tba").hide();
  });

  $("#tba2").click(function(event) {
      $(".tieBreakerQuestion").slideToggle();
      $(".bTrack").slideToggle();
      $(".tba").hide();
  });

  $("#tba3").click(function(event) {
      $(".tieBreakerQuestion").slideToggle();
      $(".cTrack").slideToggle();
      $(".tba").hide();
  });

  $("#tba4").click(function(event) {
      $(".tieBreakerQuestion").slideToggle();
      $(".dTrack").slideToggle();
      $(".tba").hide();
  });

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
  if (a1 > a2 && a1 > a3 && a1 > a4)  {
    $(".aTrack").slideToggle();
  } else if (a2 > a1 && a2 > a3 && a2 > a4) {
    $(".bTrack").slideToggle();
  } else if (a3 > a1 && a3 > a2 && a3 > a4) {
    $(".cTrack").slideToggle();
  } else if (a4 > a1 && a4 > a2 && a4 > a3) {
    $(".dTrack").slideToggle();
  } else tieBreaker(a1, a2, a3, a4)
}

function tieBreaker(a1, a2, a3, a4){
  $(".tieBreakerQuestion").slideToggle();
  if (a1 === a2) {
    $("#tba1").slideToggle();
    $("#tba2").slideToggle();
  } else if (a1 === a3) {
    $("#tba1").slideToggle();
    $("#tba3").slideToggle();
  } else if (a1 === a4) {
    $("tba1").slideToggle();
    $("tba4").slideToggle();
  } else if (a2 === a3) {
    $("#tba2").slideToggle();
    $("#tba3").slideToggle();
  } else if (a2 === a4) {
    $("#tba2").slideToggle();
    $("#tba4").slideToggle();
  } else if (a3 === a4) {
    $("#tba3").slideToggle();
    $("#tba4").slideToggle();
  } else {
    alert("the code didn't work!")
  }
}
