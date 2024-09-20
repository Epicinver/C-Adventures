let playerHealth = 100;
let bossHealth = 100;

function submitCode() {
    const playerInput = document.getElementById('player-input').value;
    const output = document.getElementById('output');

    const correctAnswer = `#include <stdio.h>\n\nint main() {\n    printf("Victory!\\n");\n    return 0;\n}`;

    if (playerInput.trim() === correctAnswer.trim()) {
        bossHealth -= 20;
        output.textContent = "Correct! You hit the boss!";
        document.getElementById('boss-health-bar').textContent = bossHealth;
    } else {
        playerHealth -= 20;
        output.textContent = "Wrong! The boss hit you!";
        document.getElementById('health').textContent = playerHealth;
    }

    checkGameOver();
}

function checkGameOver() {
    if (playerHealth <= 0) {
        alert("Game Over! The boss defeated you!");
        resetGame();
    } else if (bossHealth <= 0) {
        alert("Congratulations! You defeated the boss!");
        resetGame();
    }
}

function resetGame() {
    playerHealth = 100;
    bossHealth = 100;
    document.getElementById('health').textContent = playerHealth;
    document.getElementById('boss-health-bar').textContent = bossHealth;
    document.getElementById('output').textContent = "";
    document.getElementById('player-input').value = "";
}
