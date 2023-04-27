import { fabric } from 'fabric';

import { NODE_COLORS } from '../../constant/constants';
import { Node } from '../../../../canvas/objects';

const TimelineNode = fabric.util.createClass(Node, {
	initialize(options) {
		options = options || {};
		options.fill = NODE_COLORS.TIMELINE.fill;
		options.stroke = NODE_COLORS.TIMELINE.border;
		this.callSuper('initialize', options);
	},
});

TimelineNode.fromObject = function(options, callback) {
	return callback(new TimelineNode(options));
};

window.fabric.TimelineNode = TimelineNode;

window.fabric.TemporalTimelineNode = TimelineNode;

//window.fabric.RelativeTimelineNode = TimelineNode;


export default TimelineNode;
