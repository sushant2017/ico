<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class dashboardUser extends CI_Controller {
    
	function __construct() {
		$this->pageData = '';
		parent::__construct();
		//$this->load->model('User_dashboard');
    
	}
	public function UserICO($viewpath)
	{
		$dash = 'dashboard';
		if($viewpath=='home'){
			$viewpath = 'dashboardIndex';
		}
		$this->session->set_userdata('user_id','sushant');
		$this->Data['title'] =  'Kingdom';
		$viewpath = $dash."/".$viewpath;
		if($this->session->has_userdata('user_id')){
            $this->load->view($viewpath, $this->Data);
          
		}else{
			echo 'HI';
			die;
		}
	}

	public function dashUser(){
		$this->pageData['content'] = 'dashboard/dashboardIndex';
		$this->load->view('_layouts/master' , $this->pageData );
	}

	
}
