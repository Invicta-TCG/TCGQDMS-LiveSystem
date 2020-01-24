import { combineReducers } from "redux";
import { plantLevelReducers } from "./master/plantlevel/PlantLevelIndex";
import { categoryLevelReducers } from "./master/categorylevel/CatergoryLevelIndex";
import { parameterLevelReducers } from "./master/parameterlevel/ParameterLevelIndex";
import { siteLevelReducers } from "./master/sitelevel/SiteLevelIndex";
import { TopbarNavigationReducer } from "./topbarnavigation/TopbarNavigationReducer";
import { mixDesignLevelReducers } from "./master/mixdesign/MixDesignIndex";
import { samplesReducers } from "./sample/SampleIndex";

const allReducers = combineReducers({
  plantLevelReducers: plantLevelReducers,
  categoryLevelReducers: categoryLevelReducers,
  parameterLevelReducers: parameterLevelReducers,
  mixDesignLevelReducers: mixDesignLevelReducers,
  siteLevelReducers: siteLevelReducers,
  samplesReducers: samplesReducers,
  topbarNavigationReducers: TopbarNavigationReducer
});

export default allReducers;
