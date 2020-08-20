// Email.js version 5

var tld_ = new Array()
tld_[0] = "com";
tld_[1] = "org";
tld_[2] = "net";
tld_[3] = "ws";
tld_[4] = "info";
tld_[10] = "co.uk";
tld_[11] = "org.uk";
tld_[12] = "gov.uk";
tld_[13] = "ac.uk";
var topDom_ = 13;
var m_ = "mailto:";
var a_ = "@";
var d_ = ".";

function swapper(d)
{
	var s = "";
	for (var i=0; i<d.length; i+=2)
		if (i+1==d.length)
			s+= d.charAt(i)
		else
			s+= d.charAt(i+1)+d.charAt(i);
	return s.replace(/\?/g,'.');
}

function e(firstname, name, dom)
{
	var s = firstname+"."+name+a_;
	s+= swapper(dom);
	return s;
}

function e2(name, dom)
{
	var s = name+a_;
	s+= swapper(dom);
	return s;
}

function mail(firstname, name, dom)
{
	var s;
	if (firstname=="")
		s = e2(name,dom);
 	else
		s = e(firstname, name,dom);
  	document.write('<a href="'+m_+s+'"><i class="fa fa-envelope"></i></a>');
}
