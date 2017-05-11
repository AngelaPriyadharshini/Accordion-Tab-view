localStorage.setItem('cachedData','');


function showContent(tabId){
    
    var detailId=tabId.id;
    
    var c = document.getElementById(detailId).children;
    var temp=localStorage.getItem('cachedData');
    if (temp=='') {
        var rawFile = new XMLHttpRequest();
        var url="data.json";
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", url, true);
        rawFile.onreadystatechange = function() {
            if (this.readyState === 4 && this.status == "200") {
                var myArr=JSON.parse(this.responseText);
                localStorage.setItem('cachedData',JSON.stringify(myArr));
                var tabContent=myArr.Data[detailId].detail;
                c[2].innerHTML=tabContent;
            }
        }
        rawFile.send(null);
    }
    else {
        
        var content=JSON.parse(localStorage.getItem('cachedData'));
        var tabContent=content.Data[detailId].detail;
        
    }
    
    c[2].innerHTML=tabContent;
    
}


