import { describe, expect, test } from 'vitest';
import { resolve } from 'path';
import { render } from 'cli-testing-library';

const resolvedPath = resolve(__dirname, './getTicketDescription.js');

describe(`The getTicketDescription function`, () => {
  test('shows an error when submitting with no text', async () => {
    const { userEvent, findByText } = await render(
      `node -e 'import("${resolvedPath}").then(module => module.getTicketDescription())'`
    );

    userEvent.keyboard('[Enter]');

    const errorText = await findByText('must provide a value');
    expect(errorText).toBeTruthy();
  });
});
