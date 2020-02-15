<?php 
$this->load->view('_layouts/header');
$this->load->view('_layouts/sidebar'); ?>

    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Transactions</h3>
            <div class="row breadcrumbs-top d-inline-block">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.php">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Transactions
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
<!--/ Demo fullscreen-overlay --><div id="transactions">
    <div class="transactions-table-th d-none d-md-block">
        <div class="col-12">
            <div class="row px-1">
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">Date</p>
                </div>
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">Type</p>
                </div>
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">Amount</p>
                </div>
                <div class="col-md-1 col-12 py-1">
                    <p class="mb-0">Currency</p>
                </div>
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">Tokens (CIC)</p>
                </div>
                <div class="col-md-3 col-12 py-1">
                    <p class="mb-0">Details</p>
                </div>
            </div>
        </div>
    </div>
    <div class="transactions-table-tbody">
        <section class="card pull-up">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date: </span>2018-01-03</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <span class="d-inline-block d-md-none text-bold-700">Type: </span> <span class="d-inline-block d-md-none text-bold-700">Type: </span>  <a href="#" class="mb-0 btn-sm btn btn-outline-warning round">Deposit</a>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Amount: </span>  5.34111 </p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Currency: </span> <i class="cc ETH-alt"></i> ETH</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Tokens: </span> - </p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Details: </span> Deposit to your Balance <i class="la la-thumbs-up warning float-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="card pull-up">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date:</span> 2018-01-03</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <span class="d-inline-block d-md-none text-bold-700">Type: </span>  <a href="#" class="mb-0 btn-sm btn btn-outline-success round">Deposit</a>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Amount: </span>  5.34111 </p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Currency: </span> <i class="cc ETH-alt"></i> ETH</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Tokens: </span> 3,258</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Details: </span> Tokens Purchase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="card pull-up">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date:</span> 2018-01-03</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <span class="d-inline-block d-md-none text-bold-700">Type: </span>  <a href="#" class="mb-0 btn-sm btn btn-outline-info round">Referral</a>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Amount: </span>  - </p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Currency: </span>  - </p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Tokens: </span> 200.88</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Details: </span> Referral Promo Bonus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="card pull-up">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date:</span> 2018-01-21</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <span class="d-inline-block d-md-none text-bold-700">Type: </span>  <a href="#" class="mb-0 btn-sm btn btn-outline-danger round">Withdrawal</a>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Amount: </span>  - </p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Currency: </span>  - </p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Tokens: </span> - 3,458.88</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Details: </span> Tokens withdrawn <i class="la la-dollar warning float-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="card pull-up">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date:</span> 2018-01-25</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <span class="d-inline-block d-md-none text-bold-700">Type: </span>  <a href="#" class="mb-0 btn-sm btn btn-outline-warning round">Deposit</a>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Amount: </span> 0.8791 </p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Currency: </span> <i class="cc BTC-alt"></i> BTC</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Tokens: </span>  - </p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Details: </span> Deposit to your Balance <i class="la la-thumbs-up warning float-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center pagination-separate pagination-flat">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">« Prev</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">Next »</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
        </div>
      </div>
    </div>


    <?php  $this->load->view('_layouts/footer'); ?>