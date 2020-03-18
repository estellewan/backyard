export default function walls(scene, remoteTextures) {
    var wallGeometry = new THREE.PlaneBufferGeometry( 100, 40 );

    var material = new THREE.MeshBasicMaterial( {
        map: remoteTextures['wood2']
    } );

    var rightWall = new THREE.Mesh( wallGeometry, material );
    rightWall.position.z = 50;
    rightWall.position.y = 20;
    rightWall.rotation.x = Math.PI;

    var leftWallGeometry = new THREE.PlaneBufferGeometry( 100, 40 );
    var material = new THREE.MeshBasicMaterial( {
        map: remoteTextures['wood2']
    } );
    var leftWall = new THREE.Mesh( leftWallGeometry, material );
    leftWall.position.z = -50;
    leftWall.position.y = 20;
    leftWall.position.x = 0;
    leftWall.rotation.y = Math.PI / 720;

    var backWallGeometry = new THREE.PlaneBufferGeometry( 100, 40 );
    var material = new THREE.MeshBasicMaterial( {
        map: remoteTextures['wood3']
    } );
    var backWall = new THREE.Mesh( backWallGeometry, material );
    backWall.position.z = 0;
    backWall.position.y = 20;
    backWall.position.x = -50;
    backWall.rotation.y = Math.PI / 2;

    scene.add(backWall);
    scene.add(rightWall);
    scene.add(leftWall);
}