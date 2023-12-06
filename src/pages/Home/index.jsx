import React from "react";
import { Nav } from "../../components/Nav";
import { globalStore } from "../../services";
import { ColorPalet } from "../../components/colorPalet";
import { ToastContainer, toast } from "react-toastify";
export const HomePage = () => {
  const { allPalettes } = globalStore();
  function copyItemCode(code) {
    // console.log(code);
    navigator.clipboard.writeText("#" + code);
    toast.success("Copied to Clipboard: " + "#" + code);
  }

  return (
    <div>
      <ToastContainer />
      <Nav />
      <p className="text-warning fs-3 fw-normal m-4">
        You can copy the color code by touching the color card
      </p>

      {allPalettes.length ? (
        <div className="  container mt-4">
          {allPalettes.map((colorPalet, index) => (
            <div className=" mb-5" key={index + colorPalet.paletGroupName}>
              <p className=" text-info fs-3 fw-bold">
                Group Name: {colorPalet.paletGroupName}{" "}
              </p>
              <div>
                <ColorPalet
                  onClick={copyItemCode}
                  paletArray={colorPalet.paletColors}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-danger fs-1 text-center p-5 fw-normal m-5">
          There are no data
        </p>
      )}
    </div>
  );
};
