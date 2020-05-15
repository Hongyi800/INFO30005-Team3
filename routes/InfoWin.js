var infoWin;
var tableDom;

function openInfoWin(map,event,content){
    if(!infoWin){
        infoWin = new AMap.InfoWindow({
            autoMove: true,
            isCustom: true,
            offset: new AMap.Pixel(100,100)
        });
    }

    const x = event.clientX;
    const y = event.clientY;
    const lngLat = map.containerToLngLat(new AMap.Pixel(x,y));

    if (!tableDom){
        let infoDom = document.createElement('div');
        infoDom.className = 'info';
        tableDom = document.createElement('table');
        infoDom.appendChild(tableDom);
        infoWin.setContent(infoDom);
    }

    var trStr = '';
    for(const name in content){
        const val = content[name];
        trStr += '<tr>' +
                 '<td class="label">' + name + '</td>' +
                 '<td>&nbsp;</td>' +
                 '<td class="content">'+ val +'</td>' +
                 '</tr>'
    }

    tableDom.innerHTML = trStr;
    infoWin.open(map,lngLat);

}

function closeInfoWin(){
    if(infoWin){
        infoWin.close();
    }
}