#!/bin/bash
npm install || exit 127
npm run test a || exit 127
