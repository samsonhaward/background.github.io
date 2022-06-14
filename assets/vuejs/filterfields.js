//to fetch the dependancies fe=ramework then do the following

var url = '';
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

   
    document.body.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

 var action1 = new Promise((resolve, reject) => {
 // dynamicallyLoadScript('https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.4/vue.min.js');
 // dynamicallyLoadScript('https://cdnjs.cloudflare.com/ajax/libs/ramda/0.23.0/ramda.min.js');  
  // or
  // reject(new Error("Error!"));
});

action1.then(value => {
 


});