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
        $this->db->commit();
        $this->db->close();
    }

    public function query($sql){
        $result = $this->db->query($sql);
        $error = $this->db->error;
        if($error) return null;
        return $result->fetch_array(MYSQLI_ASSOC);
    }

    public function execute($sql){
        $this->db->query($sql);
        return $this->db->error;
    }

}
