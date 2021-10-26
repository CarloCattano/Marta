import React, { useState } from 'react'
import JsonData from './test_data.json'
import ButtonEdge from './buttonEdge'

import ReactFlow, {
	removeElements,
	addEdge,
	Background,
  } from 'react-flow-renderer'

const edgeTypes = {
	buttonedge: ButtonEdge,
}

const ports = []
const connections = []

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
// TO DO : Remove the conection only aka Edge aka patchcable

// If a conection exists already ignore , if it doesnt add it to the connections array
function process_conection(src, dst) {
	return !connections.includes(src.toString() + dst.toString()) ? connections.push(src.toString()+dst.toString()) : console.log("already in database"),console.log(connections)
}

function BasicFlow() {
	const [elements, setElements] = useState(ports);
	const onConnect = (params) => setElements((els) => addEdge({...params,type:'buttonedge'}, els), process_conection(params.source,params.target))

	return (
		<ReactFlow elements={elements} snapToGrid={true}
			onConnect={onConnect}  edgeTypes={edgeTypes}  key="edge-with-button">
		</ReactFlow>
	)
}

export default RenderPorts;
