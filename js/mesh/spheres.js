export default function spheres(scene) {
    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material1 = new THREE.MeshStandardMaterial( {
        color: 0x0e367c,
        metalness: 0.5,
        roughness: 0.1,
        envMap: null
    } );
    var sphere1 = new THREE.Mesh( geometry, material1 );
    sphere1.position.set(20, 20 , 30);

    var material2 = new THREE.MeshStandardMaterial( {
        color: 0xf44242,
        metalness: 0.5,
        roughness: 0.8,
        envMap: null
    } );
    var sphere2 = new THREE.Mesh( geometry, material2 );
    sphere2.position.set(40, 20 , 10);

    scene.add( sphere1 );
    scene.add( sphere2 );
}