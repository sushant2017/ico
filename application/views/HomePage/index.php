<!DOCTYPE html>
<html lang="en">

<head>
  
   <meta charset="utf-8">
   <title>Crpto Currency</title>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
   <link rel="stylesheet" href="<?= base_url() ?>resource/css/style.css">

</head>

<body data-spy="scroll" data-target=".navbar" data-offset="50">

<div class="search-overlay">
   <form action="#" class="search-input">
      <input type="text" name="search" id="search" placeholder="Search...">
      <i class="icon icon-search"></i>
   </form>
   <div class="close-btn">
      <i class="fa fa-close"></i>
   </div>
</div>


   <div class="site-top">
      <header id="header" class="header-default header-absolute header-transparent no-border">
         <div class="container">
            <nav class="navbar navbar-expand-lg">
               <div class="navbar-brand">
                  <div class="logo">
                     <a href="index-2.html">
                        <img src="<?= base_url(); ?>resource/images/logo.png" alt="">
                     </a>
                  </div>
               </div>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon">
                     <i class="icon icon-menu"></i>
                  </span>
               </button>
               <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul class="navbar-nav absolute-navbar site-navigation">
                     <li class="nav-item dropdown active">
                        <a class="nav-link" href="#home-banner">
                           Home
                        </a>
                       
                     </li>
                     <li class="nav-item dropdown ">
                        <a class="nav-link" href="#ts-aboutus">
                           About
                        </a>
                     </li>
                     <li class="nav-item dropdown ">
                        <a class="nav-link" href="#ts-service-boxed" data-toggle="dropdown">
                           Service
                        </a>
                     </li>
                     <li class="nav-item dropdown ">
                        <a class="nav-link" href="#ts-team-classic" data-toggle="dropdown">
                           Team
                        </a>
                     </li>
                     <li class="nav-item dropdown ">
                        <a class="nav-link" href="#ts-latest-news" data-toggle="dropdown">
                           News
                        </a>
                        
                     </li>
                     <li class="nav-item dropdown ">
                        <a class="nav-link" href="#ts-contact">
                           Contact
                        </a>
                     </li>
                     <li class="nav-item dropdown ">
                        <a class="nav-link" id="login" href="<?= base_url() ?>User/Login" >
                           Login
                        </a>
                     </li>
                     <li class="nav-item dropdown ">
                        <a class="nav-link" id="register" href="<?= base_url() ?>User/Register">
                           Register
                        </a>
                        
                     </li>
                  </ul>
                 
               </div>
            </nav> 
           
         </div> 
      </header>   
   </div>
   
   <section id="home-banner" class="home-banner banner-bg">
      <div class="banner-wrapper">
         <div class="banner-content-inner">
            <div class="container">
               <div class="row">
                  <div class="col-lg-6 align-self-center">
                     <h1 class="ts-banner-title">Most Popular</h1>
                     <h2 class="ts-banner-subtitle">Digital Currency Ever</h2>
                     <p>Like paper money and gold before it, bitcoin and ether allow  digital and decent ralized.</p>
                     <a href="#" class="btn btn-primary mr-15">White Paper</a>
                     <a href="#" class="btn btn-border">Learn More</a>
                  </div> 
                  <div class="col-lg-4 ml-lg-auto">
                     <div class="ts-countdown-box">
                        <div class="countdown-timer">
                           <h3>ICO Ends in</h3>
                           <div id="countdown-clock" class="countdown-clock"></div>
                           <a href="#" class="btn btn-primary">Buy Crypto</a>
                           <div class="bitcoin-token">
                              <p>98.235 ETH
                                 <span>Worth of STMX tokens</span>
                              </p>
                           </div>
                        </div>
                        <div class="btc-sell-amount">
                           <div class="sell-info">
                              <span class="sold"><span>Sold:</span> $28,985,879</span>
                              <span class="sold-amount">$50,000</span>
                           </div>
                           <div class="progress sell-amount">
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                              </div>
                           </div>
                        </div> <!-- Amount End -->
                        <div class="btc-card">
                           <div class="btc-card-item">
                              <div class="btc-card-inner">
                                 <img src="<?= base_url(); ?>resource/images/icon-image/visa.png" alt="" class="img-fluid">
                              </div>
                           </div><!-- Card Item End -->
                           <div class="btc-card-item">
                              <div class="btc-card-inner">
                                 <img src="<?= base_url(); ?>resource/images/icon-image/master_card.png" alt="" class="img-fluid">
                              </div>
                           </div><!-- Card Item End -->
                           <div class="btc-card-item">
                              <div class="btc-card-inner">
                                 <img src="<?= base_url(); ?>resource/images/icon-image/ethm.png" alt="" class="img-fluid">
                              </div>
                           </div><!-- Card Item End -->
                           <div class="btc-card-item">
                              <div class="btc-card-inner">
                                 <img src="<?= base_url(); ?>resource/images/icon-image/bitcoin.png" alt="" class="img-fluid">
                              </div>
                           </div><!-- Card Item End -->
                        </div> <!-- Card End -->
                     </div> <!-- Countdown Box end -->
                  </div> <!-- COl End -->
               </div> <!-- Row End -->
            </div> <!-- Container End -->
         </div> <!-- Banner Inner End -->
      </div>    
   </section>

  
   <section id="ts-feature-box" class="ts-feature-box no-padding">
   <div id="particles-js"></div>
   <div class="container-fluid">
      <div class="row">
         <div class="col-lg-4 feature-box-1">
            <div class="ts-feature">
               <div class="feature-info">
                  <span><img src="<?= base_url(); ?>resource/images/feature/feature4.png" alt=""></span>
                  <h3 class="feature-title">Better way to move money</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether allow parties to exchange value decent.</p>
               </div> <!-- Feature Info End -->
            </div> <!-- Feature End -->
         </div> <!-- 1st Col End -->
         <div class="col-lg-4 feature-box-2">
            <div class="ts-feature">
               <div class="feature-info">
                  <span><img src="<?= base_url(); ?>resource/images/feature/feature5.png" alt=""></span>
                  <h3 class="feature-title">The true financial freedom</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether allow parties to exchange value decent.</p>
               </div> <!-- Feature Info End -->
            </div> <!-- Feature End -->
         </div> <!-- 1st Col End -->
         <div class="col-lg-4 feature-box-3">
            <div class="ts-feature last">
               <div class="feature-info">
                  <span><img src="<?= base_url(); ?>resource/images/feature/feature6.png" alt=""></span>
                  <h3 class="feature-title">Modern investment system</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether allow parties to exchange value decent.</p>
               </div> <!-- Feature Info End -->
            </div> <!-- Feature End -->
         </div> <!-- 1st Col End -->
      </div> <!-- Row End -->
   </div> <!-- Container End -->
