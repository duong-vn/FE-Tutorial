// Types and Interfaces
interface Card {
    id: number;
    pokemonId: number;
    imageUrl: string;
    isFlipped: boolean;
    isMatched: boolean;
}

class MemoryGame {
    private cards: Card[] = [];
    private flippedCards: Card[] = [];
    private score: number = 0;
    private bestScore: number = 0;
    private isLocked: boolean = false; // Prevents clicking during animation
    private totalPairs: number = 8;
    private matchesFound: number = 0;

    // DOM Elements
    private boardElement = document.getElementById('game-board') as HTMLElement;
    private scoreElement = document.getElementById('current-score') as HTMLElement;
    private bestScoreElement = document.getElementById('best-score') as HTMLElement;
    private loadingElement = document.getElementById('loading') as HTMLElement;
    private winMessageElement = document.getElementById('win-message') as HTMLElement;
    private finalScoreElement = document.getElementById('final-score') as HTMLElement;
    private restartBtn = document.getElementById('restart-btn') as HTMLButtonElement;

    constructor() {
        this.loadBestScore();
        this.init();
        
        this.restartBtn.addEventListener('click', () => this.init());
    }

    private async init() {
        this.score = 0;
        this.matchesFound = 0;
        this.cards = [];
        this.flippedCards = [];
        this.isLocked = false;
        
        this.updateScoreDisplay();
        this.hideWinMessage();
        this.boardElement.innerHTML = '';
        
        this.showLoading();
        await this.fetchPokemonCards();
        this.hideLoading();
        
        this.renderBoard();
    }

    private loadBestScore() {
        const saved = localStorage.getItem('memoryGameBestScore');
        if (saved) {
            this.bestScore = parseInt(saved, 10);
            this.bestScoreElement.textContent = this.bestScore.toString();
        }
    }

    private saveBestScore() {
        // Lower score is better (fewer moves)
        if (this.bestScore === 0 || this.score < this.bestScore) {
            this.bestScore = this.score;
            localStorage.setItem('memoryGameBestScore', this.bestScore.toString());
            this.bestScoreElement.textContent = this.bestScore.toString();
        }
    }

    private showLoading() {
        this.loadingElement.style.display = 'block';
        this.boardElement.classList.add('hidden');
    }

    private hideLoading() {
        this.loadingElement.style.display = 'none';
        this.boardElement.classList.remove('hidden');
    }

    private showWinMessage() {
        this.saveBestScore();
        this.finalScoreElement.textContent = this.score.toString();
        this.winMessageElement.classList.remove('hidden');
    }

    private hideWinMessage() {
        this.winMessageElement.classList.add('hidden');
    }

    private updateScoreDisplay() {
        this.scoreElement.textContent = this.score.toString();
    }

    private getRandomPokemonIds(count: number): number[] {
        const ids: Set<number> = new Set();
        while (ids.size < count) {
            // PokéAPI has up to 1000+ pokemon, keeping it to first 151 for classic ones
            const randomId = Math.floor(Math.random() * 151) + 1;
            ids.add(randomId);
        }
        return Array.from(ids);
    }

    private async fetchPokemonCards() {
        try {
            const pokemonIds = this.getRandomPokemonIds(this.totalPairs);
            const cardData: Card[] = [];
            
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
        } catch (error) {
            console.error("Failed to generate cards:", error);
            this.loadingElement.textContent = "Failed to load Pokémon. Please refresh.";
        }
    }

    private shuffleCards(cards: Card[]): Card[] {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    private renderBoard() {
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

    private handleCardClick(index: number) {
        if (this.isLocked) return;
        
        const card = this.cards[index];
        
        // Prevent clicking already flipped or matched cards
        if (card.isFlipped || card.isMatched) return;

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

    private checkForMatch() {
        const [card1, card2] = this.flippedCards;
        const isMatch = card1.pokemonId === card2.pokemonId;

        if (isMatch) {
            this.handleMatch();
        } else {
            this.handleMismatch();
        }
    }

    private handleMatch() {
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

    private handleMismatch() {
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

    private updateCardDOM(index: number) {
        const cardElement = this.boardElement.children[index] as HTMLElement;
        const card = this.cards[index];
        
        if (card.isFlipped || card.isMatched) {
            cardElement.classList.add('flipped');
        } else {
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
