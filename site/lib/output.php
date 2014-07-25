<?php
class output{
    private $smarty = false;

    private $cookies = array();

    public function __construct($input){
        // detect user agent type
        $uaType = $input->detectUserAgent();

        $this->smarty = new Smarty();
        $this->smarty->template_dir = resolve('/template/' . $uaType);
        $this->smarty->compile_dir = resolve('/tmp/compile');
    }

    public function cookie($name, $value, $config){
        $cookies[$name] = array($value, $config);
        return $this;
    }
    
    /* output the final page */
    public function done($pagename){
        // send cookies
        foreach($cookies as $name=>$cookie) setcookie($name, $cookie[0]);

        // output html
        $this->smarty->display($pagename . '.tpl');

        exit;
    }
};
