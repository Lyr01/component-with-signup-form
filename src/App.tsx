import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="left-section">
				<h1 className="title">Learn to code by watching others</h1>
				<p>
					See how experienced developers solve problems in real-time.Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</p>
			</div>
			<div className="right-section">
				<div className="free-trial">
					<b>Try it free 7 days</b> then $20/mo.thereafter
				</div>
				<form>
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
					<input type="email" placeholder="Email Adress" />
					<input type="passwoard" placeholder="Passwoard" />
					<button className="btn-claim-trial">Claim your free trial</button>
					<small className="term-services">
						By clicking the button, you are agreeing to our{" "}
						<b className="color-red">Terms and Services</b>
					</small>
				</form>
			</div>

			{/* <footer>
				<p className="attribution">
					Challenge by{" "}
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by <a href="#">Your Name Here</a>.
				</p>
			</footer> */}
		</div>
	);
}

export default App;
