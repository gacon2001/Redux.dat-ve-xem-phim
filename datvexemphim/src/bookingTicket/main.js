import React, { Component } from "react";
import "./main.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import dataGhe from "./dataGhe.json";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return dataGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          backgroundImage: "url('/img/bgmovie.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="bookingMovie"
      >
        <div
          style={{
            width: "100%",
            minHeight: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className=" display-4 text-warning">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div style={{ fontSize: "25px" }} className="mt-2 text-light">
                  Màn Hình
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                  }}
                  className="mt-2"
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>

              <div className="col-4">
                <div
                  className=" text-warning mt-2"
                  style={{ fontSize: "35px" }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
