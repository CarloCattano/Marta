import React from 'react'
import {
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd,
  removeElements,
} from 'react-flow-renderer';

import './index.css';

const foreignObjectSize = 40;

const onEdgeClick = (evt, id) => {
  evt.stopPropagation();

  let extractString = id.split("-")
  let sourceConection = extractString[1].substring(0,extractString[1].length - 4)
  let destinationConection = extractString[2].substring(0,extractString[2].length - 4)
  let summedName = sourceConection+"->"+destinationConection
  var el = document.getElementById(id);

  // Remove cable ok ,  how to REMOVE edge-button ? 
  console.log(summedName)
  //el.parentNode.removeChild(el);

  el.remove()
  console.log(el)
};

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body>
          <button
            className="edgebutton"
            onClick={(event) => onEdgeClick(event, id)}
          >
            ×
          </button>
        </body>
      </foreignObject>
    </>
  );
}