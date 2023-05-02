import { fabric } from 'fabric';

import { NODE_COLORS } from '../../constant/constants';
import { Node } from '../../../../canvas/objects';

const PointSpanNode = fabric.util.createClass(Node, {
	initialize(options) {
		options = options || {};
		options.fill = NODE_COLORS.POINTSPAN.fill;
		options.stroke = NODE_COLORS.POINTSPAN.border;
		this.callSuper('initialize', options);
	},
});

PointSpanNode.fromObject = function(options, callback) {
	return callback(new PointSpanNode(options));
};

window.fabric.PointSpanNode = PointSpanNode;

window.fabric.CounterSetNode = PointSpanNode;

window.fabric.CounterGetNode = PointSpanNode;

export default PointSpanNode;
