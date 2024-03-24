import React from "react";
import {renderToString} from 'react-dom/server';
import express from 'express';
import { StaticRouter } from "react-router-dom/server"

import App from './App';

const app = express();

const serverRender = (req, res, next) => {
   const context = {};
   const jsx = (
      <StaticRouter location={req.url} context={context}>
         <App></App>
      </StaticRouter>
   )
   const root = renderToString(jsx);
   res.send(root);
};

app.use(serverRender);

app.listen(3000, () => {
   console.log('Running on https://localhost:3000');
})
