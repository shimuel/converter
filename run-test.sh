#!/usr/bin/env bash

# "A": "npm-run-all --parallel start coverage",
nyc --show-process-tree --reporter lcov --reporter json --reporter html --reporter text -t coverage --report-dir coverage/summary npm test 
#nyc npm test 
if [ $? -eq 0 ]
then
  echo "SUCCESS"
else
  echo "FAIL"
fi
