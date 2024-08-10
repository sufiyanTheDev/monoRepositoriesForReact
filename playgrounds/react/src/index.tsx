import React  from "react";
import ReactDOM from "react-dom/client";
import {Button, Color} from '@sufiyan/react';
import { Spacing } from '@sufiyan/foundation';
import '@sufiyan/scss/lib/global.css';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
      <Button label="sufiyan gafoor"/>
      <Color hexCode="#000000"  height={Spacing.lg}/>
    </>
  );