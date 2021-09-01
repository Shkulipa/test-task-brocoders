import { useState } from 'react';

const useTimer = () => {
	const [time, setTime] = useState({h: 0, m: 0, s: 0});
	const [interv, setInterv] = useState(0);
	const [isRun, setIsRun] = useState(false);

	let updatedH = time.h,
		updatedM = time.m,
		updatedS = time.s;

	const setTimer = (initialTimer) => {
		const parseInitialTimer = new Date(initialTimer);
		const newTime =  new Date(Date.now() - parseInitialTimer);
		updatedH = parseInt((newTime / (1000 * 60 * 60)) % 24);
		updatedM = parseInt((newTime / (1000 * 60)) % 60);
		updatedS = parseInt((newTime / 1000) % 60);
	}

	const run = () => {
		if (updatedM === 59) {
			updatedH++;
			updatedM = -1;
		}
		if (updatedS === 59) {
			updatedM++;
			updatedS = -1;
		}
		setTime({h: updatedH, m: updatedM, s: updatedS});
		updatedS++;
	};

	const start = () => {
		run();
		setIsRun(state => !state);
		setInterv(setInterval(run, 1000));
	}

	const stop = () => {
		clearInterval(interv);
		setIsRun(state => !state);
		setTime({h: 0, m: 0, s: 0});
	}

	return ({start, stop, time, isRun, setTimer});
};

export default useTimer;