</section> <!-- Feature Col End -->
   <section id="ts-aboutus" class="ts-aboutus solid-bg">
      <!-- Section Start -->
      <div class="container">
   <div class="ts-about-us">
      <div class="row">
         <div class="col-lg-8">
         <h2 class="column-title mb-35">
            <small>About us</small>
            The Best Bitcoin Exchanger 
         </h2>
         <div class="ts-about-content">
            <p>Like paper money and gold before it, bitcoin and ether allow parties to exchange value. Unlike their predecessors, they are digital and decent ralized. For the first time history, people can exchange value without intermediaries which translates to</p>
            <div class="row">
               <div class="col-md-6">
                  <div class="ts-feature">
                     <div class="feature-info">
                        <h3 class="feature-title">Our Mision</h3>
                        <p>Like paper money and golden dil before it, bitcoin and ether allow parties to exchange value.</p>
                     </div> <!-- Feature Info End -->
                  </div> <!-- Feature End -->
               </div>
               <div class="col-md-6">
                  <div class="ts-feature">
                     <div class="feature-info">
                        <h3 class="feature-title">Our Aim</h3>
                        <p>Like paper money and golden dil before it, bitcoin and ether allow parties to exchange value.</p>
                     </div> <!-- Feature Info End -->
                  </div> <!-- Feature End -->
               </div>
            </div>
         </div>
         </div>
         <div class="col-lg-4 align-self-center">
            <img class="img-fluid" src="<?= base_url(); ?>resource/images/pages/about-us1.jpg" alt="">
         </div><!-- Col end-->
      </div><!-- container row end-->
   </div><!-- Container End -->
