System.register([],(function(e){"use strict";return{execute:function(){var r=[];var t=[];var n=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.intersectionRatio>0){if(t.indexOf(e.target)<0){t.push(e.target)}}else{t.splice(t.indexOf(e.target),1)}}));r.forEach((function(r){return r({entries:e,observer:n,visible:t})}))}),{threshold:[0,1]});var i=e("a",(function(e){return r.push(e)}));var o=e("o",(function(e){return e&&n.observe(e)}))}}}));