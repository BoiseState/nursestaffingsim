#!/bin/bash
npm install || exit 127
npm install antd --save || exit 127
npm run build || exit 127
