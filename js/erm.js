window.onload=function(){

// var resources_table = $('#resources').DataTable( {
//         scrollY:        "300px",
//         scrollX:        true,
//         scrollCollapse: true,
//         paging:         false,
//         "sort": false,
//         "order": [],
//         "searching": false,
//         fixedColumns:   {
//             leftColumns: 5,
//             rightColumns: 1
//         }
//     } );
var resourcesDetailProject_table = $('#resourcesProjectDetails').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        "sort": false,
        "order": [],
        "searching": false,
        fixedColumns:   {
            leftColumns: 4,
            rightColumns: 1
        }
    } );

var asignNewPorject = $('#asignNewPorject').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        "sort": false,
        "order": [],
        "searching": false,
        fixedColumns:   {
            leftColumns: 5,
            rightColumns: 1
        }
    } );

var projectResourcesDetails = $('#projectResourcesDetails').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        "sort": false,
        "order": [],
        "searching": false,
        fixedColumns:   {
            leftColumns: 3,
            rightColumns: 1
        }
    } );

var resourcesAssigned = $('#resourcesAssigned').DataTable( {
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        "sort": false,
        "order": [],
        "searching": false,
        fixedColumns:   {
            leftColumns: 3,
            rightColumns: 1
        }
    } );
$(document).ready(function(){


  $("body").on('click','.skill-container li label', function(e){
    // console.log('i m in skill-container');
    var selectedSkill = $(this).text();
    var selectedSkillId = $(this).attr('for');
    //console.log(selectedSkill + "--> "+ selectedSkillId);
    //var currentStatus = $(this).prev();
    $(this).parents().find('.selected-technologies').append("<label name="+selectedSkillId+">"+selectedSkill+"<i class='material-icons'>close</i></label");
  });
$("body").on('click','.selected-technologies label i', function(){
  $(this).parent('label').remove();
  $("#"+$(this).parent('label').attr("name")).click();
})
  $("body").on('click','.dropdown-menu li', function(e){
     var initStatusTxt = $(this).parent().prev().children('.txt').text();
     var initStatusVal = $(this).parent().prev().children('.txt').attr('value');
//console.log("ji");
     var statusTxt = $(this).text().replace(/done/g, '');
     var statusVal = $(this).attr('value');
     $(this).parent().prev().children('.txt').text(statusTxt);
     $(this).parent().prev().children('.txt').attr('value', statusVal);
     $(this).parent().children().removeClass('selected');
     //$(this).parent().find('i').remove();
     $(this).addClass('selected');
  
   
   //$(this).prepend('<i class="material-icons">done</i>');
});


  //Initialize the datePicker(I have taken format as mm-dd-yyyy, you can     //have your owh)
  $('.weeklyDatePicker1').datetimepicker({
    useCurrent: false,
    format: 'MM-DD-YYYY'
   });
   $('.weeklyDatePicker2').datetimepicker({
       useCurrent: false, //Important! See issue #1075
       format: 'MM-DD-YYYY'
   });
   $('.weeklyDatePicker3').datetimepicker({
    useCurrent: false,
    format: 'MM-DD-YYYY'
   });
   $('.weeklyDatePicker4').datetimepicker({
       useCurrent: false, //Important! See issue #1075
       format: 'MM-DD-YYYY'
   });
   $('.weeklyDatePicker5').datetimepicker({
    useCurrent: false,
    format: 'MM-DD-YYYY'
   });
   $('.weeklyDatePicker6').datetimepicker({
       useCurrent: false, //Important! See issue #1075
       format: 'MM-DD-YYYY'
   });
   $(".weeklyDatePicker1").on("dp.change", function (e) {
       $('.weeklyDatePicker2').data("DateTimePicker").minDate(e.date);
   });
   $(".weeklyDatePicker2").on("dp.change", function (e) {
       $('.weeklyDatePicker1').data("DateTimePicker").maxDate(e.date);
   });

   $(".weeklyDatePicker3").on("dp.change", function (e) {
       $('.weeklyDatePicker4').data("DateTimePicker").minDate(e.date);
   });
   $(".weeklyDatePicker4").on("dp.change", function (e) {
       $('.weeklyDatePicker3').data("DateTimePicker").maxDate(e.date);
   });

   $(".weeklyDatePicker5").on("dp.change", function (e) {
       $('.weeklyDatePicker6').data("DateTimePicker").minDate(e.date);
   });
   $(".weeklyDatePicker6").on("dp.change", function (e) {
       $('.weeklyDatePicker5').data("DateTimePicker").maxDate(e.date);
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

   $('.weeklyDatePicker3').on('dp.change', function (e) {
      var value = $(".weeklyDatePicker3").val();
      var firstDate3 = moment(value, "MM-DD-YYYY").day(1).format("MM-DD-YYYY");
      var lastDate3 =  moment(value, "MM-DD-YYYY").day(5).format("MM-DD-YYYY");
      $(".weeklyDatePicker3").val(firstDate3);
      //$(".weeklyDatePicker1").val(firstDate1 + " - " + lastDate1);
  });
 

  $('.weeklyDatePicker4').on('dp.change', function (e) {
      var value = $(".weeklyDatePicker4").val();
      var firstDate4 = moment(value, "MM-DD-YYYY").day(1).format("MM-DD-YYYY");
      var lastDate4 =  moment(value, "MM-DD-YYYY").day(5).format("MM-DD-YYYY");
      $(".weeklyDatePicker4").val(firstDate4);
      //$(".weeklyDatePicker2").val(firstDate2 + " - " + lastDate2);
  });

  $('.weeklyDatePicker5').on('dp.change', function (e) {
      var value = $(".weeklyDatePicker5").val();
      var firstDate3 = moment(value, "MM-DD-YYYY").day(1).format("MM-DD-YYYY");
      var lastDate3 =  moment(value, "MM-DD-YYYY").day(5).format("MM-DD-YYYY");
      $(".weeklyDatePicker5").val(firstDate3);
      //$(".weeklyDatePicker1").val(firstDate1 + " - " + lastDate1);
  });
 

  $('.weeklyDatePicker6').on('dp.change', function (e) {
      var value = $(".weeklyDatePicker6").val();
      var firstDate4 = moment(value, "MM-DD-YYYY").day(1).format("MM-DD-YYYY");
      var lastDate4 =  moment(value, "MM-DD-YYYY").day(5).format("MM-DD-YYYY");
      $(".weeklyDatePicker6").val(firstDate4);
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