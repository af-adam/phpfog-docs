<?php
	$url="";
	if($_SERVER["PATH_INFO"]=="/features/article/supported_frameworks")
	{
		$url="https://phpfog.com/jumpstarts";
	}
	else
	{
		$url="http://dev.appfog.com" . $_SERVER["PATH_INFO"];
	}
  	header ('HTTP/1.1 301 Moved Permanently');
  	header('Location:' . $url);
	
?>

