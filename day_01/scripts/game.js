GameRoot.main = (function() {
    let gameState = {};

    function processInput() {
    }

    function updateGameState() {
    }

    function render() {
        console.log('rendering...');
    }

    function gameLoop() {
        processInput();
        updateGameState();
        render();
        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
})();
