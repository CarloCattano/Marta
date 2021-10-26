import React, { useState } from 'react';
import JsonData from './test_data.json'

import ReactFlow, {
	addEdge,
	Background,
  } from 'react-flow-renderer';

const ports = []

function RenderPorts(){
	const DisplayData=JsonData.map( (info) => {
			if (info.type === 'input') {
				ports[info.id]={
						id: info.name, type: 'input', data: { label: info.name },
						position: { x: 100, y: 60 * info.id }, animated: true, 
						sourcePosition: 'right'
				}
			}
			if (info.type === 'output') {
				ports[info.id]={
						id: info.name, type: 'output', data: { label: info.name },
						position: { x: 600, y:( 50 * info.id)-200 }, animated: true, 
						targetPosition: 'left'
				}
			}
		},
		//console.log(ports)
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

function BasicFlow() {

	const [elements, setElements] = useState(ports);
	const onConnect = (params) => setElements((els) => addEdge(params, els), console.log("Source ", params.source, " Target ", params.target));

	return (
		<ReactFlow elements={elements} snapToGrid={true}
			onConnect={onConnect}>
		</ReactFlow>
	);
}

export default RenderPorts;
