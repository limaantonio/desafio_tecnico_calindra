import { describe, expect, test } from '@jest/globals';
import { convertMetersToKilometers } from '../../utils/ConvertDistance';

describe('convert distance', () => {
  test('meters convert to kilometers', () => {
    expect(convertMetersToKilometers(1000)).toBe(1);
  });
});
