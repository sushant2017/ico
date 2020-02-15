<?php 
$this->load->view('_layouts/header');
$this->load->view('_layouts/sidebar');

?>
   
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Buy ICO</h3>
            <div class="row breadcrumbs-top d-inline-block">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.php">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Buy ICO
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="content-header-right col-md-4 col-12 d-none d-md-inline-block">
            <div class="btn-group float-md-right"><a class="btn-gradient-secondary btn-sm white" href="wallet.php">Buy now</a></div>
          </div>
        </div>
        <div class="content-detached content-left">
          <div class="content-body">
            <!-- Demo options menu -->

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
       
    </div>
</div>
<!--/ Demo fullscreen-overlay --><!-- CIC -->
<section class="card pull-up">
    <div class="card-content">
        <div class="card-body">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-3 col-xl-2 col-12 d-none d-md-block">
                        <div class="crypto-circle rounded-circle">
                            <i class="icon-layers"></i>
                        </div>
                    </div>
                    <div class="col-md-5 col-xl-6 col-12">
                        <p><strong>Your balance:</strong></p>
                        <h1>3,458.88 CIC</h1>
                        <p class="mb-0">Welcome bonus <strong>+30%</strong> expires in 21 days.</p>
                    </div>
                    <div class="col-md-4 col-xl-4 col-12 d-none d-md-block text-right">
                        <button type="button" class="btn-gradient-secondary mt-2">Withdraw <i class="la la-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--/ CIC -->
<h3 class="mt-4">Buy tokens</h3>
<p>To buy tokens, transfer ETH or BTC to your personal deposit address:</p>
<!-- Bitcoin -->
<section class="card pull-up">
    <div class="card-content">
        <div class="card-body">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-3 col-xl-2 col-12 d-none d-md-block">
                        <div class="crypto-circle rounded-circle">
                            <i class="cc BTC-alt"></i>
                        </div>
                    </div>
                    <div class="col-md-5 col-xl-7 col-12">
                        <p><strong>Bitcoin</strong></p>
                        <h5>0xd38d9eeb5b9617d758cee2c683e1d385637635e9</h5>
                        <button type="button" class="btn btn-warning round mr-1 mb-0">Copy</button>
                        <button type="button" class="btn btn-warning round mr-1 mb-0" data-toggle="modal" data-target="#purchaseBTCModalLabel">Buy</button>
                    </div>
                    <div class="col-md-4 col-xl-3 col-12 d-none d-md-block">
                        <img src="app-assets/images/icons/sample-qr.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--/ Bitcoin -->
<!-- Ethereum -->
<section class="card pull-up">
    <div class="card-content">
        <div class="card-body">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-3 col-xl-2 col-12 d-none d-md-block">
                        <div class="crypto-circle rounded-circle">
                            <i class="cc ETH-alt"></i>
                        </div>
                    </div>
                    <div class="col-md-5 col-xl-7 col-12">
                        <p><strong>Ethereum</strong></p>
                        <h5>0xd38d9eeb5b9617d758cee2c683e1d385637635e9</h5>
                        <button type="button" class="btn btn-warning round mr-1 mb-0">Copy</button>
                        <button type="button" class="btn btn-warning round mr-1 mb-0" data-toggle="modal" data-target="#purchaseETHModalLabel">Buy</button>
                    </div>
                    <div class="col-md-4 col-xl-3 col-12 d-none d-md-block">
                        <img src="app-assets/images/icons/sample-qr.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--/ Ethereum -->
<!-- TetherUSD -->
<section class="card pull-up">
    <div class="card-content">
        <div class="card-body">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-3 col-xl-2 col-12 d-none d-md-block">
                        <div class="crypto-circle rounded-circle">
                            <i class="cc USDT-alt"></i>
                        </div>
                    </div>
                    <div class="col-md-5 col-xl-7 col-12">
                        <p><strong>TetherUSD</strong></p>
                        <h5>0xd38d9eeb5b9617d758cee2c683e1d385637635e9</h5>
                        <button type="button" class="btn btn-warning round mr-1 mb-0">Copy</button>
                        <button type="button" class="btn btn-warning round mr-1 mb-0" data-toggle="modal" data-target="#purchaseUSDTModalLabel">Buy</button>
                    </div>
                    <div class="col-md-4 col-xl-3 col-12 d-none d-md-block">
                        <img src="app-assets/images/icons/sample-qr.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--/ TetherUSD -->
<!-- USD, EUR, other fiat currencies -->
<section class="card pull-up">
    <div class="card-content">
        <div class="card-body">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-3 col-xl-2 col-12 d-none d-md-block">
                        <div class="crypto-circle rounded-circle">
                            <i class="la la-dollar"></i>
                        </div>
                    </div>
                    <div class="col-md-9 col-12">
                        <p><strong>USD, EUR, other fiat currencies</strong></p>
                        <p>Click the button below to see the details.</p>
                        <button type="button" class="btn btn-warning round mr-1 mb-0">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--/ USD, EUR, other fiat currencies -->


