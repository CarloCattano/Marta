# Marta - web app

Audio and midi patchbay controlable via browser interface . Control your GNU/Linux  hardware from any device with ease without requiring a screen on the device

### Functions:
- Connect / Disconnect audio/midi ports visually in node styled fashion
- Monitor information about the state of the audio system .  

### Steps:

**Required components**

- python server backend that shares jack and alsa statuses, and can receive callbacks to connect/disconnect ports at will from the web interface
- React flow front-end UI that renders dinamically 
- A smart way to connect the last 2 between them , sockets / other

#### Inspiration
  this project is inspired by FalkTX's [Carla ,  Catia ](https://kx.studio/Applications:Carla), applications , which are incredibly useful .

