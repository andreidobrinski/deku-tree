import { input } from '@inquirer/prompts';
import kebabCase from 'lodash.kebabcase';
import { getBranchType } from './getBranchType.js';
import { createGitBranch } from './createGitBranch.js';
import { getBranchName } from './getBranchName.js';

export async function main(project) {
  const type = await getBranchType();

  const ticketNumber = await input({ message: 'Ticket number: ' });

  const description = await input({ message: 'Description: ' });
  const formattedDescription = kebabCase(description);

  const branchName = getBranchName({
    type,
    project,
    ticketNumber,
    description: formattedDescription,
  });

  createGitBranch(branchName);
}
