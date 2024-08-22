import { input } from '@inquirer/prompts';
import kebabCase from 'lodash.kebabcase';
import escape from 'validator/lib/escape.js';

export async function getTicketDescription() {
  const description = await input({ message: 'Description: ', required: true });
  const formattedDescription = kebabCase(escape(description));

  return formattedDescription;
}
