import { select } from '@inquirer/prompts';

const branchTypes = ['bug', 'feature', 'techdebt'];

export async function getBranchType() {
  const type = await select({
    message: 'Branch type: ',
    choices: getOptionsFromArray(branchTypes),
  });

  return type;
}

/**
 * The purpose of this function is to transform an string array of branch types
 * into a set of options to pass to inquirer's select function.
 */
function getOptionsFromArray(input) {
  const options = input.map((option) => ({ value: option }));
  return Array.from(options);
}
