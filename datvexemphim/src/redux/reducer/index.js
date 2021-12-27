import {DAT_GHE, HUY_GHE} from '../constants';
const stateDefault = {
    danhSachGheDangDat: []
}

const DatGheReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: { // chưa import constant từ file cónstants/index.js
            let dsGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = dsGheDangDatUpdate.findIndex((gheDangDat)=>{
                return gheDangDat.soGhe === action.ghe.soGhe
            }) 
            if (index !== -1) {
                dsGheDangDatUpdate.splice(index, 1);
            }else{
                dsGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = dsGheDangDatUpdate;
            return {...state};
        }
        case HUY_GHE:{
            let dsGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = dsGheDangDatUpdate.findIndex((gheDangDat)=>{
                return gheDangDat.soGhe === action.soGhe
            })
            if (index !== -1) {
                dsGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = dsGheDangDatUpdate;
            return {...state}
        }
            
    
        default:
            return {...state};
    }
}

export default DatGheReducer;
