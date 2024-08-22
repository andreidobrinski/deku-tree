import { describe, expect, test } from 'vitest';
import { resolve } from 'path';
import { render } from 'cli-testing-library';

const resolvedPath = resolve(__dirname, `./getBranchType.js`);

describe('The getBranchType function', () => {
  test('shows the first option', async () => {
    const { getByText } = await render(
      `node -e 'import("${resolvedPath}").then(module => module.getBranchType())'`
    );
    const bugText = getByText('bug');
    expect(bugText).toBeTruthy();
  });
});
