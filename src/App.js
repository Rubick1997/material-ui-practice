import logo from "./logo.svg";
import "./App.css";
import {
	Button,
	ButtonGroup,
	Checkbox,
	FormControlLabel,
	TextField,
	makeStyles,
	ThemeProvider,
	createMuiTheme,
	Typography,
	Container,
	Paper,
	Grid,
	AppBar,
	Toolbar,
	Icon,
} from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";
import { Save, Delete, Menu } from "@material-ui/icons";
import { useState } from "react";
import "@fontsource/roboto";

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #333,#999)",
		border: 0,
		marginBottom: 15,
		borderRadius: 15,
		color: "white",
		padding: "5px 30px",
	},
});

const theme = createMuiTheme({
	typography: {
		h2: {
			fontSize: 30,
			marginBottom: 15,
		},
	},
});

function ButtonStyled() {
	const classes = useStyles();
	return <Button className={classes.root}> Styled Button </Button>;
}

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
		<ThemeProvider theme={theme}>
			<Container maxWidth='s'>
				<div className='App'>
					<header className='App-header'>
						<AppBar color="secondary" >
							<Toolbar>
								<Icon>
									<Menu />
								</Icon>
								<Typography variant='h6'>
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
							</Toolbar>
						</AppBar>
						<Typography variant='h2' component='div'>
							Welcome to Material UI
						</Typography>
						<Typography variant=' subtitle1'>Welcome to Material UI</Typography>
						<ButtonStyled />
						<Grid container spacing={2} justify='center'>
							<Grid item xs={3} sm={6}>
								<Paper style={{ height: 75, width: "100%" }} />
							</Grid>
							<Grid item xs={3} sm={6}>
								<Paper style={{ height: 75, width: "100%" }} />
							</Grid>
							<Grid item xs={3} sm={6}>
								<Paper style={{ height: 75, width: "100%" }} />
							</Grid>
						</Grid>
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
			</Container>
		</ThemeProvider>
	);
}

export default App;
