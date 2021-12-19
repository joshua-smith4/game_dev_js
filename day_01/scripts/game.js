GameRoot.main = (function (graphics) {
    let myRectange = {
        position: { x: 0, y: 0 },
        fill: "blue",
        stroke: "black",
        width: 200,
        height: 100,
    };

    function processInput() {}

    function updateGameState() {
        myRectange.position.x += 1;
    }

    function render() {
        graphics.clear();
        const { position, fill, stroke, width, height } = myRectange;
        graphics.drawRectangle(position, width, height, stroke, fill);
    }

    function gameLoop() {
        processInput();
        updateGameState();
        render();
        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
})(GameRoot.graphics);
