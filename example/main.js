(function(){

    PubSub.sub("monday",wakeupearly);
    PubSub.sub("monday",gotowork);
    function wakeupearly(){
        console.log("wake up early")
    }

    function gotowork(){
        console.log("go to work")
    }

    setTimeout(function(){
        PubSub.pub("monday");
    },2000)
})();

