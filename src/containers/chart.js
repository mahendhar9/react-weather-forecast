import React, {Component} from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines width={150} height={120} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}