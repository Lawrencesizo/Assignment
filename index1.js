   
    
    function validateDetails(email, password) {


         // Defining the correct email and password


    let userEmail = "lawrencesizo2002@gmail.com";

    let userPassword = "22/u/22557";


        // Checking for correct details


        if (email === userEmail && password === userPassword) {
    
        // correct details message


        console.log(`Your email ${email} is correct, login successfull`);
    
        } else {

    // wrong details error message


    console.log("Incorrect user Details❌");
        }
    }
    validateDetails('lawrencesizo2002@gmail.com', '22/u/22557');
 