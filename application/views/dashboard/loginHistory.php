<?php 
$this->load->view('_layouts/header');
$this->load->view('_layouts/sidebar');

?>

    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
            <h3 class="content-header-title mb-0 d-inline-block">History</h3>
            <div class="row breadcrumbs-top d-inline-block">
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.php">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">History
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
<!--/ Demo fullscreen-overlay --><div id="history">
    <div class="history-table-th d-none d-md-block">
        <div class="col-12">
            <div class="row px-1">
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">Date</p>
                </div>
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">Time</p>
                </div>
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">Browser</p>
                </div>
                <div class="col-md-2 col-12 py-1">
                    <p class="mb-0">IP</p>
                </div>
                <div class="col-md-1 col-12 py-1">
                    <p class="mb-0">Region</p>
                </div>
                <div class="col-md-3 col-12 py-1">
                    <p class="mb-0">Status</p>
                </div>
            </div>
        </div>
    </div>
    <div class="history-table-tbody">
        <section class="card pull-up">
            <div class="card-content">
                <div class="card-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date: </span> 10-03-2018</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Time: </span> 22:43:32(GMT+5)</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Browser: </span>  <span class="safari-icon browser-icon  d-none d-md-block"> Safari</span></p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">IP: </span>  192.168.1.100</p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Region: </span> USA</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0 success"><span class="d-inline-block d-md-none text-bold-700">Status: </span> Successful login</p>
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
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date: </span> 08-03-2018</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Time: </span> 21:43:32(GMT+5)</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Browser: </span>  <span class="chrome-icon browser-icon  d-none d-md-block"> Chrome</span></p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">IP: </span> 192.168.1.101</p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Region: </span> AUS</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0 danger"><span class="d-inline-block d-md-none text-bold-700">Status: </span> Failed attempt</p>
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
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date: </span> 07-03-2018</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Time: </span> 20:19:30(GMT+5)</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Browser: </span>  <span class="chrome-icon browser-icon  d-none d-md-block"> Chrome</span></p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">IP: </span> 192.168.1.101</p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Region: </span> AUS</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0 success"><span class="d-inline-block d-md-none text-bold-700">Status: </span> Successful login</p>
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
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date: </span> 06-03-2018</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Time: </span> 18:32:19(GMT+5)</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Browser: </span>  <span class="firefox-icon browser-icon  d-none d-md-block"> Firefox</span></p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">IP: </span> 192.168.1.103</p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Region: </span> UK</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0 success"><span class="d-inline-block d-md-none text-bold-700">Status: </span> Successful login</p>
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
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Date: </span> 05-03-2018</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Time: </span> 16:58:30(GMT+5)</p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Browser: </span>  <span class="ie-icon browser-icon  d-none d-md-block"> IE</span></p>
                            </div>
                            <div class="col-md-2 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">IP: </span> 192.168.1.104</p>
                            </div>
                            <div class="col-md-1 col-12 py-1">
                                <p class="mb-0"><span class="d-inline-block d-md-none text-bold-700">Region: </span> IN</p>
                            </div>
                            <div class="col-md-3 col-12 py-1">
                                <p class="mb-0 danger"><span class="d-inline-block d-md-none text-bold-700">Status: </span> Failed attempt</p>
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