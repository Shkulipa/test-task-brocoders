//uuid:
import { v4 as uuidv4 } from 'uuid';

const DataTask = ({ startTime, endTime, spendTime, descTask }) => {
	const id = uuidv4();

	return {
		id,
		descTask,
		startTime: {
			h: startTime.getHours(),
			m: startTime.getMinutes(),
			s: startTime.getSeconds(),
			day: startTime.getDate(),
			month: startTime.getMonth() + 1,
			year: startTime.getFullYear(),
		},
		endTime: {
			h: endTime.getHours(),
			m: endTime.getMinutes(),
			s: endTime.getSeconds(),
			day: endTime.getDate(),
			month: endTime.getMonth() + 1,
			year: endTime.getFullYear(),
		},
		spendTime: {
			h: spendTime.hours,
			m: spendTime.minutes,
			s: spendTime.seconds,
		},
	};
};

export default DataTask;
