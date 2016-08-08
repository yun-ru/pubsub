var PubSub = (function(){
    const triggers = {}

    function sub(trigger,event) {
        if(typeof triggers[trigger]!== "object"){
            triggers[trigger] = []
        }
        triggers[trigger].push(event)
    }

    function unsub(trigger,event) {
        triggers[trigger] = triggers[trigger].filter(function(item){
            return item !== event
        })
    }

    function pub(trigger) {
        triggers[trigger].forEach(function(item){
            item();
        })
    }

    return {
        sub: sub,
        unsub: unsub,
        pub: pub
    }
})()