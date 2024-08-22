import { input } from '@inquirer/prompts';
import isInt from 'validator/lib/isInt.js';

export async function getTicketNumber() {
  const ticketNumber = await input({
    message: 'Ticket number: ',
    required: true,
    validate: (input) => {
      return isInt(input) || 'Ticket number must be a number';
    },
  });

  return ticketNumber;
}
