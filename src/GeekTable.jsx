import React, { useState } from 'react';
import JsonData from './data.json'

import ReactFlow, {
	addEdge,
	removeElements,
	Background,
  } from 'react-flow-renderer';

const ports= []

function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info) => {
			if (info.type === 'input') {
				return(
					ports.push({
						id: info.id+info.name, type: 'input', data: { label: info.name },
						position: { x: 100, y: 60 * info.id }, animated: true, arrowHeadType: 'arrowclosed',
						sourcePosition: 'right'
					})
				)
			}
			else if (info.type ===	 'output') {
				return(
					ports.push({
						id: info.id+info.name, type: 'output', data: { label: info.name },
						position: { x: 600, y:( 50 * info.id)-200 }, animated: true, arrowHeadType: 'arrowclosed',
						targetPosition: 'left'
					})
				)
			}
		}
	)
	return(
		<div>
			{DisplayData}
			<div style={{ height: 800 }}>
			<BasicFlow>	
					<Background color="#FFFF" gap={16} />
			</BasicFlow>
			</div>
		</div>
	)
}
const BasicFlow = () =>{
	const [elements, setElements] = useState(ports);
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
	const onConnect = (params) => setElements((els) => addEdge(params, els));

	return (
		<ReactFlow elements={elements} snapToGrid={true} 
							onConnect={onConnect}onElementsRemove={onElementsRemove}>
		</ReactFlow>
	)
}

export default JsonDataDisplay;