import React from "react";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router";

function Language() {
  const match = useRouteMatch();
  const lang = match.params.lang;

  const history = useHistory();
  localStorage.setItem("locale",lang )
    setTimeout(() => {
      window.location.reload()
    }, 100);
   
    
  history.goBack();
  return <></>;
}

export default Language;