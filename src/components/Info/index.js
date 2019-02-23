import React from 'react';
import { description, rules } from './data/data';

const container = {
  maxWidth: 600,
  height: 300,
};

const pStyle = {
  fontSize: 20,
  textIndent: 20,
};

export default function Info() {
  return (
    <div style={container}>
      <p style={pStyle}>{description}</p>
      <p style={pStyle}>{rules}</p>
    </div>
  );
}
