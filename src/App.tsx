import { useState } from "react";
import "./App.css";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	const [showError, setShowError] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			!firstName ||
			!lastName ||
			!email ||
			!password ||
			!/\S+@\S+\.\S+/.test(email)
		)
			setShowError(true);
		else location.reload();

		/*see if email is valid*/
		if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailIsValid(true);
		} else {
			setEmailIsValid(false);
		}
	};

	return (
		<main className="App">
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
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						className={!firstName && showError ? "input-error" : ""}
						type="text"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<span
						className="error"
						style={{
							display: !firstName && showError ? "block" : "none",
						}}
					>
						First Name cannot be empty
					</span>

					<input
						className={!lastName && showError ? "input-error" : ""}
						type="text"
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<span
						className="error"
						style={{
							display: !lastName && showError ? "block" : "none",
						}}
					>
						Last Name cannot be empty
					</span>

					<input
						className={
							(!email || emailIsValid) && showError ? "input-error" : ""
						}
						type="text"
						placeholder="Email Adress"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span
						className="error"
						style={{
							display: (!email || emailIsValid) && showError ? "block" : "none",
						}}
					>
						Looks like this is not an email
					</span>

					<input
						className={!password && showError ? "input-error" : ""}
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setpassword(e.target.value)}
					/>
					<span
						className="error"
						style={{
							display: !password && showError ? "block" : "none",
						}}
					>
						password cannot be empty
					</span>

					<button type="submit" className="btn-claim-trial">
						Claim your free trial
					</button>
					<small className="term-services">
						By clicking the button, you are agreeing to our{" "}
						<b className="color-red">Terms and Services</b>
					</small>
				</form>
				<footer>
					<p className="attribution">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by <a href="https://lyr01.github.io/">Hamza Khan</a>.
					</p>
				</footer>
			</div>
		</main>
	);
}

export default App;
