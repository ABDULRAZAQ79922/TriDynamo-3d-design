const myScene = new THREE.Scene();
const myCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const myRenderer = new THREE.WebGLRenderer();
myRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(myRenderer.domElement);

const myGeometry = new THREE.BoxGeometry();
const myMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const myCube = new THREE.Mesh(myGeometry, myMaterial);
myScene.add(myCube);

myCamera.position.z = 5;

const myLight = new THREE.AmbientLight(0x404040); 
myScene.add(myLight);

function animate() {
    requestAnimationFrame(animate);
    myCube.rotation.x += 0.01;
    myCube.rotation.y += 0.01;
    myRenderer.render(myScene, myCamera);
}
animate();

document.getElementById('myQuitButton').addEventListener('click', () => {
    window.close(); 
    alert('Quit button clicked!');
});

window.addEventListener('resize', () => {
    myCamera.aspect = window.innerWidth / window.innerHeight;
    myCamera.updateProjectionMatrix();
    myRenderer.setSize(window.innerWidth, window.innerHeight);
});
