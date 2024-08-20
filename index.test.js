import { expect, test } from 'vitest';
import { render } from 'cli-testing-library';
import { resolve } from 'path';

test('the CLI tool accepts args and returns the expected result', async () => {
  const testProjectString = 'TESTPROJECT';

  const { findByText, userEvent } = await render('node', [
    resolve(__dirname, `./index.js --project ${testProjectString}`),
  ]);

  // select branch type
  const bugOption = await findByText('❯ Bug');
  expect(bugOption).toBeTruthy();
  userEvent.keyboard('[ArrowDown][Enter]');

  // enter ticket number
  const ticketInput = await findByText('Ticket number');
  expect(ticketInput).toBeTruthy();
  userEvent.keyboard('123[Enter]');

  // enter description
  const descriptionInput = await findByText('Description');
  expect(descriptionInput).toBeTruthy();
  userEvent.keyboard('description-test[Enter]');

  const projectText = await findByText(testProjectString);

  expect(projectText).toBeTruthy();
});

test('the CLI tool throws an error when no project is passed', async () => {
  const { getByError } = await render('node', [
    resolve(__dirname, `./index.js`),
  ]);

  const errorText = getByError(`Error: must pass 'project' argument`);
  expect(errorText).toBeTruthy();
});
