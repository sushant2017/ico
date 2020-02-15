<?php 
$this->load->view('_layouts/header');
$this->load->view('_layouts/sidebar');

?>
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">Wallet</h3>
            <div class="row breadcrumbs-top d-inline-block">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.php">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Wallet
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
<div id="wallet">
    <section class="card pull-up">
        <div class="card-content">
            <div class="card-body">
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-6 col-12 py-1">
                            <div class="media">
                                <i class="cc BTC mr-2 font-large-2 warning"></i>
                                <div class="media-body">
                                    <h5 class="mt-0 text-capitalize">Bitcoin</h5>
                                    <p class="text-muted mb-0 font-small-3 wallet-address">0xd38d9eeb5b9617d758cee2c683e1d385637635e9</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <h6>0.019842 BTC</h6>
                            <p class="text-muted mb-0 font-small-3">~ $2650.78</p>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Deposit</a>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Withdraw</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/ BTC -->
    <!-- ETH -->
    <section class="card pull-up">
        <div class="card-content">
            <div class="card-body">
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-6 col-12 py-1">
                            <div class="media">
                                <i class="cc ETH mr-2 font-large-2 blue accent-3"></i>
                                <div class="media-body">
                                    <h5 class="mt-0 text-capitalize">Ethereum</h5>
                                    <p class="text-muted mb-0 font-small-3 wallet-address">0xd38d9eeb5b9617d758cee2c683e1d385637635e9</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <h6>0.6789842 ETH</h6>
                            <p class="text-muted mb-0 font-small-3">~ $650.78</p>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Deposit</a>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Withdraw</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/ ETH -->
    <!-- TetherUSD -->
    <section class="card pull-up">
        <div class="card-content">
            <div class="card-body">
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-6 col-12 py-1">
                            <div class="media">
                                <i class="cc USDT-alt mr-2 font-large-2 teal lighten-2"></i>
                                <div class="media-body">
                                    <h5 class="mt-0 text-capitalize">TetherUSD</h5>
                                    <p class="text-muted mb-0 font-small-3 wallet-address">0xd38d9eeb5b9617d758cee2c683e1d385637635e9</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <h6>0 USDT</h6>
                            <p class="text-muted mb-0 font-small-3">~ $0</p>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Deposit</a>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Withdraw</a>
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
                        <div class="col-md-6 col-12 py-1">
                            <div class="media">
                                <i class="la la-dollar mr-2 bg-primary white bg-lighten-2 rounded-circle"></i>
                                <div class="media-body">
                                    <h5 class="mt-0 text-capitalize">USD</h5>
                                    <p class="text-muted mb-0 font-small-3 wallet-address">Fiat currencies</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <h6>1500 USD</h6>
                            <p class="text-muted mb-0 font-small-3">~ $1500</p>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Deposit</a>
                        </div>
                        <div class="col-md-2 col-12 py-1 text-center">
                            <a href="#" class="line-height-3">Withdraw</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/ USD, EUR, other fiat currencies -->
</div>
          </div>
        </div>
        <div class="sidebar-detached sidebar-right" ="">
          <div class="sidebar"><div id="wallet-sidebar" class="sidebar-content">
	<div class="row">
		<p class="py-1 text-capitalize col-12">Your balance</p>
	</div>
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
</div>
          </div>
        </div>
      </div>
    </div>
    <?php  $this->load->view('_layouts/footer'); ?>
    