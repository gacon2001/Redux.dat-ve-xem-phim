import React, { Component } from "react";
import {connect} from "react-redux";
import { actHuyGhe } from "../redux/actions";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <>
        <div className="mt-5">
          <button className="gheDaDat"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đã đặt
          </span>

          <br />
          <button className="gheDangDat"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đang đặt
          </span>

          <br />
          <button className="gheChuaDat" style={{marginLeft:'0' }}></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
            <table className="table" border="2">
  <thead>
      <tr className="text-light" style={{fontSize:'35px'}}>
          <th>Số ghế</th>
          <th>Giá</th>
          <th></th>
      </tr>
  </thead>
  <tbody className="text-warning">
    {this.props.danhSachGheDangDat.map((gheDangDat, index)=>{
      return <tr key={index}>
        <td>{gheDangDat.soGhe}</td>
        <td>{gheDangDat.gia}</td>
        <td><button onClick={()=>{
          this.props.dispatch(actHuyGhe(gheDangDat.soGhe))
        }}>Huỷ</button></td>
      </tr>
    })}
  </tbody>
  <tfoot>
    <tr className="text-warning">
      <td></td>
      <td>Tổng tiền</td>
      <td>{this.props.danhSachGheDangDat.reduce((total, gheDangDat, index)=>{
        return total += gheDangDat.gia;
      },0).toLocaleString()}</td>
    </tr>
  </tfoot>
            </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    danhSachGheDangDat: state.DatGheReducer.danhSachGheDangDat,
  }
}

export default connect(mapStateToProps, null) (ThongTinDatGhe)

