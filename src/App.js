import logo from "./logo.svg";
import "./App.css";
import {
	Button,
	ButtonGroup,
	Checkbox,
	FormControlLabel,
	TextField,
} from "@material-ui/core";
import { Save, Delete } from "@material-ui/icons";
import { useState } from "react";

function CheckboxExample() {
	const [checked, setChecked] = useState(true);
	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={checked}
					icon={<Delete />}
					checkedIcon={<Save />}
					onChange={(e) => {
						setChecked(e.target.checked);
					}}
					inputProps={{
						"aria-label": "secondary checkbox",
					}}
				/>
			}
			label='Testing Checkbox'
		/>
	);
}
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<TextField
					variant='filled'
					color='secondary'
					type='email'
					label='The Time'
          placeholder="testing@gmail.com"
				/>
				<CheckboxExample />
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
