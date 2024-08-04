import * as THREE from '/three';

import {GLTFLoader} from '/three/examples/jsm/loaders/GLTFLoader.js';

function main() {

	const canvas = document.querySelector( '#c' );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );


	const fov = 75;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 2;

	const scene = new THREE.Scene();

	const geometry = new THREE.CircleGeometry(2.15, 200);

	const rect = new THREE.PlaneGeometry(5, 0.1);

	const material = new THREE.MeshStandardMaterial( { color: 0x9a65b5 } );

	const blackmaterial = new THREE.MeshBasicMaterial({color: 0x000000});

	const circle = new THREE.Mesh( geometry, material );
	scene.add( circle );

	for (let i = 0; i < 5; i++) {
		const rectangle = new THREE.Mesh(rect, blackmaterial);
		rectangle.position.set(0, (i* 0.7) - 1.4, -1.9);
		scene.add(rectangle);
	}

	circle.position.z -= 2;
	circle.position.x -= .025;
	circle.receiveShadow = true;

	const color = 0xffeeee;
	const intensity = 5;
	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(-1, 2, 4);
	scene.add(light);	

	const light2 = new THREE.DirectionalLight(color, intensity);
	light2.position.set(5, 2, 4);
	scene.add(light2);

	const gltfLoader = new GLTFLoader();
	const model = 'Models/amogk_scan.glb';
	let amogk;
	gltfLoader.load(model, (gltf) => {
	  const root = gltf.scene;
	  root.position.set(0, -.95, 0);
	  amogk = gltf;
	  scene.add(root);
	});

	const batmodel = 'Models/bat.glb';
	const batscale = .25;
	let bat;
	gltfLoader.load(batmodel, (gltf) => {
	  const root = gltf.scene;
	  root.position.set(-.7, .7, 0);
	  root.scale.set(batscale, batscale, batscale);
	  root.rotation.set(0, 135, 5.5);
	  bat = gltf;
	  scene.add(root);
	});

	const racquetmodel = 'Models/racquet.glb';
	let racquet;
	gltfLoader.load(racquetmodel, (gltf) => {
	  const root = gltf.scene;
	  root.position.set(.85, -.85, 0);
	  root.scale.set(.03, .03, .03);
	  root.rotation.set(.5, 0, 5.5);
	  racquet = gltf;
	  scene.add(root);
	});

	const shootermodel = 'Models/website_shooter.glb';
	let shooter;
	gltfLoader.load(shootermodel, (gltf) => {
	  const root = gltf.scene;
	  root.position.set(.75, .65	 , 0);
	  root.scale.set(.025, .025, .025);
	  root.rotation.set(1, -1, 0);
	  shooter = gltf;
	  scene.add(root);
	});

	const codemodel = 'Models/code.glb';
	let code;
	gltfLoader.load(codemodel, (gltf) => {
	  const root = gltf.scene;
	  root.position.set(-.7, -.7, 0);
	  root.scale.set(.2, .2, .2);
	  root.rotation.set(1.2, .3, 0);
	  code = gltf;
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

		if (amogk) {
			amogk.scene.rotation.y = time;
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