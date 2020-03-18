export default function pebbles(scene, remoteTextures) {
    var geometry = new THREE.BoxBufferGeometry(15, 12, 1);
    var material = new THREE.MeshBasicMaterial({
        map: remoteTextures['gravel1']
    });
    var mesh = new THREE.Mesh( geometry, material );

    mesh.rotation.x = - Math.PI / 2;
    mesh.position.z = -43;
    mesh.position.x = 43;
    mesh.position.y = 2.3;
    scene.add( mesh );
}