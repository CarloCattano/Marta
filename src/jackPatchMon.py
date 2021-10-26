'''
JackPatchMon monitor inputs and outputs for Marta
'''
import time
import jackpatch

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

print("AUDIO IN",audioInPorts)
print("AUDIO OUT",audioOutPorts)

for port in client.get_ports(flags=jackpatch.JackPortIsInput):
    midiOutPorts.append(port.name)
for port in client.get_ports(flags=jackpatch.JackPortIsOutput):
    midiInPorts.append(port.name)

print("Midi Output Ports ",midiOutPorts)
print("Midi Input Ports ",midiInPorts)

# TO DO : pack all in a Json File to send over to Front-end
