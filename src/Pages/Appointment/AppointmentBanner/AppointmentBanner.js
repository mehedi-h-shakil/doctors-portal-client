import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero pt-12  px-7 lg:py-72 lg:px-40"
        style={{ background: `url(${bg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-16 lg:gap-32">
          <img
            src={chair}
            className="w-full lg:w-1/2 rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="shadow-xl rounded-2xl">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
