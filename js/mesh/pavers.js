export default function pavers(scene, remoteTextures) {

    var length = 4, width = 4;

    var shape = new THREE.Shape();
    shape.moveTo( 0,0 );
    shape.lineTo( 0, width );
    shape.lineTo( length, width );
    shape.lineTo( length, 0 );
    // shape.lineTo( 0, 0 );

    var extrudeSettings = {
        steps: 1,
        depth: 1,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 0.5,
        bevelOffset: 2,
        bevelSegments: 3
    };

    var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    var material = new THREE.MeshStandardMaterial({
        roughnessMap: remoteTextures['paver1'],
        roughness: 1,
        metalness: 0,
        color: 0xbfbfbf
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