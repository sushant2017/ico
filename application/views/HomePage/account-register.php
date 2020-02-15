<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
  
<?php $this->view('HomePage/include/header'); ?>

  <body class="vertical-layout vertical-compact-menu 1-column  bg-full-screen-image menu-expanded blank-page blank-page" data-open="click" data-menu="vertical-compact-menu" data-col="1-column">
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
  <section id="account-register" class="flexbox-container">    
    <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="col-xl-5 col-lg-4 col-md-4 col-sm-6 col-6 p-0">
            <div class="card border-grey border-lighten-3 m-0 box-shadow-0 card-account-right height-400">                
                <div class="card-content">                    
                    <div class="card-body p-3">
                        <p class="text-center h5 text-capitalize">Started with KINGDOM ICO!</p>
                        <p class="mb-3 text-center">Create your account</p>
                        <?php if($this->session->flashdata('success')): ?>
                            <p><?php echo $this->session->flashdata('success'); ?></p>
                        <?php endif; ?>
                        <form class="form-horizontal form-signin" method="post" action="<?= base_url() ?>User/Save_UserInfo">                            
                            <div class="row">
                                <div class="col-md-6 col-sm-6 marginCall">
                                    <fieldset class="form-label-group">
                                        <input type="text" value="<?= set_value('first_name'); ?>" class="form-control" id="first-name" name="first_name" placeholder="First Name" autofocus="">
                                        <label for="first-name">First Name</label>
                                        <?= form_error('first_name'); ?>
                                    </fieldset>
                                </div>
                                <div class="col-md-6 col-sm-6 marginCall">
                                    <fieldset class="form-label-group ">
                                        <input type="text" class="form-control" id="last-name" value="<?= set_value('last_name'); ?>" name="last_name" placeholder="Last Name"  autofocus="">
                                        <label for="last-name">Last Name</label>
                                        <?= form_error('last_name'); ?>
                                    </fieldset>
                                </div>
                                <div class="col-md-6 col-sm-6 marginCall">
                                    <fieldset class="form-label-group">
                                        <input type="password" class="form-control" id="password" value="<?= set_value('password'); ?>" name="password" placeholder="Password"  autofocus="">
                                        <label for="password">Password</label>
                                        <?= form_error('password'); ?>
                                    </fieldset>
                                </div>
                                <div class="col-md-6 col-sm-6 marginCall">
                                    <fieldset class="form-label-group">
                                        <input type="email" class="form-control" id="email-id" value="<?= set_value('email_address'); ?>" name="email_address" placeholder="Email"  autofocus="">
                                        <label for="email-id">Email address</label>
                                        <?= form_error('email_address'); ?>
                                    </fieldset>
                                </div>
                                <div class="col-md-6 col-sm-6 marginCall">
                                    <fieldset class="form-label-group">
                                        <input type="text" class="form-control" name="country" value="<?= set_value('country'); ?>" id="country" placeholder="Country"  autofocus="">
                                        <label for="country">Country</label>
                                        <?= form_error('country'); ?>
                                    </fieldset>
                                </div>

                                <div class="col-md-6 col-sm-6 marginCall">
                                    <fieldset class="form-label-group">
                                        <input type="text" class="form-control" id="ref_code" value="<?= set_value('ref_code'); ?>" name="ref_code" placeholder="Ref Code"  autofocus="">
                                        <label for="ref_code">Ref Code</label>
                                        <?= form_error('ref_code'); ?>
                                    </fieldset>
                                </div>
                               
                            </div>
                        
                            <div class="form-group row" style="margin-top:20px !important">
                                <div class="col-12 text-center text-sm-left">
                                    <fieldset class="TermCheck">
                                        <input type="checkbox" name="term_check"  class="chk-remember">
                                        <label for="remember-me"> I agree to Crypto ICO's terms</label>
                                        <?= form_error('term_check'); ?>
                                    </fieldset>
                                </div>                                
                            </div>
                            
                            <button type="submit" name="SubmitRegister" class="btn-gradient-primary btn-block my-1">Sign Up</button>
                            <p class="text-center"><a href="<?= base_url(); ?>User/Login" class="card-link">Log In</a></p>
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
    <script src="<?= base_url() ?>resource/dashboard/app-assets/vendors/js/vendors.min.js" type="text/javascript"></script>
    <script src="<?= base_url() ?>resource/dashboard/app-assets/vendors/js/forms/icheck/icheck.min.js" type="text/javascript"></script>
    <script src="<?= base_url() ?>resource/dashboard/app-assets/js/core/app-menu.min.js" type="text/javascript"></script>
    <script src="<?= base_url() ?>resource/dashboard/app-assets/js/core/app.min.js" type="text/javascript"></script>
    <script src="<?= base_url() ?>resource/dashboard/app-assets/js/scripts/demo.min.js" type="text/javascript"></script>
    <script src="<?= base_url() ?>resource/dashboard/app-assets/js/scripts/forms/form-login-register.min.js" type="text/javascript"></script>
</body>
</html>