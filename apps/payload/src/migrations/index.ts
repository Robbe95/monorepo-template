import * as migration_20250313_102835 from './20250313_102835';

export const migrations = [
  {
    up: migration_20250313_102835.up,
    down: migration_20250313_102835.down,
    name: '20250313_102835'
  },
];
