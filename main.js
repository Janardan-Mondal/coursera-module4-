
(function (){
    // Array of names
    var names = ["Jayanta", "Janu", "Amir", "Bikash", "sona", "Mitul" ];

    //Loop over the name
    for(var i=0; i<names.length; i++){
        var name = names[i];
        var firstLetter = name.charAt(0).toLocaleLowerCase(); //Convert the first letter to lowercase
        if(firstLetter==="j"){
            console.log("Good bye " + name)
        }else{
            console.log("Hello " + name)
        }
    }
})();
