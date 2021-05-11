import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { Save, Delete } from "@material-ui/icons";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<ButtonGroup variant='contained'>
					<Button
						startIcon={<Save />}
						href='#'
						color='primary'
						style={{
							fontSize: 20,
						}}>
						Save
					</Button>
					<Button
						startIcon={<Delete />}
						href='#'
						color='secondary'
						style={{
							fontSize: 20,
						}}>
						Discard
					</Button>
				</ButtonGroup>

				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default App;
