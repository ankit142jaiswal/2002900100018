import React, { useState, useEffect } from 'react';
import { getTrainSchedule } from './TrainScheduleAPI';

const TrainSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function fetchSchedule() {
      const data = await getTrainSchedule();
      setSchedule(data);
    }

    fetchSchedule();
  }, []);

  return (
    <div>
      <h2>Train Schedule</h2>
      <ul>
        {schedule.map((train) => (
          <li key={train.id}>
            {train.name} - {train.departureTime} - {train.arrivalTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainSchedule;
