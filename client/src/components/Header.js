import React from 'react'

function Header() {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top" >
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span> 
						</button>
						<a class="navbar-brand" href="#">MasterPoint</a>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav navbar-nav navbar-right">
							<li class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" href="#">
										<span class="glyphicon glyphicon-user">

										</span> UserName
										<span class="caret"></span>
									</a>
								<ul class="dropdown-menu">
									<li><a href="#">Edit Profile</a></li>
										<li><a href="#">Settings</a></li>
										<li><a href="#">Log Out</a></li> 
									</ul>
							</li>
							</ul>
					</div>
				</div>
			</nav>
    )
}

export default Header