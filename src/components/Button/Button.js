import React from "react";
import "./button.css";
import { gifLoaderAsset } from "../../assets/Index";

const SaveButton = ({
  buttonStyle,
  id,
  iconPrev,
  icon,
  imgStyle,
  alt,
  onClick,
  label,
  disabled = false,
  type = "button",
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      className={buttonStyle}
      disabled={loading || disabled}
    >
      {iconPrev && <img className={imgStyle} src={iconPrev} alt={alt} />}
      {!loading && label}
      {loading ? (
        <img src={gifLoaderAsset} height="30" width="30" />
      ) : (
        icon && <img className={imgStyle} src={icon} alt={alt} />
      )}
    </button>
  );
};

export default SaveButton;
