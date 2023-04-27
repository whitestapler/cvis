import action from './action';
import data from './data';
import logic from './logic';
import trigger from './trigger';
import timelines from './timelines';

export default {
	...action,
	...data,
	...logic,
	...trigger,
	...timelines
};
