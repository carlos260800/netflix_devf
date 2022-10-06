import React from "react";

const RenderSelect = (data) => {
  let select = document.querySelector("#categories");
  let { genres } = data;

  genres.forEach((gender) => {
    let option = document.createElement("option");
    option.setAttribute("value", gender.id);
    option.innerText = gender.name;
    select.appendChild(option);
  });
};

export default RenderSelect;
