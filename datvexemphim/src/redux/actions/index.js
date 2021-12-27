import { DAT_GHE } from "../constants";
import { HUY_GHE } from "../constants";

export const actDatGhe = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}

export const actHuyGhe = (soGhe) => {
    return {
        type: HUY_GHE,
        soGhe
    }
}
