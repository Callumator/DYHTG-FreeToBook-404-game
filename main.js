/**
 * Different states for the game, this decides what the game will run every tick,
 * this is JavaScripts sorry excuse for an Enum.
 *
 * Also for consistency, when adding new states to the "Enum" please keep them
 * in order of how they occur.
 */
const GAME_STATES = Object.freeze({
  PRE_START: Symbol("pre-start"),
  X_AXIS: Symbol("x-axis"),
  Y_AXIS: Symbol("y-axis"),
  POST_GUESS: Symbol("post-guess")
});

/**
 * List of games states in order, used to increment and change state.
 *
 * @see FreeToBook.#switchState
 */
const STATES = [
  GAME_STATES.PRE_START,
  GAME_STATES.X_AXIS,
  GAME_STATES.Y_AXIS,
  GAME_STATES.POST_GUESS
];

/**
 * List of game states the game should tick for.
 *
 * @see FreeToBook.render
 */
const TICKING_STATES = [
  GAME_STATES.X_AXIS,
  GAME_STATES.Y_AXIS,
];

/** IDs used in the component, saves me fuging up spelling, once again sorry excuse for an enum. */
const IDS = Object.freeze({
  BODY: 'free-to-book-body',
  PLANE: 'free-to-book-plane',
  SUBTEXT: 'free-to-book-subtext'
});

/** ASCII character code for space */
const SPACE = 32;

/** Tick rate for the game, decides at what speed we the entire game runs */
const TICK_RATE = 100;

/** % of the map for the plane to move every tick, SHOULD BE LESS THAN 1 */
const PLANE_SPEED = 0.05;

class FreeToBook extends HTMLElement {
  #state = GAME_STATES.PRE_START;

  #stateCounter = 0;

  /** Reference to the tick method */
  #ticker;

  /** Element for the body of the component */
  #body;

  /** Instance for the plane */
  #plane;

  /** Text to show below the map */
  #subtext;

  /** Flag to stop the game from ticking */
  #busy = false;

  constructor() {
    super();
  }

  /** Called each time the element is removed from the document. */
  disconnectedCallback() {
    clearInterval(this.#ticker)
  }

  /**
   * Called each time the element is added to the document. The specification recommends that,
   * as far as possible, developers should implement custom element setup in this callback rather
   * than the constructor.
   */
  connectedCallback() {
    this.render();
  }

  /**
   * Called on every tick after `render()`, needs to be tracked using `#ticker` and should be cleaned
   * on disconnecting callback.
   *
   * @see TICK_RATE
   */
  #onTick() {
    switch (this.#state) {
      case GAME_STATES.X_AXIS: {
        if (!this.#plane.style.left) {
          this.#plane.style.left = 0;
        }

        const currentPos = parseInt(this.#plane.style.left);
        const nextStep = this.#body.offsetWidth * PLANE_SPEED;
        const direction = this.#plane.style.transform.indexOf("scaleX") != -1 ? 'left' : 'right';

        if (direction === 'right') {
          if ((currentPos + nextStep) > this.#body.offsetWidth - this.#plane.offsetWidth / 2) {
            this.#plane.style.transform = `${this.#plane.style.transform} scaleX(-1)`;
            break;
          }

          this.#plane.style.left = `${currentPos + nextStep}px`;
          break;
        }

        if ((currentPos - nextStep) < 0) {
          this.#plane.style.transform = this.#plane.style.transform.replace('scaleX(-1)', '');
          break;
        }

        this.#plane.style.left = `${currentPos - nextStep}px`;
        break;
      }

      case GAME_STATES.Y_AXIS: {
        if (!this.#plane.style.top) {
          this.#plane.style.top = 0;
        }

        const currentPos = parseInt(this.#plane.style.top);
        const nextStep = this.#body.offsetHeight * PLANE_SPEED;
        const direction = this.#plane.style.transform.indexOf("rotate(180deg)") != -1 ? 'down' : 'up';

        if (direction === 'up') {
          if ((currentPos + nextStep) > this.#body.offsetHeight - this.#plane.offsetHeight / 2) {
            this.#plane.style.transform = `${this.#plane.style.transform} rotate(180deg)`;
            break;
          }

          this.#plane.style.top = `${currentPos + nextStep}px`;
          break;
        }

        if ((currentPos - nextStep) < 0) {
          this.#plane.style.transform = this.#plane.style.transform.replace('rotate(180deg)', '');
          break;
        }

        this.#plane.style.top = `${currentPos - nextStep}px`;
        break;
      }
    }
  }

  /** Called on `keydown` of `space`, will update `this.#state` and render the updates to the ui. */
  #switchState() {
    this.#busy = true;

    this.#stateCounter++;
    const state = STATES[this.#stateCounter % (STATES.length)];

    switch (state) {
      case GAME_STATES.PRE_START: {
        if (this.#plane) {
          this.#body.removeChild(this.#plane);
          this.#plane = undefined;
        }

        this.#subtext.innerText = 'Press Space to Start!';
        break;
      }

      case GAME_STATES.X_AXIS: {
        this.#plane = document.createElement('img')
        this.#plane.id = IDS.PLANE;
        this.#plane.src = '/assets/plane.png';
        this.#plane.classList.add('plane');

        this.#body.appendChild(this.#plane);
        this.#subtext.innerText = 'Select X axis';

        break;
      }

      case GAME_STATES.Y_AXIS: {
        this.#plane.style.transform = `${this.#plane.style.transform} rotate(90deg)`;
        this.#subtext.innerText = 'Select Y axis';
        break;
      }

      case GAME_STATES.POST_GUESS: {
        // this bit is hard
        this.#subtext.innerText = 'You have ____ points!';
        const x = this.#plane.style.left;
        const y = this.#plane.style.top;

        console.log(x, y);

        break;
      }
    }

    // assign state only after the switch state has been finalised, we don't want to tick for a state before it's actually been initialised
    this.#state = state;
    this.#busy = false;
  }

  /** Initially render the component and setup listeners */
  render() {
    this.#ticker = setInterval(() => {if (this.#busy === false && TICKING_STATES.includes(this.#state)) this.#onTick()}, TICK_RATE);
    addEventListener('keydown', e => {if (e.keyCode === SPACE) this.#switchState()});

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host {
          background: grey;
          position: relative;
        }

        .map {
          width: 100%;
        }

        .plane {
          width: 10%;
          position: absolute;
          left: 0;
        }

        .subtext {
          align-items: center;
          text-align: center;
          padding: 20px;
        }
      </style>

      <div id=${IDS.BODY}>
        <img src='/assets/map.png' id=${IDS.BODY} class='map'>
      </div>

      <p id=${IDS.SUBTEXT} class='subtext'></p>
    `;

    this.#body = shadowRoot.getElementById(IDS.BODY);
    this.#subtext = shadowRoot.getElementById(IDS.SUBTEXT);
    this.#subtext.innerText = 'Press Space to Start!';
  }
}

customElements.define('free-to-book', FreeToBook);