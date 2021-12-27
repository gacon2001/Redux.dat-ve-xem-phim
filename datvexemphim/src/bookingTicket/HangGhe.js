import { css } from "jquery";
import React, { Component } from "react";
import {connect} from "react-redux";
import { actDatGhe } from "../redux/actions";

class HangGhe extends Component {
  renderGhe = () => {
      return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
        let cssGheDaDat = "";
        let disabled = false;
        if (ghe.daDat) {
          cssGheDaDat = "gheDaDat";
          disabled = true;
        }

        let cssGheDangDat = "";
        let indexGheDangDat = this.props.dsGheDangDat.findIndex((gheDangDat) => {
          return gheDangDat.soGhe === ghe.soGhe
        })

        if (indexGheDangDat !== -1) {
          cssGheDangDat = "gheDangDat";
        }

        return (
          <button
            onClick={() => {
              this.props.datGhe(ghe)
            }}
            disabled={disabled}
            className={`${cssGheDaDat} ghe ${cssGheDangDat}`}
            key={index}
          >
            {ghe.soGhe}
          </button>
        );
      });
    };

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index)=>{
            return <button className="rowNumber" key={index}>
                {hang.soGhe}
            </button> 
        })
    }

    renderHangGhe = () => {
      if (this.props.soHangGhe === 0) {
        return (
          <div className="ml-4">
            {this.props.hangGhe.hang}
            {this.renderSoHang()}
          </div>
        );
      } else {
        return (
          <div>
            {this.props.hangGhe.hang}
            {this.renderGhe()}
          </div>
        );
      }
    }

    
    render() {
    return (
      <div
        className="text-light text-left mt-1 ml-5"
        style={{ fontSize: "30px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.DatGheReducer.danhSachGheDangDat, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe)=>{
      dispatch(actDatGhe(ghe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (HangGhe);
