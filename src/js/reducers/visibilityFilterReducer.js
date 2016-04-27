import expect, { createSpy, spyOn, isSpy } from 'expect'

const visibilityFilterReducer = (state="SHOW_ALL", action) => {
  switch(action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

import {setVisitbilityFilter} from '../actions'

expect(
  visibilityFilterReducer(undefined, setVisitbilityFilter("SHOW_RANDOM"))
).toEqual(
  "SHOW_RANDOM"
);

expect(
  visibilityFilterReducer(undefined, {})
).toEqual(
  "SHOW_ALL"
);

expect(
  visibilityFilterReducer("SHOW_FEW", setVisitbilityFilter("SHOW_RANDOM"))
).toEqual(
  "SHOW_RANDOM"
);

export default visibilityFilterReducer;