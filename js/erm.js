window.onload=function(){
  $(document).ready(function() {
    var table = $('#resources').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   {
            leftColumns: 3,
            rightColumns: 1
        }
    } );

});


  
$(document).ready(function(){

  //Initialize the datePicker(I have taken format as mm-dd-yyyy, you can     //have your owh)
  $('.weeklyDatePicker1').datetimepicker({
    useCurrent: false,
    format: 'MM-DD-YYYY'
   });
   $('.weeklyDatePicker2').datetimepicker({
       useCurrent: false, //Important! See issue #1075
       format: 'MM-DD-YYYY'
   });
   $(".weeklyDatePicker1").on("dp.change", function (e) {
       $('.weeklyDatePicker2').data("DateTimePicker").minDate(e.date);
   });
   $(".weeklyDatePicker2").on("dp.change", function (e) {
       $('.weeklyDatePicker1').data("DateTimePicker").maxDate(e.date);
   });

 $('.weeklyDatePicker1').on('dp.change', function (e) {
      var value = $(".weeklyDatePicker1").val();
      var firstDate1 = moment(value, "MM-DD-YYYY").day(1).format("MM-DD-YYYY");
      var lastDate1 =  moment(value, "MM-DD-YYYY").day(5).format("MM-DD-YYYY");
      $(".weeklyDatePicker1").val(firstDate1);
      //$(".weeklyDatePicker1").val(firstDate1 + " - " + lastDate1);
  });

  $('.weeklyDatePicker2').on('dp.change', function (e) {
      var value = $(".weeklyDatePicker2").val();
      var firstDate2 = moment(value, "MM-DD-YYYY").day(1).format("MM-DD-YYYY");
      var lastDate2 =  moment(value, "MM-DD-YYYY").day(5).format("MM-DD-YYYY");
      $(".weeklyDatePicker2").val(firstDate2);
      //$(".weeklyDatePicker2").val(firstDate2 + " - " + lastDate2);
  });

  // $('.weeklyDatePicker1').datetimepicker({
  //   useCurrent: false,
  //   format: 'DD/MM/YYYY'
  //  });
  //  $('.weeklyDatePicker1').datetimepicker({
  //      useCurrent: false, //Important! See issue #1075
  //      format: 'DD/MM/YYYY'
  //  });
moment.locale('en', {
        week: { dow: 1 } // Monday is the first day of the week
    });
});
}//]]> 