</div>   </section>

   <!-- Section Start -->
   <section id="ts-service-boxed" class="ts-service-boxed  ">
   <div class="container">
      <div class="row">
         <div class="col text-center">
            <h2 class="section-title mb-75">
               <small>Best Services</small>
               We ensure best services            </h2>
         </div> <!-- Col End -->
      </div> <!-- Title Row End -->
      <div class="row">
         <div class="col-lg-4 col-md-12">
            <div class="ts-service-col service-boxed text-center solid-bg">
               <div class="service-icon-wrapper">
                  <div class="service-icon-inner">
                     <img src="<?= base_url(); ?>resource/images/service/service1.png" alt="" class="img-fluid">
                  </div>
               </div> <!-- Service Icon End -->
               <div class="service-content">
                  <h3 class="service-title">Bitcoin Minning</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether</p>
               </div> <!-- Service Content End -->
            </div> <!-- Service End -->
         </div> <!-- Col End -->
         <div class="col-lg-4 col-md-12">
            <div class="ts-service-col service-boxed text-center solid-bg">
               <div class="service-icon-wrapper">
                  <div class="service-icon-inner">
                     <img src="<?= base_url(); ?>resource/images/service/service2.png" alt="" class="img-fluid">
                  </div>
               </div> <!-- Service Icon End -->
               <div class="service-content">
                  <h3 class="service-title">Instant Exchange</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether</p>
               </div> <!-- Service Content End -->
            </div> <!-- Service End -->
         </div> <!-- Col End -->
         <div class="col-lg-4 col-md-12">
            <div class="ts-service-col service-boxed text-center solid-bg">
               <div class="service-icon-wrapper">
                  <div class="service-icon-inner">
                     <img src="<?= base_url(); ?>resource/images/service/service3.png" alt="" class="img-fluid">
                  </div>
               </div> <!-- Service Icon End -->
               <div class="service-content">
                  <h3 class="service-title">Exchange Market </h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether</p>
               </div> <!-- Service Content End -->
            </div> <!-- Service End -->
         </div> <!-- Col End -->
      </div> <!-- Content Row End -->
      <div class="gap-85"></div>
      <div class="row">
         <div class="col-lg-4 col-md-12">
            <div class="ts-service-col service-boxed text-center solid-bg">
               <div class="service-icon-wrapper">
                  <div class="service-icon-inner">
                     <img src="<?= base_url(); ?>resource/images/service/service4.png" alt="" class="img-fluid">
                  </div>
               </div> <!-- Service Icon End -->
               <div class="service-content">
                  <h3 class="service-title">Secure and Stable</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether</p>
               </div> <!-- Service Content End -->
            </div> <!-- Service End -->
         </div> <!-- Col End -->
         <div class="col-lg-4 col-md-12">
            <div class="ts-service-col service-boxed text-center solid-bg">
               <div class="service-icon-wrapper">
                  <div class="service-icon-inner">
                     <img src="<?= base_url(); ?>resource/images/service/service5.png" alt="" class="img-fluid">
                  </div>
               </div> <!-- Service Icon End -->
               <div class="service-content">
                  <h3 class="service-title">Fast Transaction</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether</p>
               </div> <!-- Service Content End -->
            </div> <!-- Service End -->
         </div> <!-- Col End -->
         <div class="col-lg-4 col-md-12">
            <div class="ts-service-col service-boxed text-center solid-bg last">
               <div class="service-icon-wrapper">
                  <div class="service-icon-inner">
                     <img src="<?= base_url(); ?>resource/images/service/service6.png" alt="" class="img-fluid">
                  </div>
               </div> <!-- Service Icon End -->
               <div class="service-content">
                  <h3 class="service-title">Bitcoin Investments</h3>
                  <p>Like paper money and golden dil before it, bitcoin and ether</p>
               </div> <!-- Service Content End -->
            </div> <!-- Service End -->
         </div> <!-- Col End -->
      </div> <!-- Content Row End -->
   </div> <!-- Container End -->
