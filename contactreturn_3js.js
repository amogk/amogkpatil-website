import * as THREE from 'three';

import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

function main() {

	const canvas = document.querySelector( '#contact_c' );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );


	const fov = 75;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 2;
    camera.position.set(0, 1, 1.5);

	const scene = new THREE.Scene();

	const color = 0xffeeee;
	const intensity = 3;
	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(-1, 2, 4);
	scene.add(light);	

	const light2 = new THREE.DirectionalLight(color, intensity/2);
	light2.position.set(1, -2, 4);
	scene.add(light2);

	const gltfLoader = new GLTFLoader();
	const model = 'Models/mailbox.glb';
	let mail;
	gltfLoader.load(model, (gltf) => {
	  const root = gltf.scene;
	  root.position.set(0, 0.4, 0);
      root.scale.set(0.1, 0.1, 0.1);
      root.rotation.set(0, 0, 0);
	  mail = gltf;
	  scene.add(root);
	});

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

	function render( time ) {

		time *= 0.001; // convert time to seconds

		if (mail) {
			mail.scene.rotation.y = time;
		}

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		renderer.render( scene, camera );

		requestAnimationFrame( render );

	}

	requestAnimationFrame( render );

}

main();