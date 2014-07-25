<?php

class output{
    private $done = false;
    private $smarty = false;

    public function __construct($input){
        // detect user agent type
        $uaType = $input->detectUserAgent();

    }
    
    /* output the final page */
    public function done(){
        if($this->done) return;
        $this->done = true;

//        $template = $this->twig()
    }
};