</section> <!-- Service End -->
   <!-- Section Start -->
   <section id="ts-team-classic" class="ts-team-classic gradient1">
      <div class="">
   <div class="container">
      <div class="row">
         <div class="col text-center mb-75">
            <h2 class="section-title-classic">
               <small>Our Team</small>
               Our Expert Team
            </h2>
         </div>
      </div><!-- Title row end-->
      <div class="row">
         <div class="col-lg-3 col-md-6">
            <div class="ts-team-wrapper">
               <div class="team-img-wrapper">
                  <img class="img-fluid" alt="" src="<?= base_url(); ?>resource/images/team/team5.jpg">
                  <div class="ts-team-content-box">
                     <div class="ts-team-content">
                        <h3 class="team-name">Dimon Lake</h3>
                        <span class="team-designation">ceo</span>
                        <p class="team-desc">Like paper money and gold before it, bitcoin ether</p>
                     </div>
                     <!-- Team content end-->
                     <div class="team-social-icons">
                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                     </div><!-- social-icons-->
                  </div> <!-- Content Box End -->
               </div>
            </div><!-- Team wrapper 1 end-->
         </div><!-- Col end-->
         <div class="col-lg-3 col-md-6">
            <div class="ts-team-wrapper">
               <div class="team-img-wrapper">
                  <img class="img-fluid" alt="" src="<?= base_url(); ?>resource/images/team/team6.jpg">
                  <div class="ts-team-content-box">
                     <div class="ts-team-content">
                        <h3 class="team-name">Lara Kein</h3>
                        <span class="team-designation">Hr Head</span>
                        <p class="team-desc">Like paper money and gold before it, bitcoin ether</p>
                     </div>
                     <!-- Team content end-->
                     <div class="team-social-icons">
                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                     </div><!-- social-icons-->
                  </div> <!-- Content Box End -->
               </div>
            </div><!-- Team wrapper 1 end-->
         </div><!-- Col end-->
         <div class="col-lg-3 col-md-6">
            <div class="ts-team-wrapper">
               <div class="team-img-wrapper">
                  <img class="img-fluid" alt="" src="<?= base_url(); ?>resource/images/team/team7.jpg">
                  <div class="ts-team-content-box">
                     <div class="ts-team-content">
                        <h3 class="team-name">James Carter</h3>
                        <span class="team-designation">Marketing manager</span>
                        <p class="team-desc">Like paper money and gold before it, bitcoin ether</p>
                     </div>
                     <!-- Team content end-->
                     <div class="team-social-icons">
                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                     </div><!-- social-icons-->
                  </div> <!-- Content Box End -->
               </div>
            </div><!-- Team wrapper 1 end-->
         </div><!-- Col end-->
         <div class="col-lg-3 col-md-6">
            <div class="ts-team-wrapper">
               <div class="team-img-wrapper">
                  <img class="img-fluid" alt="" src="<?= base_url(); ?>resource/images/team/team8.jpg">
                  <div class="ts-team-content-box">
                     <div class="ts-team-content">
                        <h3 class="team-name">Lina Ketty</h3>
                        <span class="team-designation">Head of design</span>
                        <p class="team-desc">Like paper money and gold before it, bitcoin ether</p>
                     </div>
                     <!-- Team content end-->
                     <div class="team-social-icons">
                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                     </div><!-- social-icons-->
                  </div> <!-- Content Box End -->
               </div>
            </div><!-- Team wrapper 1 end-->
         </div><!-- Col end-->
      </div><!-- Content row end-->
      <div class="row">
         <div class="col text-center mb-60 mrt-125">
            <h2 class="section-title-classic">
               Key People
            </h2>
         </div>
      </div><!-- Title row end-->
      <div class="row">
         <div class="col-lg-4 col-md-12">
            <div class="ts-team-wrapper">
               <div class="team-img-wrapper">
                  <img class="img-fluid" alt="" src="<?= base_url(); ?>resource/images/team/team5.jpg">
                  <div class="ts-team-content-box">
                     <div class="ts-team-content">
                        <h3 class="team-name">Dimon Lake</h3>
                        <span class="team-designation">ceo</span>
                        <p class="team-desc">Like paper money and gold before it, bitcoin ether</p>
                     </div>
                     <!-- Team content end-->
                     <div class="team-social-icons">
                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                     </div><!-- social-icons-->
                  </div> <!-- Content Box End -->
               </div>
            </div><!-- Team wrapper 1 end-->
         </div><!-- Col end-->
         <div class="col-lg-4 col-md-12">
            <div class="ts-team-wrapper">
               <div class="team-img-wrapper">
                  <img class="img-fluid" alt="" src="<?= base_url(); ?>resource/images/team/team6.jpg">
                  <div class="ts-team-content-box">
                     <div class="ts-team-content">
                        <h3 class="team-name">Lara Kein</h3>
                        <span class="team-designation">Hr Head</span>
                        <p class="team-desc">Like paper money and gold before it, bitcoin ether</p>
                     </div>
                     <!-- Team content end-->
                     <div class="team-social-icons">
                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                     </div><!-- social-icons-->
                  </div> <!-- Content Box End -->
               </div>
            </div><!-- Team wrapper 1 end-->
         </div><!-- Col end-->
         <div class="col-lg-4 col-md-12">
            <div class="ts-team-wrapper">
               <div class="team-img-wrapper">
                  <img class="img-fluid" alt="" src="<?= base_url(); ?>resource/images/team/team7.jpg">
                  <div class="ts-team-content-box">
                     <div class="ts-team-content">
                        <h3 class="team-name">James Carter</h3>
                        <span class="team-designation">Marketing manager</span>
                        <p class="team-desc">Like paper money and gold before it, bitcoin ether</p>
                     </div>
                     <!-- Team content end-->
                     <div class="team-social-icons">
                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                     </div><!-- social-icons-->
                  </div> <!-- Content Box End -->
               </div>
            </div><!-- Team wrapper 1 end-->
         </div><!-- Col end-->
      </div><!-- Content row end-->
   </div><!-- Container end-->
