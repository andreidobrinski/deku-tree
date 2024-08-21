/**
 * This function exists to take in arguments and return a formatted git branch string
 */
export function getBranchName({ type, project, ticketNumber, description }) {
  const branchName = `${type}/${project}-${ticketNumber}-${description}`;

  return branchName;
}
