'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useId = (id) => {
  const generated = React.useId();
  return id !== null && id !== void 0 ? id : generated;
};

exports.useId = useId;