</div> <!-- Team End -->   </section>

   <!-- Section Start -->
   <section id="ts-video" class="ts-video ts-video-pattern bg-white">
   <div class="container">
      <div class="row">
         <div class="col-lg-6 align-self-center">
            <div class="video-popup">
               <div class="popup-img">
                  <img src="<?= base_url(); ?>resource/images/pages/mac.png" alt="" class="img-fluid">
               <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" class="video-play-btn img-fluid">
                  <i class="fa fa-play"></i>
               </a>
               </div>
            </div> <!-- Video Popup End -->
         </div> <!-- Col End -->
         <div class="col-lg-6 align-self-center">
            <div class="video-text">
               <h2 class="column-title-classic">
                  <small>The Crypto</small>
                  What is Crypto Currency?
               </h2>
               <p>ike paper money and gold before it, bitcoin and ether allow parties to exchange value. Unlike their predecessors, they are digital and decent ralized. For the first time in history, people can exchange</p>
               <a href="#" class="btn btn-primary mrt-20">Buy Bitcoin</a>
            </div> <!-- Video Text End -->
         </div> <!-- Col End -->
      </div> <!-- Row End -->
   </div> <!-- Container End -->
</section> <!-- Intro Video End -->   
   <!-- Section Start -->
   <section id="ts-chart" class="ts-chart o-hidden gradient1">
      <div class="container">
   <div class="row">
      <div class="col-12 text-center text-white">
         <h2 class="section-title-classic">
            <small>Bit Token</small>
            Get Our Tokens
         </h2>
         <p class="chart-title-desc mb-75">ke paper money and gold before it, bitcoin and ether allow parties to exchange value. Unlike their predecessors, they are digital and decent ralized. For the first time in history,  without intermediaries which translates to greater control of funds and lower fees.</p>
      </div> <!-- Col End -->
   </div> <!-- Row End -->
   <div class="row">
      <div class="col-lg-6">
         <div class="row">
            <div class="col-lg-4 col-md-6 align-self-center">
               <ul class="chart-label">
                  <li><span class="chart-bg1"></span>70 % For Members</li>
                  <li><span class="chart-bg2"></span>10 % For Buyers</li>
                  <li><span class="chart-bg3"></span>8 % For Marketers</li>
                  <li><span class="chart-bg4"></span>10 % For Free</li>
               </ul> <!-- Chart Label End -->
            </div> <!-- Col End -->
            <div class="col-lg-6 col-md-6">
               <canvas id="myChart"></canvas>
            </div> <!-- Col End -->
         </div> <!-- Row End -->
      </div> <!-- Col End -->
      <div class="col-lg-6">
         <div class="row chart-gap">
            <div class="col-lg-6 col-md-6 ml-lg-auto">
               <canvas id="myChartTwo"></canvas>
            </div> <!-- Col End -->
            <div class="col-lg-4 col-md-6 align-self-center">
               <ul class="chart-label last">
                  <li><span class="chart-bg1"></span>70 % For Members</li>
                  <li><span class="chart-bg2"></span>10 % For Buyers</li>
                  <li><span class="chart-bg3"></span>8 % For Marketers</li>
                  <li><span class="chart-bg4"></span>10 % For Free</li>
               </ul>
            </div> <!-- Chart Label End -->
         </div> <!-- Row End -->
      </div> <!-- Col End -->
   </div> <!-- Row End -->