<!-- Purchase with BTC Modal -->
<div class="modal fade" id="purchaseBTCModalLabel" tabindex="-1" role="dialog" aria-labelledby="purchaseBTCModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="purchaseModalLabel">Buy with Bitcoin</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card-content">
                    <div class="card-body">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-md-2 col-12 d-none d-md-block">
                                    <div class="crypto-circle rounded-circle">
                                        <i class="cc BTC-alt"></i>
                                    </div>
                                </div>
                                <div class="col-md-8 col-12">
                                    <p><strong>Bitcoin</strong></p>
                                    <h5>0xd38d9eeb5b9617d758cee2c683e1d385637635e9</h5>
                                    <button type="button" class="btn btn-warning round mr-1 mb-0">Copy</button>
                                </div>
                                <div class="col-md-2 col-12 d-none d-md-block">
                                    <img src="app-assets/images/icons/sample-qr.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form class="form form-horizontal mt-2 mx-2">
                    <div class="form-body">
                        <div class="row">
                            <div class="col-12 col-md-5">
                                <div class="form-group row">
                                    <label class="col-2 label-control" for="projectinput1">BTC</label>
                                    <fieldset class="col-10">
                                      <div class="input-group">
                                        <input type="text" class="form-control" value="0" aria-describedby="basic-addon4">
                                        <div class="input-group-append">
                                          <span class="input-group-text" id="basic-addon4"><i class="cc BTC-alt"></i></span>
                                        </div>
                                      </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="col-12 col-md-2">
                                <fieldset class="col-12">
                                  <p class="mb-0 text-center font-medium-5">=</p>
                                </fieldset>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group row">
                                    <label class="col-2 label-control" for="projectinput2">USD</label>
                                    <fieldset class="col-10">
                                      <div class="input-group">
                                        <input type="text" class="form-control" value="0" aria-describedby="basic-addon4">
                                        <div class="input-group-append">
                                          <span class="input-group-text" id="basic-addon4"><i class="icon-layers"></i></span>
                                        </div>
                                      </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <p class="font-italic mx-1 mb-2">The calculator uses the effective CIC price, which is based on the price 1 CIC = 0.0000142 BTC and 15% bonus.</p>
                <h6 class="mx-1">4 step guide</h6>
                <ol>
                    <li>Calculate how much tokens you want to buy.</li>
                    <li>Copy/Scan the displayed address</li>
                    <li>Send your BTC to that address. You may send it right from your exchange.</li>
                    <li>Upon transaction confirmation, you will see CIC tokens in your wallet balance.</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<!--/ Purchase with BTC Modal -->

<!-- Purchase with ETH Modal -->
<div class="modal fade" id="purchaseETHModalLabel" tabindex="-1" role="dialog" aria-labelledby="purchaseETHModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="purchaseModalLabel">Buy with Ethereum</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card-content">
                    <div class="card-body">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-md-2 col-12 d-none d-md-block">
                                    <div class="crypto-circle rounded-circle">
                                        <i class="cc ETH-alt"></i>
                                    </div>
                                </div>
                                <div class="col-md-8 col-12">
                                    <p><strong>Etherium</strong></p>
                                    <h5>0xd38d9eeb5b9617d758cee2c683e1d385637635e9</h5>
                                    <button type="button" class="btn btn-warning round mr-1 mb-0">Copy</button>
                                </div>
                                <div class="col-md-2 col-12 d-none d-md-block">
                                    <img src="app-assets/images/icons/sample-qr.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form class="form form-horizontal mt-2 mx-2">
                    <div class="form-body">
                        <div class="row">
                            <div class="col-12 col-md-5">
                                <div class="form-group row">
                                    <label class="col-2 label-control" for="projectinput1">ETH</label>
                                    <fieldset class="col-10">
                                      <div class="input-group">
                                        <input type="text" class="form-control" value="0" aria-describedby="basic-addon4">
                                        <div class="input-group-append">
                                          <span class="input-group-text" id="basic-addon4"><i class="cc ETH-alt"></i></span>
                                        </div>
                                      </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="col-12 col-md-2">
                                <fieldset class="col-12">
                                  <p class="mb-0 text-center font-medium-5">=</p>
                                </fieldset>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group row">
                                    <label class="col-2 label-control" for="projectinput2">USD</label>
                                    <fieldset class="col-10">
                                      <div class="input-group">
                                        <input type="text" class="form-control" value="0" aria-describedby="basic-addon4">
                                        <div class="input-group-append">
                                          <span class="input-group-text" id="basic-addon4"><i class="icon-layers"></i></span>
                                        </div>
                                      </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <p class="font-italic mx-1 mb-2">The calculator uses the effective CIC price, which is based on the price 1 CIC = 0.0000142 ETH and 15% bonus.</p>
                <h6 class="mx-1">4 step guide</h6>
                <ol>
                    <li>Calculate how much tokens you want to buy.</li>
                    <li>Copy/Scan the displayed address</li>
                    <li>Send your ETH to that address. You may send it right from your exchange.</li>
                    <li>Upon transaction confirmation, you will see CIC tokens in your wallet balance.</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<!--/ Purchase with ETH Modal -->

