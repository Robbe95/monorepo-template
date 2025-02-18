import * as migration_20250218_104033 from './20250218_104033';

export const migrations = [
  {
    up: migration_20250218_104033.up,
    down: migration_20250218_104033.down,
    name: '20250218_104033'
  },
];
