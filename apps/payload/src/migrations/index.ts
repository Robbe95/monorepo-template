import * as migration_20241129_204118 from './20241129_204118';
import * as migration_20241206_093802 from './20241206_093802';

export const migrations = [
  {
    up: migration_20241129_204118.up,
    down: migration_20241129_204118.down,
    name: '20241129_204118',
  },
  {
    up: migration_20241206_093802.up,
    down: migration_20241206_093802.down,
    name: '20241206_093802'
  },
];
