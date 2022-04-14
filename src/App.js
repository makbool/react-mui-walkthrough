import './App.css';
import { Button, Container, Typography } from '@mui/material';
import { Person } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography
          variant="h6"
          color="primary"
          component="div"
        >
          h6 styled div tag
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Person />}
        >
          <Typography
            variant="button"
          >
            Hello
          </Typography>
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          <Typography
            variant="button"
          >
            Submit
          </Typography>
        </Button>
      </Container>
    </div>
  );
}

export default App;
