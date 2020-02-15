<?php 
$this->load->view('_layouts/header');
$this->load->view('_layouts/sidebar');

?>
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Account Profile</h3>
            <div class="row breadcrumbs-top d-inline-block">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.php">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Account Profile
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="content-header-right col-md-4 col-12 d-none d-md-inline-block">
            <div class="btn-group float-md-right"><a class="btn-gradient-secondary btn-sm white" href="wallet.php">Buy now</a></div>
          </div>
        </div>
        <div class="content-body">
          <!-- Demo options menu -->
<div class="demo-options">
    <ul class="demo-options-list">
        <li>
            <button type="button" class="btn btn-sm btn-settings fullscreen-overlay-open" data-toggle="tooltip" data-placement="left" title="View all demos"><i class="la la-desktop"></i></button>
        </li>
        <li>
            <a href="https://1.envato.market/cryptoico_html" class="btn btn-sm btn-cart open-fullscreen-overlay" target="_blank" data-toggle="tooltip" data-placement="left" title="Buy now"><i class="la la-cart-arrow-down"></i></a>
        </li>
        <li>
            <a href="https://pixinvent.com/demo/crypto-ico-admin/html/rtl/vertical-menu/" class="btn btn-rtl-mode open-fullscreen-overlay" data-toggle="tooltip" data-placement="left" title="RTL mode">RTL</a>
        </li>
    </ul>
