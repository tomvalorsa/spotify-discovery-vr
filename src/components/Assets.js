import React from 'react'
import { Icons, Textures } from 'constants'

const Assets = () => (
  <a-assets>
    <img id="play" src={Icons.play} />
    <img id="pause" src={Icons.pause} />
    <img id="next" src={Icons.next} />
    <img id="previous" src={Icons.previous} />
    <img id="relatedArtists" src={Icons.relatedArtists} />
    <img id="add" src={Icons.add} />
    <img id="added" src={Icons.added} />
    <img id="save" src={Icons.save} />
    <img id="inProgress" src={Icons.inProgress} />
    <img id="done" src={Icons.done} />

    <img id="floor" src={Textures.floor} />
    <img id="wall" src={Textures.wall} />
    <img id="sky" src={Textures.sky} />
  </a-assets>
)

export default Assets
