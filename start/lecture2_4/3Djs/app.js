var scene, camera, renderer;

function init(){
console.log("init");

    // Create a scene
    scene = new THREE.Scene();
    
    // Create a camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;
    
    // Create a renderer
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create room
    createRoom();
    animate();
}

function createRoom(){
    var geometry = new THREE.BoxGeometry(1, 1, 1); // Cube geometry for walls, floor, and ceiling
    var material = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.BackSide}); // White material with backside rendering for interior view
    
    // Create mesh and add it to the scene
    var room = new THREE.Mesh(geometry, material);
    room.scale.set(4, 2, 4); // Scale room size (x, y, z)
    scene.add(room);
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