</div>
<!--/ Demo options menu -->
<!-- Demo fullscreen-overlay -->
<div class="fullscreen-overlay">
    <div class="wrap mt-2">
        <button class="btn btn-default btn-sm btn-close fullscreen-overlay-open float-right"><i class="la la-times"></i></button>
        <!-- Add Banner -->
        <div class="crypto-ico-add my-4">
            <div class="row">
                <div class="col-12 col-12 text-center">
                    <img class="img-fluid img-add-banner" src="../crypto-ico/images/demo/offer-banner.jpg" alt="Crypto ICO add banner">
                </div>
            </div>
        </div>
        <!--/ Add Banner -->
        <div class="crypto-ico-demo">
            <div class="row">
                <div class="col-12 col-md-4">
                    <p class="ico-demo-sub-title mb-1">Semi Light Layout</p>
                    <h6 class="ico-demo-title text-uppercase font-weight-bold">Counter Landing Page</h6>
                    <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-counter/">
                        <img class="img-fluid mb-1 mt-2" src="../crypto-ico/images/demo/template-counter.jpg" alt="Counter Landing Page">
                    </a>
                    <ul class="nav justify-content-center mt-1">
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-counter/template-counter-ripple.php" class="ico-demo-link nav-link btn btn-outline-light">Ripple</a>
                        </li>
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-counter/template-counter-particle.php" class="ico-demo-link nav-link btn btn-outline-light">Particle</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-counter/template-counter-classic.php" class="ico-demo-link nav-link btn btn-outline-light">Classic</a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <p class="ico-demo-sub-title mb-1">Dark + Light Layout</p>
                    <h6 class="ico-demo-title text-uppercase font-weight-bold">3D Graphic Landing Page</h6>
                    <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-graphics/">
                        <img class="img-fluid mb-1 mt-2" src="../crypto-ico/images/demo/template-3d-graphics.jpg" alt="Template with Counter">
                    </a>
                    <ul class="nav justify-content-center mt-1">
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-graphics/template-3d-graphic-ripple.php" class="ico-demo-link nav-link btn btn-outline-light">Ripple</a>
                        </li>
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-graphics/template-3d-graphic-particle.php" class="ico-demo-link nav-link btn btn-outline-light">Particle</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-graphics/template-3d-graphic-classic.php" class="ico-demo-link nav-link btn btn-outline-light">Classic</a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <p class="ico-demo-sub-title mb-1">ICO Dashboard</p>
                    <h6 class="ico-demo-title text-uppercase font-weight-bold">Crypto ICO admin panel</h6>
                    <a href="index-2.php" target="_blank">
                        <img class="img-fluid mb-1 mt-2" src="../crypto-ico/images/demo/ico-dashboard.jpg" alt="Crypto ICO admin panel">
                    </a>
                    <ul class="nav justify-content-center mt-1">
                        <li class="nav-item mr-2">
                            <a href="index-2.php" class="ico-demo-link nav-link btn btn-outline-light">LTR</a>
                        </li>
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico-admin/html/rtl/vertical-menu/" target="_blank" class="ico-demo-link nav-link btn btn-outline-light">RTL</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row py-4">
                <div class="col-12 col-md-4">
                    <p class="ico-demo-sub-title mb-1">Dark Layout</p>
                    <h6 class="ico-demo-title text-uppercase font-weight-bold">3D Animated Graphic Landing Page</h6>
                    <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-animation/">
                        <img class="img-fluid mb-1 mt-2" src="../crypto-ico/images/demo/template-3d-animation.jpg" alt="Template with Counter">
                    </a>
                    <ul class="nav justify-content-center mt-1">
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-animation/template-3d-animation-ripple.php" class="ico-demo-link nav-link btn btn-outline-light">Ripple</a>
                        </li>
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-animation/template-3d-animation-particle.php" class="ico-demo-link nav-link btn btn-outline-light">Particle</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-3d-animation/template-3d-animation-classic.php" class="ico-demo-link nav-link btn btn-outline-light">Classic</a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <p class="ico-demo-sub-title mb-1">Light Layout</p>
                    <h6 class="ico-demo-title text-uppercase font-weight-bold">Intro Video Landing Page </h6>
                    <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-intro-video/">
                        <img class="img-fluid mb-1 mt-2" src="../crypto-ico/images/demo/template-intro-video.jpg" alt="Intro Video Landing Page">
                    </a>
                    <ul class="nav justify-content-center mt-1">
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-intro-video/template-intro-video-ripple.php" class="ico-demo-link nav-link btn btn-outline-light">Ripple</a>
                        </li>
                        <li class="nav-item mr-2">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-intro-video/template-intro-video-particle.php" class="ico-demo-link nav-link btn btn-outline-light">Particle</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://pixinvent.com/demo/crypto-ico/html/ltr/template-intro-video/template-intro-video-classic.php" class="ico-demo-link nav-link btn btn-outline-light">Classic</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!--/ Demo fullscreen-overlay --><div class="row">
    <div class="col-12 col-md-8">
        <!-- User Profile -->
        <section class="card">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-2 col-12">
                                <img src="app-assets/images/portrait/medium/avatar-m-1.png" class="rounded-circle height-100" alt="Card image" />
                            </div>
                            <div class="col-md-10 col-12">
                                <div class="row">
                                    <div class="col-12 col-md-4">
                                        <p class="text-bold-700 text-uppercase mb-0">Transactions</p>
                                        <p class="mb-0">12/14</p>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <p class="text-bold-700 text-uppercase mb-0">Last login</p>
                                        <p class="mb-0">2018-04-30 16:44:04</p>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <p class="text-bold-700 text-uppercase mb-0">IP</p>
                                        <p class="mb-0">43.228.229.172</p>
                                    </div>
                                </div>
                                <hr/>
                                <form class="form-horizontal form-user-profile row mt-2" action="https://pixinvent.com/demo/crypto-ico-admin/html/ltr/vertical-menu/index.php">
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="first-name" value="John" required="" autofocus="">
                                            <label for="first-name">First name</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="last-name" value="Doe" required="" autofocus="">
                                            <label for="last-name">Lats name</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="user-name" value="johndoe9016" required="" autofocus="">
                                            <label for="user-name">User name</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="email-address" value="johndoe9016@gmail.com" required="" autofocus="">
                                            <label for="email-address">Email</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="password" class="form-control" id="old-password" placeholder="Enter Password" required="" autofocus="">
                                            <label for="old-password">Old password</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-6">
                                        <fieldset class="form-label-group">
                                            <input type="password" class="form-control" id="new-password" placeholder="Enter Password" required="" autofocus="">
                                            <label for="new-password">New password</label>
                                        </fieldset>
                                    </div>
                                    <div class="col-12 text-right">
                                        <button type="submit" class="btn-gradient-primary my-1">Save</button>
                                    </div>
                                </form>
                                <h5>Referral Link</h5>
                                <hr/>
                                <form class="form-horizontal form-referral-link row mt-2" action="https://pixinvent.com/demo/crypto-ico-admin/html/ltr/vertical-menu/index.php">
                                    <div class="col-12">
                                        <fieldset class="form-label-group">
                                            <input type="text" class="form-control" id="referral-link" value="https://1.envato.market/pixinvent_portfolio" required="" autofocus="">
                                            <label for="first-name">Referral link</label>
                                        </fieldset>
                                    </div>
                                </form>
                                <p>This is your Crypto ICO referral link. You can use it to share the project with your friends and other interested parties. If any of them sign up with this link, they will get reward amounts to 1% and will be added to your referral program. Your reward amounts to 5.0% of all ICI tokens purchased by your referrals.</p>
                                <h5 class="mt-3">Security</h5>
                                <hr/>
                                <div class="row">
                                    <div class="col-9">
                                        <p>Two-factor authorization</p>
                                    </div>
                                    <div class="col-3">
                                        <input type="checkbox" id="switcherySize2" class="switchery" data-size="sm" checked/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-9">
                                        <p>Login notification</p>
                                    </div>
                                    <div class="col-3">
                                        <input type="checkbox" id="switcherySize2" class="switchery" data-size="sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="col-12 col-md-4">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title text-center">ICO Tokens</h6>
            </div>
            <div class="card-content collapse show">
                <div class="card-body">
                    <div class="text-center row clearfix mb-2">
                        <div class="col-12">
                            <i class="icon-layers font-large-3 bg-warning bg-glow white rounded-circle p-3 d-inline-block"></i>
                        </div>
                    </div>
                    <h3 class="text-center">3,458.88 CIC</h3>
                </div>
                <div class="table-responsive">
                    <table class="table table-de mb-0">
                        <tbody>
                            <tr>
                                <td>CIC Token</td>
                                <td><i class="icon-layers"></i> 3,258 CIC</td>
                            </tr>
                            <tr>
                                <td>CIC Referral</td>
                                <td><i class="icon-layers"></i> 200.88 CIC</td>
                            </tr>
                            <tr>
                                <td>CIC Price</td>
                                <td><i class="cc BTC-alt"></i> 0.0001 BTC</td>
                            </tr>
                            <tr>
                                <td>Raised BTC</td>
                                <td><i class="cc BTC-alt"></i> 2154 BTC</td>
                            </tr>
                            <tr>
                                <td>Raised USD</td>
                                <td><i class="la la-dollar"></i> 4.52 M</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="card">
        <div class="card-header">
            <h6 class="card-title text-center">Token sale progress</h6>            
        </div>
        <div class="card-content collapse show">
            <div class="card-body">
                <div class="font-small-3 clearfix">
                    <span class="float-left">$0</span>
                    <span class="float-right">$5M</span>
                </div>
                <div class="progress progress-sm my-1 box-shadow-2">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="font-small-3 clearfix">
                    <span class="float-left">Distributed <br> <strong>6,235,125 CIC</strong></span>
                    <span class="float-right text-right">Contributed  <br> <strong>5478 ETH | 80 BTC</strong></span>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
    </div>
    </div>
    </div>


    <?php  $this->load->view('_layouts/footer'); ?>