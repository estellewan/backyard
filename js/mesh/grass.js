export default function grass(scene) {
    var geometry = new THREE.PlaneBufferGeometry( 100, 100 );

    // add background - to fix
    var backgroundMaterial = new THREE.MeshBasicMaterial( { color: new THREE.Color( 0x666c40 ) } );
    var backgroundMesh = new THREE.Mesh( geometry, backgroundMaterial );
    backgroundMesh.rotation.x = - Math.PI / 2;
    scene.add( backgroundMesh );

    var texture = new THREE.CanvasTexture( generateTexture() );

    for ( var i = 0; i < 10; i ++ ) {
        var material = new THREE.MeshBasicMaterial( {
            color: new THREE.Color().setHSL( 0.25, 0.75, ( i / 15 ) * 0.4 + 0.1 ),
            map: texture,
            // depthTest: false,
            depthWrite: false,
            transparent: true
        } );

        var mesh = new THREE.Mesh( geometry, material );

        mesh.position.y = i * 0.25;
        mesh.rotation.x = - Math.PI / 2;
        scene.add( mesh );
    }
}

function generateTexture() {
    var canvas = document.createElement( 'canvas' );
    canvas.width = 512;
    canvas.height = 512;

    var context = canvas.getContext( '2d' );

    for ( var i = 0; i < 40000; i ++ ) {

        context.fillStyle = 'hsl(0,0%,' + ( Math.random() * 50 + 50 ) + '%)';
        context.beginPath();
        context.arc( Math.random() * canvas.width, Math.random() * canvas.height, Math.random() + 0.15, 0, Math.PI * 2, true );
        context.fill();

    }

    context.globalAlpha = 0.095;
    context.globalCompositeOperation = 'lighter';

    return canvas;
}
