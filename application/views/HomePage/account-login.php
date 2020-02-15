<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<?php $this->view('HomePage/include/header'); ?>

  <body class="vertical-layout vertical-compact-menu 1-column  bg-full-screen-image menu-expanded blank-page blank-page" data-open="click" data-menu="vertical-compact-menu" data-col="1-column">
    <!-- ////////////////////////////////////////////////////////////////////////////-->
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">

    <div class="fullscreen-overlay">
        <div class="wrap mt-2">
            <button class="btn btn-default btn-sm btn-close fullscreen-overlay-open float-right"><i class="la la-times"></i></button>
            <div class="crypto-ico-add my-4">
                <div class="row">
                    <div class="col-12 col-12 text-center">
                        <img class="img-fluid img-add-banner" src="../crypto-ico/images/demo/offer-banner.jpg" alt="Crypto ICO add banner">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
<section id="account-login" class="flexbox-container">    
    <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-5 col-sm-5 col-12 p-0">
            <div class="card border-grey border-lighten-3 m-0 box-shadow-0 card-account-right height-400">                
                <div class="card-content">                    
                    <div class="card-body p-3">
                        <p class="text-center h5 text-capitalize">Welcome to KINGDOM ICO!</p>
                        <p class="mb-3 text-center">Please enter your login details</p>
                        <?php if($this->session->flashdata('successLog')): ?>
                            <p><?php echo $this->session->flashdata('successLog'); ?></p>
                        <?php endif; ?>
                        <form class="form-horizontal form-signin" action="<?= base_url() ?>User/LoginUser" method="post">                            
                            <fieldset class="form-label-group">
                                <input type="text" class="form-control" id="user-name" name="email" placeholder="Your Username"   autofocus="">
                                <label for="user-name">Username</label>
                                <?= form_error('email'); ?>
                            </fieldset>
                           
                            <fieldset class="form-label-group">
                                <input type="password" class="form-control" name="password" id="user-password" placeholder="Enter Password"  autofocus="">
                                <label for="user-password">Password</label>
                                <?= form_error('password'); ?>
                            </fieldset>
                            
                            <div class="form-group row">
                                <div class="col-md-6 col-12 text-center text-sm-left">
                                    <fieldset>
                                        <input type="checkbox" id="remember-me" class="chk-remember">
                                        <label for="remember-me"> Remember</label>
                                    </fieldset>
                                </div>
                                <div class="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="#" class="card-link">Forgot Password?</a></div>
                            </div>
                            <button type="submit" class="btn-gradient-primary btn-block my-1">Log In</button>
                            <p class="text-center"><a href="<?= base_url(); ?>User/Register" class="card-link">Register</a></p>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>        
    </div>    
</section>

        </div>
      </div>
    </div>
 
   