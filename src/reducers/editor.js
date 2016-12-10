/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {} from '../actions/const';

const initialState = {
  editor_mode: "DEFAULT",  // "ADD_COMPONENT" | "SELECT" | "DRAG" | "HOVER"
  selected:    ["1", "2"],
  adding: [],
  circuit:     [
    {
      "name_unique":   "Ohms",
      "flags":         1,
      "time_step":     5.0e-06,
      "sim_speed":     10,
      "current_speed": 50.0,
      "voltage_range": 5.0,
      "power_range":   50.0
    },
    {
      "id":     1,
      "sym":    "r",
      "x1":     256,
      "y1":     176,
      "x2":     256,
      "y2":     304,
      "flags":  "0",
      "params": {
        "resistance": 100.0
      }
    },
    {
      "id":     2,
      "sym":    "172",
      "x1":     304,
      "y1":     176,
      "x2":     304,
      "y2":     128,
      "flags":  "0",
      "params": {
        "waveform":   "SINE",
        "frequency":  5.0,
        "maxVoltage": 5.0,
        "bias":       5.0,
        "phaseShift": 0.0,
        "dutyCycle":  0.5,
        "label":      "Voltage"
      }
    },
    {
      "id":     3,
      "sym":    "g",
      "x1":     256,
      "y1":     336,
      "x2":     256,
      "y2":     352,
      "flags":  "0",
      "params": {}
    },
    {
      "id":     4,
      "sym":    "w",
      "x1":     256,
      "y1":     304,
      "x2":     256,
      "y2":     336,
      "flags":  "1",
      "params": {}
    },
    {
      "id":     5,
      "sym":    "r",
      "x1":     352,
      "y1":     176,
      "x2":     352,
      "y2":     304,
      "flags":  "0",
      "params": {
        "resistance": 1000.0
      }
    },
    {
      "id":     6,
      "sym":    "w",
      "x1":     352,
      "y1":     304,
      "x2":     352,
      "y2":     336,
      "flags":  "1",
      "params": {}
    },
    {
      "id":     7,
      "sym":    "g",
      "x1":     352,
      "y1":     336,
      "x2":     352,
      "y2":     352,
      "flags":  "0",
      "params": {}
    },
    {
      "id":     8,
      "sym":    "w",
      "x1":     304,
      "y1":     176,
      "x2":     352,
      "y2":     176,
      "flags":  "0",
      "params": {}
    },
    {
      "id":     9,
      "sym":    "w",
      "x1":     256,
      "y1":     176,
      "x2":     304,
      "y2":     176,
      "flags":  "0",
      "params": {}
    }
  ]
}

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    /*
    case YOUR_ACTION: {
      // Modify next state depending on the action and return it
      return nextState;
    }
    */
    case "ADD":
      return {
        editor_mode: "ADDING",
        circuit: [
          { componentType: "Resistor", meta: action.meta }
        ]
      }
    case "CLEAR":
      return {
        editor_mode: "DEFAULT",
        circuit: [
        ]
      }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
