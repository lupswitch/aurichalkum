<?php
class output{
    private $done = false;
    private $smarty = false;

    public function __construct($input){
        // detect user agent type
        $uaType = $input->detectUserAgent();

        $this->smarty = new Smarty();
        $this->smarty->template_dir = resolve('/template/' . $uaType);
        $this->smarty->compile_dir = resolve('/tmp/compile');
    }
    
    /* output the final page */
    public function done($pagename){
        if($this->done) return;
        $this->done = true;

        $this->smarty->display($pagename . '.tpl');
        exit;
    }
};
