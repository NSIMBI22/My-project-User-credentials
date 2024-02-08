function validatePassword(email,password) {
    const validEmail = "2000712250@mubs.ac.ug";
    const validPassword = "20/U/12250@2";

    if (email === validEmail && password === validPassword) {
        console.log(`User email is ${email}, login successfully`);

    }else{
        console.log("Incorrect user password");
        
    }
}
validatePassword("200712250@mubs.ac.ug","20/U/12250/EVE");
