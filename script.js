$(document).ready(function() {
  displayContent()
})

const displayContent = () => {
  //$(".loader").addClass("loading")
  $('body').addClass("loading")
  $.ajax({
  type:"GET",
  url:"https://test.cors.workers.dev/?https://www.bloomberght.com/piyasa/intradaydata/dolar",
  dataType: 'json',
  success: function(data) {
    var results = $(data.SeriesData.splice(data.SeriesData.length-10).reverse())
      $(results).each(function(index,item) {
        $('.table tbody').append(
          '<tr><td>'+ (index + 1) +
          '</td><td>' + item[1] +
          '</td><td>' + new Date(item[0]).toLocaleString() +
          '</td></tr>'
        )
      })
    },
  });
  setTimeout(function(){
    //$('.loader').removeClass("loading")
    $('body').removeClass("loading")
  },1500)
}

$('.btn').click(function() {
  $('tbody').empty()
  displayContent()
})