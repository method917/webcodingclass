var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('#article a');
    // i=0;
    // while(i<alist.length){
    // console.log(alist[i]);
    // alist[i].style.color = color;
    // i=i+1;
    // }
    $('#article a').css('color', color);
  }
}
var Body = {
  setColor:function(color){
    // document.querySelector('#article').style.color = color;
    $('#article').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('#article').style.backgroundColor=color;
    $('#article').css('backgroundColor', color);
}
}
function nightdayhandler(self){
        var target = document.querySelector('#article')
        if(self.value==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
Links.setColor('powderblue');
        } else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';
Links.setColor('blue');
}
}
