document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // console.log('Your email :',email);
    const userPassword = document.getElementById('password');
    const password = userPassword.value;
    // console.log('Your Password :',password);

    if(email === 'info@gmail.com' && password === '1234'){
        window.location.href='bank.html';
        // console.log('valid user');
    }
    else{
        alert('username or password are incorrect');
        // console.log('invalid user');
    }
})