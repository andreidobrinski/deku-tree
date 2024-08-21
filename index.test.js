import { describe, expect, test } from 'vitest';
import { render } from 'cli-testing-library';
import { resolve } from 'path';
import { getBranchName } from './src/getBranchName.js';
import { cleanupTests } from './cleanupTests.js';

describe('The e2e flow', () => {
  test('the CLI tool accepts args and returns the expected result', async () => {
    const testProjectString = 'TESTPROJECT';

    const { findByText, userEvent } = await render('node', [
      resolve(__dirname, `./index.js --project ${testProjectString}`),
    ]);

    // select branch type
    const bugOption = await findByText('❯ Bug');
    expect(bugOption).toBeTruthy();
    // choose 'feature' and press enter
    userEvent.keyboard('[ArrowDown][Enter]');

    // enter ticket number
    const ticketInput = await findByText('Ticket number');
    expect(ticketInput).toBeTruthy();
    const ticketNumber = '123';
    userEvent.keyboard(`${ticketNumber}[Enter]`);

    // enter description
    const descriptionInput = await findByText('Description');
    expect(descriptionInput).toBeTruthy();
    const description = 'description-test';
    userEvent.keyboard(`${description}[Enter]`);

    // check that the branch name exists
    const branchName = getBranchName({
      type: 'feature',
      project: testProjectString,
      ticketNumber,
      description,
    });
    const projectText = await findByText(branchName);

    expect(projectText).toBeTruthy();

    cleanupTests(branchName);
  });

  test('the CLI tool throws an error when no project is passed', async () => {
    const { getByError } = await render('node', [
      resolve(__dirname, `./index.js`),
    ]);

    const errorText = getByError(`Error: must pass 'project' argument`);
    expect(errorText).toBeTruthy();
  });
});
