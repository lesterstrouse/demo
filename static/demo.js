var idx = int(index);
 
var targetDiv = d3.select(".cat-div");
targetDiv.html("<img src='static/test/cat/cat_"+idx+".jpg' class='img-thumbnail' />");
  
var targetDiv = d3.select(".cow-div");
targetDiv.html("<img src='static/test/cow/cow_"+idx+".jpg' class='img-thumbnail' />");
  
var targetDiv = d3.select(".dog-div");
targetDiv.html("<img src='static/test/dog/dog"+idx+".jpg' class='img-thumbnail' />");
  
var targetDiv = d3.select(".shp-div");
targetDiv.html("<img src='static/test/sheep/sheep"+idx+".jpg' class='img-thumbnail' />");
  
    
d3.selectAll(".img-thumbnail").on("click",function(){
var surl = d3.select(this).attr("src");
var simage = this;

$.ajax(
  {
      type:'POST',
      contentType:'application/json;charset-utf-08',
      dataType:'json',
      url:'http://127.0.0.1:5000/pass_val?value='+surl ,
      success:function (data) {
          var reply=data.reply;
          if (reply=="success")
          {
              return;
          }
          else
              {
              alert("some error occurred in session agent")
              }

      }
  }
);
console.log(surl);
})