</div> <!-- Container End -->   </section>

   <!-- Section Start -->
   <section id="ts-invest" class="ts-invest bg-white">
   <div class="container">
      <div class="row">
         <div class="col-lg-6">
            <div class="ts-invest-text">
               <h2 class="column-title-classic">
                  Invest in the <span>Bitcoin</span> &amp; <br/> get profit.
               </h2>
               <p>Like paper money and gold before it, bitcoin and ether allow parties to exchange value. Unlike their predecessors, they are digital and decent ralized</p>
               <ul class="list-check check-mark">
                  <li>systematically to integrate corporate responsibility core</li>
                  <li>make our expertise available for the benefit of them</li>
                  <li>corporate responsibility in our core business and make</li>
               </ul>
               <a href="#" class="btn btn-border">Invest Now</a>
            </div> <!-- Invest Text End -->
         </div> <!-- Col End -->
         <div class="col-lg-6">
            <div class="invest-img">
               <img src="<?= base_url(); ?>resource/images/dashboard.png" alt="" class="img-fluid">
            </div>
         </div> <!-- Col End -->
      </div> <!-- Row End -->
   </div> <!-- Container End -->
</section> <!-- Invest End -->
   <!-- Section Start -->
   <section id="ts-latest-news" class="ts-latest-news latest-news-bg">
   <div class="container">
      <div class="row">
         <div class="col text-center">
            <h2 class="section-title-classic mb-75">
               <small>Latest News</small>
               Our Latest Information
            </h2>
         </div> <!-- Col End -->
      </div> <!-- Title Row End -->
      <div class="row">
         <div class="col-lg-4">
            <div class="ts-latest-post">
               <div class="post-media post-image">
                  <img src="<?= base_url(); ?>resource/images/news/post-img1.jpg" alt="" class="img-fluid">
               </div> <!-- Post Media End -->
               <div class="post-body">
                  <span><a href="#" class="post-cat">Business,</a></span>
                  <span><a href="#" class="post-cat">Stock</a></span>
                  <h3 class="post-title">
                     <a href="news-single.html">Better way for exchanging your money</a>
                  </h3>
                  <div class="post-text">
                     <p>Like paper money and golden is before it, bitcoin and ether allow parties today exchange value.</p>
                  </div>
                  <div class="post-info">
                     <div class="post-meta">
                        <span class="post-author">By <a href="#">admin</a></span>
                     </div>
                  </div> <!-- Post Info End -->
                  <div class="post-date">
                     <span class="month">March</span>
                     <span class="day">15,</span>
                     <span class="year">2018</span>
                  </div> <!-- Post Date End -->
               </div> <!-- Post Body End -->
            </div> <!-- Latest Post End -->
         </div> <!-- Col End -->
         <div class="col-lg-4">
            <div class="ts-latest-post">
               <div class="post-media post-image">
                  <img src="<?= base_url(); ?>resource/images/news/post-img2.jpg" alt="" class="img-fluid">
               </div> <!-- Post Media End -->
               <div class="post-body">
                  <span><a href="#" class="post-cat">Business,</a></span>
                  <span><a href="#" class="post-cat">Stock</a></span>
                  <h3 class="post-title">
                     <a href="news-single.html">Better way for exchanging your money</a>
                  </h3>
                  <div class="post-text">
                     <p>Like paper money and golden is before it, bitcoin and ether allow parties today exchange value.</p>
                  </div>
                  <div class="post-info">
                     <div class="post-meta">
                        <span class="post-author">By <a href="#">admin</a></span>
                     </div>
                  </div> <!-- Post Info End -->
                  <div class="post-date">
                     <span class="month">March</span>
                     <span class="day">15,</span>
                     <span class="year">2018</span>
                  </div> <!-- Post Date End -->
               </div> <!-- Post Body End -->
            </div> <!-- Latest Post End -->
         </div> <!-- Col End -->
         <div class="col-lg-4">
            <div class="ts-latest-post last">
               <div class="post-media post-image">
                  <img src="<?= base_url(); ?>resource/images/news/post-img3.jpg" alt="" class="img-fluid">
               </div> <!-- Post Media End -->
               <div class="post-body">
                  <span><a href="#" class="post-cat">Business,</a></span>
                  <span><a href="#" class="post-cat">Stock</a></span>
                  <h3 class="post-title">
                     <a href="news-single.html">Better way for exchanging your money</a>
                  </h3>
                  <div class="post-text">
                     <p>Like paper money and golden is before it, bitcoin and ether allow parties today exchange value.</p>
                  </div>
                  <div class="post-info">
                     <div class="post-meta">
                        <span class="post-author">By <a href="#">admin</a></span>
                     </div>
                  </div> <!-- Post Info End -->
                  <div class="post-date">
                     <span class="month">March</span>
                     <span class="day">15,</span>
                     <span class="year">2018</span>
                  </div> <!-- Post Date End -->
               </div> <!-- Post Body End -->
            </div> <!-- Latest Post End -->
         </div> <!-- Col End -->
      </div> <!-- Row End -->
   </div> <!-- Container End -->
