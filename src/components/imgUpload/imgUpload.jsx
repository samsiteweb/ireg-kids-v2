import React from "react";
import { Icon, Button } from "antd";
import "./uploader.css";

const ImageUploader = ({
  onChange,
  imageUrl,
  acceptBtnClicked,
  deleteBtnClicked,
  loading,
  loadImg,
  height = 100,
  width = 100,
  imageUrlPreview,
  ...props
}) => {
  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <div className='container'>
        <h4 style={{ textAlign: "center" }}>{props.header}</h4>
        <div className='upload'>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <div style={{ textAlign: "center" }}>
              {loadImg ? (
                <div>
                  <img
                    {...props}
                    src={imageUrlPreview}
                    alt='uploaded'
                    height={height}
                    width={height}
                  />
                </div>
              ) : (
                <div>
                  <Icon
                    type={loading === true ? "loading" : "plus-circle"}
                    style={{ fontSize: "20px" }}
                  />
                  <h3>Upload Image</h3>
                </div>
              )}
            </div>
          </div>
          <input type='file' onChange={onChange} />
        </div>
      </div>
      <div
        hidden={false}
        className='fade-in'
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "5px"
        }}
      >
        {/* <Button onClick={acceptBtnClicked} className='CustomBtn'>
          Accept
          <Icon type={"check-circle"} />
        </Button>
        <Button onClick={deleteBtnClicked} type='danger'>
          Delete
          <Icon type={"delete"} />
        </Button> */}
      </div>
    </div>
  );
};

export default ImageUploader;
