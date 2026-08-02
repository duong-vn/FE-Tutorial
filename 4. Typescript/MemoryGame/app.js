"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MemoryGame {
    constructor() {
        this.cards = [];
        this.flippedCards = [];
        this.score = 0;
        this.bestScore = 0;
        this.isLocked = false; // Prevents clicking during animation
        this.totalPairs = 8;
        this.matchesFound = 0;
        // DOM Elements
        this.boardElement = document.getElementById('game-board');
        this.scoreElement = document.getElementById('current-score');
        this.bestScoreElement = document.getElementById('best-score');
        this.loadingElement = document.getElementById('loading');
        this.winMessageElement = document.getElementById('win-message');
        this.finalScoreElement = document.getElementById('final-score');
        this.restartBtn = document.getElementById('restart-btn');
        this.loadBestScore();
        this.init(); 
        this.restartBtn.addEventListener('click', () => this.init());
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.score = 0;
            this.matchesFound = 0;
            this.cards = [];
            this.flippedCards = [];
            this.isLocked = false;
            this.updateScoreDisplay();
            this.hideWinMessage();
            this.boardElement.innerHTML = '';
            this.showLoading();
            yield this.fetchPokemonCards();
            this.hideLoading();
            this.renderBoard();
        });
    }
    loadBestScore() {
        const saved = localStorage.getItem('memoryGameBestScore');
        if (saved) {
            this.bestScore = parseInt(saved, 10);
            this.bestScoreElement.textContent = this.bestScore.toString();
        }
    }
    saveBestScore() {
        // Lower score is better (fewer moves)
        if (this.bestScore === 0 || this.score < this.bestScore) {
            this.bestScore = this.score;
            localStorage.setItem('memoryGameBestScore', this.bestScore.toString());
            this.bestScoreElement.textContent = this.bestScore.toString();
        }
    }
    showLoading() {
        this.loadingElement.style.display = 'block';
        this.boardElement.classList.add('hidden');
    }
    hideLoading() {
        this.loadingElement.style.display = 'none';
        this.boardElement.classList.remove('hidden');
    }
    showWinMessage() {
        this.saveBestScore();
        this.finalScoreElement.textContent = this.score.toString();
        this.winMessageElement.classList.remove('hidden');
    }
    hideWinMessage() {
        this.winMessageElement.classList.add('hidden');
    }
    updateScoreDisplay() {
        this.scoreElement.textContent = this.score.toString();
    }
    getRandomPokemonIds(count) {
        const ids = new Set();
        while (ids.size < count) {
            // PokéAPI has up to 1000+ pokemon, keeping it to first 151 for classic ones
            const randomId = Math.floor(Math.random() * 151) + 1;
            ids.add(randomId);
        }
        return Array.from(ids);
    }
    fetchPokemonCards() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemonIds = this.getRandomPokemonIds(this.totalPairs);
                const cardData = [];
                let currentId = 0;
                for (const id of pokemonIds) {
                    // We just use the raw sprite url to save fetch time if we want, 
                    // but doing a fetch allows us to get reliable data if needed.
                    // Using raw image url directly:
                    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                    // Create two cards for each pokemon (a pair)
                    cardData.push({
                        id: currentId++,
                        pokemonId: id,
                        imageUrl: imageUrl,
                        isFlipped: false,
                        isMatched: false
                    });
                    cardData.push({
                        id: currentId++,
                        pokemonId: id,
                        imageUrl: imageUrl,
                        isFlipped: false,
                        isMatched: false
                    });
                }
                this.cards = this.shuffleCards(cardData);
            }
            catch (error) {
                console.error("Failed to generate cards:", error);
                this.loadingElement.textContent = "Failed to load Pokémon. Please refresh.";
            }
        });
    }
    shuffleCards(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }
    renderBoard() {
        this.boardElement.innerHTML = '';
        this.cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.index = index.toString();
            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner');
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.textContent = '?'; // The question mark
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');
            const img = document.createElement('img');
            img.src = card.imageUrl;
            img.alt = `Pokemon ${card.pokemonId}`;
            img.classList.add('card-image');
            cardFront.appendChild(img);
            cardInner.appendChild(cardBack);
            cardInner.appendChild(cardFront);
            cardElement.appendChild(cardInner);
            // Add click listener
            cardElement.addEventListener('click', () => this.handleCardClick(index));
            this.boardElement.appendChild(cardElement);
        });
    }
    handleCardClick(index) {
        if (this.isLocked)
            return;
        const card = this.cards[index];
        // Prevent clicking already flipped or matched cards
        if (card.isFlipped || card.isMatched)
            return;
        // Flip the card
        card.isFlipped = true;
        this.flippedCards.push(card);
        this.updateCardDOM(index);
        // Check for match if 2 cards are flipped
        if (this.flippedCards.length === 2) {
            this.score++; // 1 move = 2 cards flipped
            this.updateScoreDisplay();
            this.checkForMatch();
        }
    }
    checkForMatch() {
        const [card1, card2] = this.flippedCards;
        const isMatch = card1.pokemonId === card2.pokemonId;
        if (isMatch) {
            this.handleMatch();
        }
        else {
            this.handleMismatch();
        }
    }
    handleMatch() {
        this.flippedCards.forEach(card => {
            card.isMatched = true;
            this.updateCardDOM(this.cards.indexOf(card));
        });
        this.flippedCards = [];
        this.matchesFound++;
        if (this.matchesFound === this.totalPairs) {
            setTimeout(() => this.showWinMessage(), 500);
        }
    }
    handleMismatch() {
        this.isLocked = true;
        setTimeout(() => {
            this.flippedCards.forEach(card => {
                card.isFlipped = false;
                this.updateCardDOM(this.cards.indexOf(card));
            });
            this.flippedCards = [];
            this.isLocked = false;
        }, 1000);
    }
    updateCardDOM(index) {
        const cardElement = this.boardElement.children[index];
        const card = this.cards[index];
        if (card.isFlipped || card.isMatched) {
            cardElement.classList.add('flipped');
        }
        else {
            cardElement.classList.remove('flipped');
        }
        if (card.isMatched) {
            cardElement.classList.add('matched');
        }
    }
}
// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MemoryGame();
});
