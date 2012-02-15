<?php
	$url="";
	if($_SERVER["PATH_INFO"]=="/features/article/supported_frameworks")
	{
		$url="https://phpfog.com/jumpstarts";
	}
	if($_SERVER["PATH_INFO"]=="/features/article/getting_started_popular_application")
	{
		$url="http://dev.appfog.com/features/article/getting_started_custom_application";
	}
	else
	{
		$url="http://dev.appfog.com" . $_SERVER["PATH_INFO"];
	}
  	header ('HTTP/1.1 301 Moved Permanently');
  	header('Location:' . $url);
	
?>

