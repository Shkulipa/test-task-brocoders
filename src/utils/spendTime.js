const SpendTime = startTime => {
	const dateStartTask = new Date(startTime);
	const newTime = new Date(Date.now() - dateStartTask);
	const hours = parseInt((newTime / (1000 * 60 * 60)) % 24),
		minutes = parseInt((newTime / (1000 * 60)) % 60),
		seconds = parseInt((newTime / 1000) % 60);

	return ({hours, minutes, seconds, spendTimeMs: newTime});
};

export default SpendTime;
