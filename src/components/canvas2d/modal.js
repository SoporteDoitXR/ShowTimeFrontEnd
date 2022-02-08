import React, { useRef } from "react";

const Modal = ({
  className,
  positionY,
  positionX,
  width,
  height,
  opacity,
  bgImage,
  bgColor,
  borderRadius,
  zIndex = 2,
  borderSize,
  colorBorde,
  animation,
  hoverEnter,
  hoverExit,
  ///Button Close
  icon,
  text,
  iconLeft,
  iconRight,
  btnCloseClassName,
  spanClassNameText,
  btnClosePositionX,
  btnClosePositioY,
  fontSize,
  btnAnimation,
  btnHoverEnter,
  btnHoverExit,
  //Control Modal for State
  show,
  setShow,
  //Contenido Hijo
  children,
}) => {
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  const Icon = icon;
  const ref = useRef(null);
  const refBtn = useRef(null);
  return (
    <div
      id="modal"
      style={{
        width: `${!show ? "0" : "100%"}`,
        height: `${!show ? "0" : "100%"}`,
        backgroundColor: `${!show ? "none" : "rgb(0 0 0 / 85%)"}`,
      }}
    >
      {show == true ? (
        <div
          ref={ref}
          onMouseEnter={() => {
            var auxClass = ref.current.className
              ? ""
              : ref.current.className?.replace(hoverExit || "", "");

            ref.current.className =
              hoverEnter + " " + auxClass + " " + `${className} ${animation}`;
          }}
          onMouseLeave={() => {
            var auxClass = ref.current.className
              ? ""
              : ref.current.className?.replace(hoverEnter || "", "");
            ref.current.className =
              hoverExit + " " + auxClass + " " + `${className} ${animation}`;
          }}
          className={`${className} ${animation}`}
          style={{
            top: `${positionY}px`,
            left: `${positionX}px`,
            width: `${width}px`,
            height: `${height}px`,
            opacity: `${opacity}`,
            backgroundColor: `${bgColor}`,
            backgroundImage: "url(" + bgImage + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: `${zIndex}`,
            borderRadius: `${borderRadius}px`,
            border: `${colorBorde} ${borderSize}px solid`,
          }}
        >
          <button
            ref={refBtn}
            onMouseEnter={() => {
              var auxClass = refBtn.current.className
                ? ""
                : refBtn.current.className?.replace(btnHoverExit || "", "");
              refBtn.current.className =
                btnHoverEnter +
                " " +
                auxClass +
                " " +
                `${btnCloseClassName} ${btnAnimation}`;
            }}
            onMouseLeave={() => {
              var auxClass = refBtn.current.className
                ? ""
                : refBtn.current.className?.replace(btnHoverEnter || "", "");
              refBtn.current.className =
                btnHoverExit +
                " " +
                auxClass +
                " " +
                `${btnCloseClassName} ${btnAnimation}`;
            }}
            className={`${btnCloseClassName} ${btnAnimation}`}
            style={{
              top: `${btnClosePositioY}px`,
              left: `${btnClosePositionX}px`,
            }}
            onClick={() => {
              setShow(!show);
            }}
          >
            {icon ? (
              <Icon className="m-auto" />
            ) : (
              <>
                {iconLeft && <IconLeft className="my-auto  mr-2" />}
                <span
                  className={`${
                    !iconRight && !iconLeft && "m-auto"
                  } ${spanClassNameText}`}
                  style={{ fontSize: `${fontSize || 40}px` }}
                >
                  {text}
                </span>
                {iconRight && <IconRight className="my-auto ml-2" />}
              </>
            )}
          </button>
          {children}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Modal;
