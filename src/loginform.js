import React, { Component } from "react"
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import DashBoard from './dashboard.js'


class LoginForm extends Component {

	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			loggedIn: false,
			staus: ""
		}
		this.changehandler = this.changehandler.bind(this)
		this.submithandler = this.submithandler.bind(this)

	}

	async submithandler(event) {
		event.preventDefault();
		await fetch('http://localhost:4000/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
			body: JSON.stringify({
				"email": this.state.email,
				"password": this.state.password,
			})


		}).then(res => res.json())
			.then((res) => {
				localStorage.setItem('tok', res.token);
				localStorage.setItem("type", res.status1);
			})

		if (localStorage.getItem('tok') !== 'undefined' &&
			localStorage.getItem('tok') &&
			localStorage.getItem("type") == "customer") {
			
				this.props.history.push('/dashboard')
		}
		else if (localStorage.getItem('tok') !== 'undefined' &&
		localStorage.getItem('tok') &&
		localStorage.getItem("type") == "admin") {
		
			this.props.history.push('/adminpanel')
	}

		else {
			this.setState({ staus: "Failed" })
		}
	}

	changehandler = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}



	render() {
		return (
			<div>
				<title>Login V20</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" type="image/png" href="logtemplate/images/icons/favicon.ico" />

				<link rel="stylesheet" type="text/css" href="logtemplate/vendor/bootstrap/css/bootstrap.min.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/vendor/animate/animate.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/vendor/css-hamburgers/hamburgers.min.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/vendor/animsition/css/animsition.min.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/vendor/select2/select2.min.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/vendor/daterangepicker/daterangepicker.css" />

				<link rel="stylesheet" type="text/css" href="logtemplate/css/util.css" />
				<link rel="stylesheet" type="text/css" href="logtemplate/css/main.css" />


				<body>
					{this.state.staus}
					{localStorage.getItem('tok')}
					<br></br>
					<div className="limiter">
						<div className="container-login100">
							<div className="wrap-login100 p-b-160 p-t-50">
								<form className="login100-form validate-form">
									<span className="login100-form-title p-b-43">
										Account Login
					</span>

									<div className="wrap-input100 rs1 validate-input" data-validate="Username is required">
										<input className="input100" type="text" name="email" value={this.state.email} onChange={this.changehandler("email")} />
										<span className="label-input100">Email Address</span>
									</div>


									<div className="wrap-input100 rs2 validate-input" data-validate="Password is required">
										<input className="input100" type="password" name="pass" value={this.state.password} onChange={this.changehandler("password")} />
										<span className="label-input100">Password</span>
									</div>

									<div className="container-login100-form-btn">
										<button className="login100-form-btn" onClick={this.submithandler} >
											Sign in
						</button>
									</div>

									<div className="container-login100-form-btn">

									</div>

								</form>

							</div>
						</div>
					</div>






					<script src="logtemplate/vendor/jquery/jquery-3.2.1.min.js"></script>

					<script src="logtemplate/vendor/animsition/js/animsition.min.js"></script>

					<script src="logtemplate/vendor/bootstrap/js/popper.js"></script>
					<script src="logtemplate/vendor/bootstrap/js/bootstrap.min.js"></script>

					<script src="logtemplate/vendor/select2/select2.min.js"></script>

					<script src="logtemplate/vendor/daterangepicker/moment.min.js"></script>
					<script src="logtemplate/vendor/daterangepicker/daterangepicker.js"></script>

					<script src="logtemplate/vendor/countdowntime/countdowntime.js"></script>

					<script src="logtemplate/js/main.js"></script>

				</body>
			</div>
		)
	}
}



export default withRouter(LoginForm)