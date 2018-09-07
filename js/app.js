html, body, h1, h2, h3, h4, h5, h6 { padding: 0; margin: 0; }
body { 
    background-attachment:fixed;
    background-position:center;
    background-size:cover;
/*    background-image: url(../images/background.jpg);*/
    background-image: url(../images/gratisography-355H.jpg);
}
ul { list-style: none; }
nav, section, footer { padding:30px 0; }
a { text-decoration: none; }
ul { padding-left: 0; }
button { cursor: pointer; }

.btn {
    color: #820024; 
	background-color: #fff;
	width: 120px;
	height: 40px;
	font-size: 1.5rem;
	outline: none;
	border: none;
	border-radius: 10px;
	margin: 0 10px;
	-webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}
.btn:hover, .active { 
	color: #fff; 
	background-color: #444444; 
	box-shadow: 0 4px 8px 0 rgba(229, 242, 222, 0.4), 0 6px 20px 0 rgba(229, 242, 222, 0.39); 
}

.htmlOn {
	overflow: hidden;
	overflow-Y: scroll;
	height: 100%;
}
.bodyOn {
	overflow: hidden;
	height: 100%;
}
.displayNone {
	display: block!important;
}

footer {
	clear: both;
	background-color: #f1f1f1;
	color: black;
    opacity: 0.8;
}
footer a:hover {
    color: burlywood; 
}
.text-center { text-align: center; }

nav h1 {
	color: black;
	font-size: 5rem;
	font-weight: 100;
	line-height: 4rem;
	margin-bottom: 40px;
}
nav .container {
	width: calc(100% - 30px);
	height: 50px;
	padding: 24px 15px;
	margin: 0 auto;
/*	background-color: #f1f1f1;*/
	color: rgba(255, 255, 255, 0.3);
	position: relative;
}
#name{
    color: black;
}
nav .container .navbar-site {
	display: none;
}
nav .container .navbar-toggler {
	display: none;
}
nav .container .navbar-toggler-icon {
/*	display: inline-block;*/
	height: 1.5em;
	width: 1.5em;
	vertical-align: middle;
	content: "";
	background: no-repeat center center;
	background-size: 100% 100%;
	background-image: url(../images/icon/ic_view_headline_white_48px.svg);
}
nav .container div {
	text-align: center;
	display: block;
}
nav .container ul {
	margin: 0;
	height: 2rem;
	display: inline-block;
	padding-top: 5px;
	padding-left: 0;
}
nav .container ul li {
	display: inline-block;
	float: left;
	padding: 0 20px;
}
nav .container ul li a {
	font-size: 2rem;
	font-weight: 800;
	color: #fff;
}
nav .container ul li a:hover {
	color: #fff;
}

section.contents {
	text-align: center;
	padding: 20px 0;
	clear: both;
/*    background-color: #ffd700;*/
}

#portfolioGroup {
	width: 80%;
	margin-left: 10%;
}

.isotope-item {
	display: inline-block;
	float: left;
	width: calc(100% / 3 - 20px);
/* 	height: 40px; */
	padding: 15px 0 10px 0;
	margin: 10px 10px;
	font-size: 1.5rem;
	border-radius: 5px;
	cursor: pointer;
}

.isotope-item img {
	width: calc(100% - 20px);
	min-height: 260px;
	padding: 10px 10px 0 10px; 
/*    border: 1px solid #f1f1f1; */
/*    border-radius: 5px;*/
}

a {
	color: black;
}

a:hover {
	color: blue;
}

.bgOn {
	background-color: black;	
    color: white;
}

.bgOff {
	background-color: black;	
    color: white;
}

.bg_white {
	background-color: white;
}

section.contents2 {
	text-align: center;
	padding: 20px 20%;
}

#inBox {
	width: calc(100% - 20px);
	padding: 10px;
	border-radius: 10px;
}
#inBox:after{
	content:'';
	display:block;
	clear:both;
}
#inBox h1 {
	font-size: 3rem;
}
#inBox h2 {
	font-size: 2rem;
}
#inBox .subBox {
	float: left;
}
#inBox .width-100 {
	width: calc(100% - 20px);
	padding: 0 10px;
}
#inBox .width-60 {
	width: calc(60% - 20px);
	padding: 0 10px;
}
#inBox .width-40 {
	width: 40%;
}
#inBox .width-100 img {
	width: 100%;
}
#inBox .width-100 video {
	width: 100%;
}
#inBox .width-100 p {
	text-align: left;
}
#inBox .width-60 img {
	width: 100%;
}
#inBox .height-80 {
/* 	height: 470px;	 */
}
#inBox .height-20 {
/* 	height: 30px; */
}

#inBox .height-80 p {
	padding: 0 20px;
	width: calc(100% - 40px);
	text-align: left;
	font-size: 1.2rem;
}
#inBox .height-20 a {
	display: inline-block;
/* 	width: 70px; */
/* 	height: 30px; */
	margin: 0 10px;
	background-color: rgba(146,112,91,.65);
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1rem;
}
#inBox .height-20 a:hover {
	color: yellow;
	background-color: rgba(146,112,91,1);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
}
