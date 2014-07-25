<?php
function resolve($next){
    global $__BASEPATH;
    if('/' == substr($next, 0, 1)) return $__BASEPATH . $next;
    return $__BASEPATH . '/' . $next;
};
