
document.addEventListener('DOMContentLoaded', function() {
 
  // redirect on login button click login page
    
 const submitButton = document.querySelector('.submit_btn');
 submitButton.addEventListener('click', function() {
     window.location.href = './index.html'; 
 });
   
    //order form disappear and in its place appear a thank you message
    const orderForm = document.getElementById('orderForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const orderNowBtn = document.getElementById('orderNowBtn');

    orderNowBtn.addEventListener('click', function() {
        // Hide the order form
        orderForm.style.display = 'none';
        // Show the thank you message
        thankYouMessage.style.display = 'block';
    });





    //coupon alert message 
    const validCoupons = [
        { code: 'Dx000', discount: 0.30 }, 
        { code: 'Fx505', discount: 0.15 }  
      ];
      //applies coupons
    function applyCoupon() {
        const couponCodeInput = document.getElementById('couponCode');
        const couponCode = couponCodeInput.value;
        const appliedCoupon = validCoupons.find(coupon => coupon.code === couponCode);
        const applyCouponButton = document.getElementById('applyCouponButton');
    
        if (appliedCoupon) {
        alert(`Coupon "${couponCode}" verified. ${appliedCoupon.discount * 100}% discount applied.`);
        applyDiscount(appliedCoupon.discount);
        //changing the content of button after verifying the coupon and disabling it
        applyCouponButton.textContent = 'Applied!';
        applyCouponButton.disabled = true;
        //disabling the coupon input text after verifying
        couponCodeInput.disabled = true;
        } else {
        alert('Invalid coupon code. Please enter a valid coupon.');
        }
  }

});





//verify login
const accounts = [
    { email: 'user1@gmail.com', password: 'password1' },
    { email: 'user2@gmail.com', password: 'password2' },
  ];
  function login() {
      // Get user input
      const enteredEmail = document.getElementById('login-email').value;
      const enteredPassword = document.getElementById('login-password').value;
      // const login_btn = document.getElementById('login-button');
  
      // Check if entered email and password match any account
      const matchedAccount = accounts.find(account =>
        account.email === enteredEmail && account.password === enteredPassword
      );
  
      if (matchedAccount) {
        alert('Login successful! Redirecting to the home page.');
        // document.getElementById('login-button').type='button';
        // Redirect to the home page
        // window.location.href='../index.html';

   
      } else {
        alert('Invalid email or password. Please try again.');
      }
    }


  
//signup
function signup() {
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (signupPassword !== confirmPassword) {
      console.log('Password and confirm password do not match.');
      alert('Password and confirm password do not match.');
      return;
    }

    const emailExists = accounts.some(account => account.email === signupEmail);

    if (emailExists) {
      console.log('Email already exists. Please choose another email.');
      alert('Email already exists. Please choose another email.');
    } else {
      accounts.push({ email: signupEmail, password: signupPassword });
      alert('Signup successful! Account added.');
      // document.getElementById('register_btn').type = 'button';
       // redirect on register button click signup page
       const submitButton2 = document.querySelector('.register_btn');

       submitButton2.addEventListener('click', function() {
           window.location.href = 'index.html'; 
       });
           

    }
  }


  function submitForm() {
    // Add logic here to handle form submission
    // For demonstration purposes, we'll simply toggle the visibility
    document.getElementById('contactForm').style.opacity = 0;
    // document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
  }

  function showForm() {
    // Reset the form and show it again
    document.getElementById('contactForm').style.opacity = 1;
    // document.getElementById('contactForm').style.display = 'block';
    document.getElementById('thankYouMessage').style.display = 'none';
  }

