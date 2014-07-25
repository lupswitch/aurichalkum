<?php
error_reporting(E_ALL);
$__BASEPATH = dirname(__FILE__);
require($__BASEPATH . '/lib/resolver.php');

//////////////////////////////////////////////////////////////////////////////

$config = array();
require(resolve('/config/database.php'));

//////////////////////////////////////////////////////////////////////////////

require(resolve('/lib/database.php'));
$ioDatabase = new database($config['database']);

//////////////////////////////////////////////////////////////////////////////

require(resolve('/lib/smarty.php'));
require(resolve('/lib/input.php'));
require(resolve('/lib/output.php'));

$ioInput = new input();
$ioOutput = new output($ioInput);
