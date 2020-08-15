import * as THREE from 'three';
import flatten from 'lodash-es/flatten';
import { SVGLoader as loader } from './SVGLoader';
import tree from './assets/tree.svg';
import tree1 from './assets/tree2.svg';
import tree2 from './assets/tree1.svg';
import tree3 from './assets/tree5.svg';
import tree4 from './assets/tree6.svg';
import './styles.css';

const doubleSide = THREE.DoubleSide;
const deg = THREE.Math.degToRad;
const colors = ['#fff', '#21242d', '#E0F5F7', '#0d4663', '#ffbcb7', '#2d4a3e', '#8bd8d2'];

const svgs = [tree, tree1, tree2, tree3, tree4].map(
	(url) =>
		new Promise((resolve) =>
			new loader().load(url, (shapes) =>
				resolve(
					flatten(
						shapes.map((group, index) =>
							group.toShapes(true).map((shape) => ({ shape, color: group.color, index }))
						)
					)
				)
			)
		)
);

export { svgs, colors, deg, doubleSide };