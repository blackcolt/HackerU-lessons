import "./App.css";
import Appointment from "./components/Appointment";
import appointmentsData from "./data/appointments.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Attendence from "./components/Attendence";
import Calender from "./components/Calender";

function App() {
  return (
    <div className="App">
      <Calender>
        <div>111111111</div>
      </Calender>
      {appointmentsData.map((appointment) => (
        <Appointment {...appointment}>
          {appointment.attendcies.map((attend) => (
            <Attendence {...attend} />
          ))}
        </Appointment>
      ))}
    </div>
  );
}

export default App;
