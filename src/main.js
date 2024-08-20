import childProcess from 'node:child_process';
import { input } from '@inquirer/prompts';
import kebabCase from 'lodash.kebabcase';
import { getBranchType } from './getBranchType.js';

export async function main(project) {
  const type = await getBranchType();

  const ticketNumber = await input({ message: 'Ticket number: ' });

  const description = await input({ message: 'Description: ' });
  const formattedDescription = kebabCase(description);

  const formattedBranch = `${type}/${project}-${ticketNumber}-${formattedDescription}`;

  childProcess.exec(
    `git checkout -b ${formattedBranch}`,
    function (error, stdout, stderr) {
      if (error) {
        throw new Error(error);
      }
      console.log(stderr || stdout);
    }
  );
}
