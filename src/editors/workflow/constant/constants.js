import i18n from 'i18next';

const NODE_COLORS = {
	TRIGGER: {
		fill: "rgb(200,200,200)",
		border: "rgb(100,100,100)",
	},
	LOGIC: {
		fill: "rgb(200,200,200)",
		border: "rgb(100,100,100)",
	},
	POINTSPAN: {
		fill: "rgb(200,200,200)",
		border: "rgb(100,100,100)",
	},
	ACTION: {
		fill: "rgb(200,200,200)",
		border: "rgb(100,100,100)",
	},
	TIMELINE:{
		fill: "rgb(200,200,200)",
		border: "rgb(100,100,100)",
	},
};

const OUT_PORT_TYPE = {
	SINGLE: 'SINGLE',
	STATIC: 'STATIC',
	DYNAMIC: 'DYNAMIC',
	BROADCAST: 'BROADCAST',
};

const DESCRIPTIONS = {
	script: i18n.t('common.name'),
	template: i18n.t('common.name'),
	json: i18n.t('common.name'),
	cron: i18n.t('common.name'),
};

export { NODE_COLORS, OUT_PORT_TYPE, DESCRIPTIONS };
