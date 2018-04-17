import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { get } from 'lodash';

const Player = ({ settings }) => {
  const { player } = settings;
  const { volume, position, playing } = player;
  const { link: url } = get(player, 'file', {});
  const config = {
    loop: true,
    muted: false,
    width: '100%',
    height: '100%',
    progressInterval: 2000,
    // full screen
    playsinline: false,
    volume,
    playing,
    url,
    ref: ref => {
      this.player = ref;
    },
  };

  return (
    <div>
      <div>{url}</div>
      <div>{position || '-'}</div>
      <div>{playing ? 'playing' : 'pause'}</div>
      <ReactPlayer {...config} />
    </div>
  );
};

Player.propTypes = {
  // files: PropTypes.object.isRequired,
  // settingsReplace: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default Player;
