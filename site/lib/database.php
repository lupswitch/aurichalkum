<?php
class database{

    private $db = null;
    
    public function __construct($dbconf){
        $this->db = new MySQLi(
            $dbconf['host'],
            $dbconf['username'],
            $dbconf['password']
        );
        $this->db->select_db($dbconf['database']);
    }

    public function __destruct(){
        $this->db->close();
    }

    public function query($sql){
    }

    public function execute($sql){
    }

}
