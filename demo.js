//var idx = d3.select("#idx")
var idx = 0;
var catimgs = [{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLR8U1FA/cat_1.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DDGWDQ/cat_2.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLR8U1FS/cat_3.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DDGWFL/cat_5.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLR8U1J4/cat_6.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLR8U20Y/cat_7.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP0BLK46/cat_8.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLBL08N8/cat_9.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DUPVMH/cat_10.png"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLRUTEE9/cat_4.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP0DGM0E/cat_11.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DFCNEN/cat_12.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLRWP8VB/cat_13.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DWKH5Z/cat_14.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP0DGMHU/cat_15.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DFCP2N/cat_16.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLBMRKFW/cat_17.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP0DGMDL/cat_18.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLRAQ000/cat_20.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DFCPGA/cat_19.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9E0EGKD/cat_21.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP0HBNJJ/cat_22.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLS0JBAR/cat_23.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLS0JC0M/cat_24.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DK7BRQ/cat_25.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLEFK5YGZ/cat_26.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNMBEULX/cat_27.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9E0EJ83/cat_28.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLBRLBSQ/cat_29.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLBRLC7N/cat_30.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLREQAFJ/cat_31.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLS0PHJ9/cat_32.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLEFKB3C1/cat_33.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNMBL19D/cat_34.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLREQAG0/cat_35.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNMBL0S3/cat_36.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNMBL0SK/cat_37.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLEFKB3S5/cat_38.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLBRRGKW/cat_39.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLBRRGMA/cat_40.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DKTB7C/cat_41.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLRF9XQ8/cat_42.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNMC5MGX/cat_43.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNMC5MGF/cat_44.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9E153BM/cat_45.png"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLRF9Y9E/cat_46.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9E153L3/cat_47.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP0J2BE2/cat_48.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLEFKS4GZ/cat_49.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP0J2BDL/cat_50.jpg"
}
];

var cowimgs = [{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP09N71U/cow_1.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DSRPJ7/cow_2.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP09N72S/cow_3.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DBJSPL/cow_5.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP09N7FY/cow_7.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNM3RPAT/cow_8.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLBJ2KM2/cow_10.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNM3RPB9/cow_4.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9DSRPU3/cow_6.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP09N7QE/cow_9.jpeg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLP09U8BY/cow_11.jpg"
}];

var dogimgs = [{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNCG5DN3/dog1.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNM25T4N/dog2.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL94Q44NN/dog3.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLH5D277/dog4.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLGKBUKS/dog5.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLH5D4JH/dog6.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FL9556P51/dog7.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLL2WDASG/dog8.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLH5D46R/dog9.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNCG5FJB/dog10.jpeg"
}];

var shpimgs = [{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLL2LMHE0/sheep2.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLG9LKJL/sheep3.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLE6E5J57/sheep4.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLGVLKQD/sheep5.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLL2LMH9A/sheep6.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLL2LMLJG/sheep7.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNC6DU7R/sheep8.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLNC6DVBR/sheep10.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLLG9LP4G/sheep1.jpg"
},
{
  url: "https://files.slack.com/files-pri/TD2G3LT7F-FLE6E5LP3/sheep9.jpg"
}]


//while (idx < 100){
var targetDiv = d3.select(".cat-div");
targetDiv.html("<img src='"+catimgs[idx]["url"]+"' class='img-thumbnail' />");

var targetDiv = d3.select(".cow-div");
targetDiv.html("<img src='"+cowimgs[idx]["url"]+"' class='img-thumbnail' />");

var targetDiv = d3.select(".dog-div");
targetDiv.html("<img src='"+dogimgs[idx]["url"]+"' class='img-thumbnail' />");

var targetDiv = d3.select(".shp-div");
targetDiv.html("<img src='"+shpimgs[idx]["url"]+"' class='img-thumbnail' />");

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
/*d3.select("#button").on("click", function(idx) {
  // What will be logged out? What is `this` in this case?
  idx += 1;
  console.log(this);
});

d3.select("#button2").on("click", function(idx) {
  // What will be logged out? What is `this` in this case?
  idx = 105;
});

console.log(idx);

}*/
// divs.select("div")
//   .data(complexData)
//   .enter() // creates placeholder for new data
//   .append("div") // appends a div to placeholder
//   .classed("col-md-4 thumbnail", true) // sets the class of the new div
//   .html(function(d) {
//     return `<img src="${d.url}">`;
//   }); // sets the html in the div to an image tag with the link
