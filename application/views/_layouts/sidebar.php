<nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-light navbar-bg-color">
    <div class="navbar-wrapper">
        <div class="navbar-header d-md-none">
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu font-large-1"></i></a></li>
            <li class="nav-item d-md-none"><a class="navbar-brand" href="index.php"><img class="brand-logo d-none d-md-block" alt="crypto ico admin logo" src="<?= base_url() ?>/resource/dashboard/app-assets/images/logo/logo.png"><img class="brand-logo d-sm-block d-md-none" alt="crypto ico admin logo sm" src="<?= base_url() ?>/resource/dashboard/app-assets/images/logo/logo-sm.png"></a></li>
            <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i class="la la-ellipsis-v">   </i></a></li>
          </ul>
    </div>
    <div class="navbar-container">
        <div class="collapse navbar-collapse" id="navbar-mobile">
        <ul class="nav navbar-nav mr-auto float-left">
            <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ft-menu">         </i></a></li>
            <li class="nav-item nav-search"><a class="nav-link nav-link-search" href="#"><i class="ficon ft-search"></i></a>
            <div class="search-input">
                <input class="input" type="text" placeholder="Explore Crypto ICO...">
            </div>
            </li>
        </ul>
        <ul class="nav navbar-nav float-right">         
            <li class="dropdown dropdown-language nav-item"><a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-gb"></i><span class="selected-language"></span></a>
            <div class="dropdown-menu" aria-labelledby="dropdown-flag"><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-gb"></i> English</a><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-fr"></i> French</a><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-cn"></i> Chinese</a><a class="dropdown-item" href="#"><i class="flag-icon flag-icon-de"></i> German</a></div>
            </li>
            <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="#" data-toggle="dropdown"><i class="ficon ft-bell"></i><span class="badge badge-pill badge-default badge-danger badge-default badge-up badge-glow">5</span></a>
            <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                <li class="dropdown-menu-header">
                <h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span></h6><span class="notification-tag badge badge-default badge-danger float-right m-0">5 New</span>
                </li>
                <li class="scrollable-container media-list w-100"><a href="javascript:void(0)">
                    <div class="media">
                    <div class="media-left align-self-center"><i class="ft-plus-square icon-bg-circle bg-cyan"></i></div>
                    <div class="media-body">
                        <h6 class="media-heading">You have new order!</h6>
                        <p class="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p><small>
                        <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">30 minutes ago</time></small>
                    </div>
                    </div></a><a href="javascript:void(0)">
                    <div class="media">
                    <div class="media-left align-self-center"><i class="ft-download-cloud icon-bg-circle bg-red bg-darken-1"></i></div>
                    <div class="media-body">
                        <h6 class="media-heading red darken-1">99% Server load</h6>
                        <p class="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p><small>
                        <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Five hour ago</time></small>
                    </div>
                    </div></a><a href="javascript:void(0)">
                    <div class="media">
                    <div class="media-left align-self-center"><i class="ft-alert-triangle icon-bg-circle bg-yellow bg-darken-3"></i></div>
                    <div class="media-body">
                        <h6 class="media-heading yellow darken-3">Warning notifixation</h6>
                        <p class="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p><small>
                        <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Today</time></small>
                    </div>
                    </div></a><a href="javascript:void(0)">
                    <div class="media">
                    <div class="media-left align-self-center"><i class="ft-check-circle icon-bg-circle bg-cyan"></i></div>
                    <div class="media-body">
                        <h6 class="media-heading">Complete the task</h6><small>
                        <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last week</time></small>
                    </div>
                    </div></a><a href="javascript:void(0)">
                    <div class="media">
                    <div class="media-left align-self-center"><i class="ft-file icon-bg-circle bg-teal"></i></div>
                    <div class="media-body">
                        <h6 class="media-heading">Generate monthly report</h6><small>
                        <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00">Last month</time></small>
                    </div>
                    </div></a></li>
                <li class="dropdown-menu-footer"><a class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a></li>
            </ul>
            </li>
            <li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="wallet.php"><i class="ficon icon-wallet"></i></a></li>
            <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">             <span class="avatar avatar-online"><img src="<?= base_url() ?>/resource/dashboard/app-assets/images/portrait/small/avatar-s-1.png" alt="avatar"></span><span class="mr-1">CIC<span class="user-name text-bold-700">3,458.88</span></span></a>
            <div class="dropdown-menu dropdown-menu-right">             <a class="dropdown-item" href="account-profile.php"><i class="ft-award"></i>John Doe</a>
                <div class="dropdown-divider"></div><a class="dropdown-item" href="account-profile.php"><i class="ft-user"></i> Profile</a><a class="dropdown-item" href="wallet.php"><i class="icon-wallet"></i> My Wallet</a><a class="dropdown-item" href="transactions.php"><i class="ft-check-square"></i> Transactions              </a>
                <div class="dropdown-divider"></div><a class="dropdown-item" href="account-login.php"><i class="ft-power"></i> Logout</a>
            </div>
            </li>
        </ul>
        </div>
    </div>
    </div>
</nav>


<div class="main-menu menu-fixed menu-dark menu-bg-default rounded menu-accordion menu-shadow">
    <div class="main-menu-content"><a class="navigation-brand d-none d-md-block d-lg-block d-xl-block" href="<?= base_url() ?>dashboardUser/UserICO/home"><img class="brand-logo" alt="crypto ico admin logo" src="<?= base_url() ?>/resource/dashboard/app-assets/images/logo/logo.png"/></a>
    <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
        <li class=" nav-item"><a href="<?= base_url() ?>dashboardUser/UserICO/home"><i class="icon-grid"></i><span class="menu-title" data-i18n="">Dashboard</span></a>
        </li>
        <li class=" nav-item"><a href="<?= base_url() ?>dashboardUser/UserICO/buysell"><i class="icon-layers"></i><span class="menu-title" data-i18n="">Buy ICO</span></a>
        </li>
        <li class=" nav-item"><a href="<?= base_url() ?>dashboardUser/UserICO/wallets"><i class="icon-wallet"></i><span class="menu-title" data-i18n="">Wallet</span></a>
        </li>
        <li class="active"><a href="<?= base_url() ?>dashboardUser/UserICO/transactions"><i class="icon-shuffle"></i><span class="menu-title" data-i18n="">Transactions</span></a>
        </li>
        <li class=" nav-item"><a href="<?= base_url() ?>dashboardUser/UserICO/faq"><i class="icon-support"></i><span class="menu-title" data-i18n="">FAQ</span></a>
        </li>
        <li class=" nav-item"><a href="#"><i class="icon-user-following"></i><span class="menu-title" data-i18n="">Account</span></a>
        <ul class="menu-content">
            <li><a class="menu-item" href="<?= base_url() ?>dashboardUser/UserICO/UserProfile">Profile</a>
            </li>
            <li><a class="menu-item" href="<?= base_url() ?>dashboardUser/UserICO/loginHistory">Login History</a>
            </li>
            <li class="navigation-divider"></li>
        </ul>
        </li>
    </ul>
    </div>
</div>