import {
  getBranchType,
  getTicketNumber,
  getTicketDescription,
} from './inputs/index.js';
import { getBranchName } from './getBranchName.js';
import { createGitBranch } from './createGitBranch.js';

export async function main(project) {
  const type = await getBranchType();

  const ticketNumber = await getTicketNumber();

  const description = await getTicketDescription();

  const branchName = getBranchName({
    type,
    project,
    ticketNumber,
    description,
  });

  createGitBranch(branchName);
}
