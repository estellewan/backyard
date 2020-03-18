export default function pavers(scene, remoteTextures) {
    var geometry = new THREE.BoxBufferGeometry( 5, 5, 1.5 );
    var material = new THREE.MeshBasicMaterial({
        map: remoteTextures['paver1']
    });

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 10; j++) {
            var mesh = new THREE.Mesh( geometry, material );

            mesh.rotation.x = - Math.PI / 2;
            mesh.position.z = -25 + (5.5 * j);
            mesh.position.x = 5 + (5.5 * i);
            mesh.position.y = 10;
            scene.add( mesh );
        }
    }
}