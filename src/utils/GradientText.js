// GradientText.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

const GradientText = ({text, style}) => {
  return (
    <Svg height="50" width="300">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="110%" y2="0">
          <Stop offset="0" stopColor="#FF7F27" stopOpacity="1" />
          <Stop offset="1" stopColor="#000000" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#grad)"
        fontSize="24"
        fontWeight="bold"
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        {...style}>
        {text}
      </SvgText>
    </Svg>
  );
};

export default GradientText;
