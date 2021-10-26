'''
JackPatch monitor inputs and outputs for Marta
'''
import time
import jackpatch
import json

client = jackpatch.Client("master")
print("Client name ",client.name)

audioInPorts = []
audioOutPorts = []

midiOutPorts = []
midiInPorts = []

jAudioInputs = client.get_ports(flags=jackpatch.JackPortIsInput)
jAudioOutputs = client.get_ports(flags=jackpatch.JackPortIsOutput)

for port in jAudioInputs:
   audioInPorts.append(port.name)

for port in jAudioOutputs:
   audioOutPorts.append(port.name)

for port in client.get_ports(type_pattern=".*midi.*",flags=jackpatch.JackPortIsInput):
    midiInPorts.append(port.name)
for port in client.get_ports(type_pattern=".*midi.*",flags=jackpatch.JackPortIsOutput):
    midiOutPorts.append(port.name)

# get total number of nodes would be nice
totalNodes = audioInPorts + audioOutPorts + midiInPorts + midiOutPorts
print("TOTAL NODES " , len(totalNodes))
#pack all in a Json File to send over to Front-end

aList = []

for p in midiOutPorts:
  aList.append({p: {'id':totalNodes.index(p),'type':'midiOut'}})
for f in midiOutPorts:
  aList.append({f: {'id':totalNodes.index(f),'type':'midiIn' }})
for d in audioInPorts: 
  aList.append({d: {'id':totalNodes.index(d),'type':'audioInput' }})
for e in audioOutPorts:
  aList.append({e: {'id':totalNodes.index(e),'type':'audioOutput' }})

jsonStr = json.dumps(aList)
print("JSON STRING \n")
print(jsonStr)
