<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

	function __construct() {
		
		parent::__construct();
		$this->load->model('User_Model');
    
	}

	public function Login()
	{
		$this->load->view('HomePage/account-login');
	}
	public function Register()
	{
		$this->load->view('HomePage/account-register');
	}
	public function LoginUser(){
		$user_info = array();
		$this->form_validation->set_rules('email', 'Email Address', 'required|trim|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'required|trim|min_length[4]|max_length[32]');
		if($this->form_validation->run()){
			$loginUser['email'] = $this->input->post('email');
			$loginUser['password'] = $this->input->post('password');
			$userDetect = $this->User_Model->LoginUser($loginUser);
			if(count($userDetect) == 1){
				print_r($userDetect );
				//$user_info = array('user_id' => $userDetect[0]->id , 'email'=> $userDetect[0]->email , 'first_name' => $userDetect[0]->first_name );
				$this->session->set_userdata($user_info);
				$path = 'home';
				return redirect("dashboardUser/UserICO/$path");
				//$this->session->set_flashdata('successLog', '<div class="alert text-center alert-success">Login Succes</div>');
			}else{
				$this->session->set_flashdata('successLog', '<div class="alert text-center alert-danger">Incorrect / Username and Password</div>');
			}
			$this->load->view('HomePage/account-login');
		}
		else{
			$this->load->view('HomePage/account-login');
		}
		
	}
	public function Save_UserInfo(){
		
		$this->form_validation->set_rules('email_address', 'Email Address', 'required|trim|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'required|trim|min_length[4]|max_length[32]');
		$this->form_validation->set_rules('first_name', 'First Name', 'required|trim');
		$this->form_validation->set_rules('last_name', 'Last Name', 'required|trim');
		$this->form_validation->set_rules('country', 'Country', 'required|trim');
		$this->form_validation->set_rules('term_check', 'Terms & Conditions', 'required|trim');
		
		if($this->form_validation->run()){
			$userData['email'] = $this->input->post('email_address');
			$userData['first_name'] = $this->input->post('first_name');
			$userData['last_name'] = $this->input->post('last_name');
			$userData['country'] = $this->input->post('country');
			$userData['password'] = md5($this->input->post('password'));
			$ResIns = $this->User_Model->SaveUser($userData);
			if($ResIns==0){
				$this->session->set_flashdata('success', '<div class="alert text-center alert-success">User added</div>');
			}else{
				$this->session->set_flashdata('success', '<div class="alert text-center alert-danger">User already exists.</div>');
			}
			
			$this->load->view('HomePage/account-register');

		}else{
			$this->load->view('HomePage/account-register');
		}
		
		
	}
}