</section> <!-- Latest News End -->
   <section id="ts-contact" class="ts-contact">
      <!-- Section Start -->
      <div class="container">
   <div class="row text-center">
      <div class="col text-center mb-75">
         <h2 class="section-title">
            <small>contact us</small>
            Our contact info
         </h2>
      </div>
   </div>
   <!-- Title row end-->
   <div class="row">
      <div class="col-lg-12">
         <div class="contact-wrapper  ">
            <div class="contact-box info-box">
               <div class="contact-info-left">
                  <h3 class="column-title">
                     Get In Touch
                  </h3>
                  <div class="ts-contact-info"><span class="ts-contact-icon float-left"><i class="icon icon-map-marker2"></i></span>
                     <div class="ts-contact-content">
                        <h3 class="ts-contact-title">Find Us</h3>
                        <p>1010 Avenue, NY 90001, United States</p>
                     </div>
                     <!-- Contact content end-->
                  </div>
                  <div class="ts-contact-info"><span class="ts-contact-icon float-left"><i class="icon icon-phone3"></i></span>
                     <div class="ts-contact-content">
                        <h3 class="ts-contact-title">Call Us</h3>
                        <p>009-215-5596 (toll free)</p>
                     </div>
                     <!-- Contact content end-->
                  </div>
                  <div class="ts-contact-info last"><span class="ts-contact-icon float-left"><i class="icon icon-envelope"></i></span>
                     <div class="ts-contact-content">
                        <h3 class="ts-contact-title">Mail Us</h3>
                        <p>info@domain.com</p>
                     </div>
                     <!-- Contact content end-->
                  </div>
               </div>
            </div>
            <div class="contact-box form-box">
               <form class="contact-form" id="contact-form" action="http://themewinter.com/demo/html/bitvault/onepage/contact-form.php" method="POST">
                  <div class="error-container"></div>
                  <div class="row">
                     <div class="col-lg-6">
                        <div class="form-group">
                           <input class="form-control form-name" id="name" name="name" placeholder="Full Name" type="text" required="">
                        </div>
                     </div>
                     <!-- Col end-->
                     <div class="col-lg-6">
                        <div class="form-group">
                           <input class="form-control form-email" id="email" name="email" placeholder="Email" type="email" required="">
                        </div>
                     </div>
                     <div class="col-lg-12">
                        <div class="form-group">
                           <input class="form-control form-subject" id="subject" name="subject" placeholder="Subject" type="text" required="">
                        </div>
                     </div>
                     <div class="col-lg-12">
                        <div class="form-group">
                           <textarea class="form-control form-message required-field" id="message" placeholder="Comments" rows="8"></textarea>
                        </div>
                     </div>
                     <!-- Col 12 end-->
                  </div>
                  <!-- Form row end-->
                  <div class="text-right mrt-30">
                     <button class="btn btn-primary tw-mt-30" type="submit">Contact US</button>
                  </div>
               </form>
               <!-- Form end-->
            </div>
         </div>
      </div>
   </div><!-- Row End -->