<!-- Purchase with USDT Modal -->
<div class="modal fade" id="purchaseUSDTModalLabel" tabindex="-1" role="dialog" aria-labelledby="purchaseUSDTModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="purchaseModalLabel">Buy with TetherUSD</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card-content">
                    <div class="card-body">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-md-2 col-12 d-none d-md-block">
                                    <div class="crypto-circle rounded-circle">
                                        <i class="cc USDT-alt"></i>
                                    </div>
                                </div>
                                <div class="col-md-8 col-12">
                                    <p><strong>TetherUSD</strong></p>
                                    <h5>0xd38d9eeb5b9617d758cee2c683e1d385637635e9</h5>
                                    <button type="button" class="btn btn-warning round mr-1 mb-0">Copy</button>
                                </div>
                                <div class="col-md-2 col-12 d-none d-md-block">
                                    <img src="app-assets/images/icons/sample-qr.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form class="form form-horizontal mt-2 mx-2">
                    <div class="form-body">
                        <div class="row">
                            <div class="col-12 col-md-5">
                                <div class="form-group row">
                                    <label class="col-2 label-control" for="projectinput1">USDT</label>
                                    <fieldset class="col-10">
                                      <div class="input-group">
                                        <input type="text" class="form-control" value="0" aria-describedby="basic-addon4">
                                        <div class="input-group-append">
                                          <span class="input-group-text" id="basic-addon4"><i class="cc USDT-alt"></i></span>
                                        </div>
                                      </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="col-12 col-md-2">
                                <fieldset class="col-12">
                                  <p class="mb-0 text-center font-medium-5">=</p>
                                </fieldset>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group row">
                                    <label class="col-2 label-control" for="projectinput2">CIC</label>
                                    <fieldset class="col-10">
                                      <div class="input-group">
                                        <input type="text" class="form-control" value="0" aria-describedby="basic-addon4">
                                        <div class="input-group-append">
                                          <span class="input-group-text" id="basic-addon4"><i class="icon-layers"></i></span>
                                        </div>
                                      </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <p class="font-italic mx-1 mb-2">The calculator uses the effective CIC price, which is based on the price 1 CIC = 0.0000142 USDT and 15% bonus.</p>
                <h6 class="mx-1">4 step guide</h6>
                <ol>
                    <li>Calculate how much tokens you want to buy.</li>
                    <li>Copy/Scan the displayed address</li>
                    <li>Send your USDT to that address. You may send it right from your exchange.</li>
                    <li>Upon transaction confirmation, you will see CIC tokens in your wallet balance.</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<!--/ Purchase with USDT Modal -->
          </div>
        </div>
        <div class="sidebar-detached sidebar-right" ="">
          <div class="sidebar"><div class="sidebar-content">
    <!-- token sale progress -->
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
                    <span class="float-left">Distributed <br/> <strong>6,235,125 CIC</strong></span>
                    <span class="float-right text-right">Contributed  <br/> <strong>5478 ETH | 80 BTC</strong></span>
                </div>
            </div>
        </div>
    </div>
    <!--/ token sale progress -->

    <!-- token sale progress -->
    <div class="card">
        <div class="card-header">
            <h6 class="card-title text-center">Calculator</h6>            
        </div>
        <div class="card-content collapse show">
            <div class="card-body">
                <form class="form form-horizontal">
                    <div class="form-body">    
                        <div class="form-group row">
                            <fieldset class="col-12">
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder="ETH" aria-describedby="basic-addon4">
                                <div class="input-group-append">
                                  <span class="input-group-text" id="basic-addon4"><i class="cc ETH-alt"></i></span>
                                </div>
                              </div>
                            </fieldset>
                        </div>
                        <div class="form-group row">
                            <fieldset class="col-12">
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder="BTC" aria-describedby="basic-addon4">
                                <div class="input-group-append">
                                  <span class="input-group-text" id="basic-addon4"><i class="cc BTC-alt"></i></span>
                                </div>
                              </div>
                            </fieldset>
                        </div>
                        <div class="form-group row">
                            <fieldset class="col-12">
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder="USD" aria-describedby="basic-addon4">
                                <div class="input-group-append">
                                  <span class="input-group-text" id="basic-addon4"><i class="la la-dollar"></i></span>
                                </div>
                              </div>
                            </fieldset>
                        </div>
                        <div class="form-group row">
                            <fieldset class="col-12">
                              <p class="mb-0">=</p>
                            </fieldset>
                        </div>
                        <div class="form-group row">
                            <fieldset class="col-12">
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder="CIC" aria-describedby="basic-addon4">
                                <div class="input-group-append">
                                  <span class="input-group-text" id="basic-addon4"><i class="icon-layers"></i></span>
                                </div>
                              </div>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--/ token sale progress -->
    
</div>




          </div>
        </div>
      </div>
    </div>
    
<?php  $this->load->view('_layouts/footer'); ?>