<?php
class User_model extends CI_Model {

    public function SaveUser($data)
    {
           $email_Check = $data['email'];
           $check_result = $this->db->select('*')->where('email' , $email_Check)->from('tbl_users')->get()->row();
           if($this->db->affected_rows() > 0){
                return 1;
           }else{
                $this->db->insert('tbl_users', $data);
                return 0;
           }

    }

    public function LoginUser($LogCred){
           $password = md5($LogCred['password']);
           $LoginCredientials = $this->db->select('id,email,password,first_name')->from('tbl_users')->where('email' , $LogCred['email'])->where('password', $password )->get()->row();
           print_r($LoginCredientials);
           echo $this->db->affected_rows();
           
           if($this->db->affected_rows() != 0 ){
               return $LoginCredientials;
              
           }else{
               return 0;
           }
          
    }

}