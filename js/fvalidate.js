$(function(){
    let nameM = $("#name");
    let emailM = $("#email");
    let helpT =$("#help-text");
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let submitF = $("#contact-us");
    let validIn = {};
    let valid;

    submitF.on("submit", function(e){
        nameCheck();
        emailCheck();
        helpTextCheck();

        for(var el in validIn){
            if(!validIn[el]){
                valid = false;
                break;
            }else{
                valid = true;
            }
        }
          
         
        if(!valid){
            e.preventDefault();
        } 

    })



    function nameCheck(){
        if(nameM.val() == ""){
            validIn.n = false;
            $("#name-er").remove()
            nameM.after(`<label for = 'name' id='name-er' class = 'error-all'>${errorMessages["nameEr"]}</label>`);
        }else{
            $("#name-er").remove()
            validIn.n = true;
        }
        
      }
      
      
      
      function emailCheck(){
        if(emailM.val() == ""){
            validIn.e = false;
            $("#email-er").remove();
            emailM.after(`<label for = 'email' id='email-er' class = 'error-all'>${errorMessages["emailErEmp"]}</label>`);
        }
        else if(!emailPattern.test(emailM.val())){
            validIn.e = false;
            $("#email-er").remove();
            emailM.after(`<label for = 'email' id='email-er' class = 'error-all'>${errorMessages["emailErCor"]}</label>`);
        }else{
            $("#email-er").remove();
            validIn.e = true;
        }
        
      }


      function helpTextCheck(){
        if(helpT.val() == ""){
            validIn.h = false;
            $("#helpT-err").remove()
            helpT.after(`<label for ='help-text' id='helpT-err' class = 'error-all'>${errorMessages["helpTextEr"]}</label>`);
        }else{
            $("#helpT-err").remove()
            validIn.h = true;
        }

      }

      errorMessages = {
          "nameEr" : "Please write your name",
          "emailErEmp" : "Please write your email",
          "emailErCor" : "Please write your email correctly",
          "helpTextEr" : "This field is required",
          
      }
})

