

  $(document).ready(function () {

    TweenMax.from(".text-inform h1", 1, { // time to show
      delay: .4,
      y: 20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".tagline", 1, { // time to show
      delay: .7,
      y: 20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".inform-btn", 1, { // time to show
      delay: 1,
      y: 20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".photo-model", 1, { // time to show
      delay: .4,
      y: 20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".logo", 1, { // time to show
      delay: 2.2,
      y: -20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".menu", 1, { // time to show
      delay: 2.4,
      y: -20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".search-block", 1, { // time to show
      delay: 2.6,
      y: -20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".personal-item", 1, { // time to show
      delay: 2.8,
      y: -20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".find", 1, { // time to show
      delay: 3.2,
      y: 20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".connect", 1, { // time to show
      delay: 3.4,
      y: 20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".social-icon", 1, { // time to show
      delay: 3.6,
      y: 20,
      opacity: 0,
      ease:Expo.easeInOut
    });

    TweenMax.from(".burger-link", 1, { // time to show
      delay: 3,
      y: -20,
      opacity: 0,
      ease:Expo.easeInOut
    });





    var link = $('.burger-link');
    var link_active = $('.burger-link_active');
    var navigation = $('.mobile-nav');
    var nav_active = $('.nav-active');

    var sign = $('.signIn');/**/
    var signBlock = $('.sign-block'); /**/
    var signBlock_active = $('.sign-block_active');
    var exit = $('.exit');
    var signInMobile = $('.signInMobile');


    var korzina = $('.korIn');
    var korBlock = $('.sign-block1');
korBlock_active = $('sign-block1_active');

    link.click(function(){
      link.toggleClass('burger-link_active');
      navigation.toggleClass('nav-active');
    });

    link_active.click(function(){
      navigation.removeClass('nav-active');
    });

    sign.click(function(){
      signBlock.toggleClass('sign-block_active');
    });

/**/

korzina.click(function(){
  korBlock.toggleClass('sign-block1_active');
});
    signInMobile.click(function(){
      signBlock.toggleClass('sign-block_active');
      korBlock.toggleClass('sign-block1_active');/**/
      navigation.removeClass('nav-active');
      link.removeClass('burger-link_active');
    });

    exit.click(function(){
      signBlock.removeClass('sign-block_active');
      korBlock.removeClass('sign-block1_active');/**/
    });




  });
