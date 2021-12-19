GameRoot.graphics = (function () {

	let canvas = document.getElementById('canvas-main');
	let context = canvas.getContext('2d');

    function drawRectangle(position, width, height, stroke, fill) {
        context.save();
        // draw rectangle

		context.translate(position.x + width / 2, position.y + height / 2);
		context.translate(-(position.x + width / 2), -(position.y + height / 2));

		context.fillStyle = fill;
		context.strokeStyle = stroke;
		context.fillRect(position.x, position.y, width, height);
		context.strokeRect(position.x, position.y, width, height);

        context.restore();
    }

	function clear() {
		context.save();
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.restore();
	};

    return {
        drawRectangle,
        clear,
    };
})();

