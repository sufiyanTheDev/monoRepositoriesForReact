import React  from "react";
import ReactDOM from "react-dom/client";
import {Button, Color, Spacing} from '@ds.e/react';
import '@ds.e/scss/lib/global.css';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
      <Button label="sufiyan gafoor"/>
      <Color hexCode="#000000"  height={Spacing.sm}/>
    </>
  );