</div><!-- container end-->   </section>
   <div class="map" id="map"></div><!-- Map End -->
   <!-- Section Start -->
   <footer id="ts-footer" class="ts-footer footer-classic">
   <div class="container">
      <div class="footer-main">
         <div class="row">
            <div class="col-lg-3">
               <a href="index-2.html" class="footer-logo">
                  <img src="<?= base_url(); ?>resource/images/footer_logo.png" alt="" class="img-fluid">
               </a>
               <p class="footer-text">Like pal money and golden  before bitcoin and ether allow. parties  today they are not digital and decent ralized for </p>
               <ul class="footer-social-icon">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
               </ul>
            </div> <!-- Col End -->
            <div class="col-lg-3">
               <h3 class="widget-title-classic">Useful Links</h3>
               <ul class="list-links">
                  <li><a href="#">Who are we</a></li>
                  <li><a href="#">White paper</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Graphic materials</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Licence</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Get Token</a></li>
               </ul> <!-- List End -->
            </div> <!-- Col End -->
            <div class="col-lg-3">
               <h3 class="widget-title-classic">Articles</h3>
               <div class="post-block">
                  <h4 class="post-title"><a href="#">Twice profit than before you ever</a></h4>
                  <div class="post-date">
                     <i class="fa fa-clock-o"></i>
                     <span class="month">March</span>
                     <span class="day">15,</span>
                     <span class="year">2018</span>
                  </div> <!-- Post Date End -->
               </div><!-- Post Block End -->
               <div class="post-block">
                  <h4 class="post-title"><a href="#">Twice profit than before you ever</a></h4>
                  <div class="post-date">
                     <i class="fa fa-clock-o"></i>
                     <span class="month">March</span>
                     <span class="day">15,</span>
                     <span class="year">2018</span>
                  </div> <!-- Post Date End -->
               </div><!-- Post Block End -->
               <div class="post-block">
                  <h4 class="post-title"><a href="#">Twice profit than before you ever</a></h4>
                  <div class="post-date">
                     <i class="fa fa-clock-o"></i>
                     <span class="month">March</span>
                     <span class="day">15,</span>
                     <span class="year">2018</span>
                  </div> <!-- Post Date End -->
               </div><!-- Post Block End -->
            </div> <!-- Col End -->
            <div class="col-lg-3">
               <h3 class="widget-title-classic">Newsletter Update</h3>
               <p class="newsletter-text">Like paper money and golden is before it, bitcoin and ether allow.</p>
               <form action="#" class="form-newsletter">
                  <div class="form-row">
                     <div class="col tw-footer-form">
                        <input type="email" class="form-control" placeholder="Email Address">
                        <button type="submit"><i class="fa fa-send"></i></button>
                     </div>
                  </div>
               </form> <!-- Form End -->
            </div> <!-- Col End -->
         </div> <!-- Row End -->
      </div> <!-- Footer Main End -->
   </div> <!-- Container End -->
</footer> <!-- Footer End -->

<div class="copyright copyright-classic">
   <div class="container">
      <div class="row">
         <div class="col-lg-6">
            <p class="copyright-text">Copyright &copy; 2018, All Right Reserved <a href="#"><span>BitVaults</span></a></p>
         </div> <!-- Col End -->
         <div class="col-lg-6">
            <ul class="footer-menu">
               <li><a href="#">Privacy</a></li>
               <li><a href="#">Terms Of Use</a></li>
               <li><a href="#">Policy</a></li>
               <li><a href="#">Contact</a></li>         
            </ul> <!-- Menu End -->
         </div> <!-- Col end -->
      </div> <!-- Row End -->
   </div> <!-- Container End -->
</div> <!-- Copyright End -->

<div class="back-to-top" id="back-to-top" data-spy="affix" data-offset-top="10">
   <button class="btn btn-primary" title="Back to Top">
      <i class="fa fa-angle-double-up"></i><!-- icon end-->
   </button><!-- button end-->
</div> <!-- Back to top end -->

<script src="<?= base_url(); ?>resource/js/jquery.js"></script>
<script src="<?= base_url(); ?>resource/js/popper.min.js"></script>
<script src="<?= base_url(); ?>resource/js/bootstrap.min.js"></script>

<script>
    $('#login').click(function(e){
        e.preventDefault();
        window.location.href = '<?= base_url() ?>User/Login';
    })
    $('#register').click(function(e){
        e.preventDefault();
        window.location.href = '<?= base_url() ?>User/Register';
    })
   
</script>
<script src="<?= base_url(); ?>resource/js/jquery.magnific-popup.js"></script>
<script src="<?= base_url(); ?>resource/js/jquery.counterup.js"></script>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCsa2Mi2HqyEcEnM1urFSIGEpvualYjwwM"></script>
<script src="<?= base_url(); ?>resource/js/isotope.pkgd.min.js"></script>
<script src="<?= base_url(); ?>resource/js/countdown.js"></script>
<script src="<?= base_url(); ?>resource/js/particles.js"></script>
<script src="<?= base_url(); ?>resource/js/jquery.smooth.scroll.js"></script>
<script src="<?= base_url(); ?>resource/js/bundle.js"></script>
</body>
</html>