function spilaLeik(){
    var isTrue = true;
    var randomNum = Math.round(Math.random()*100);
while(isTrue){
    var gisk = window.prompt('Giskaðu á tölu milli 0 og 100');
        if(gisk == null){
            isTrue = False;
        }
        if(gisk == randomNum){
            if(window.confirm('Spila aftur?')){
                spilaLeik();
            }else{
                isTrue = False;
            }
        }else if(gisk < randomNum + 5 && gisk > randomNum|| gisk > randomNum -5 && gisk < randomNum){
            window.alert('Mjög nálægt');
        }else if(gisk < randomNum + 10 && gisk > randomNum|| gisk > randomNum -10 && gisk < randomNum){
            window.alert('nálægt');
        }
        else if(gisk < randomNum + 20 && gisk > randomNum|| gisk > randomNum -20 && gisk < randomNum){
            window.alert('frekar langt frá');
        }
        else{
            window.alert('Mjög langt frá');
        }
    }
}

spilaLeik();