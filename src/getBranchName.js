/**
 * This function exists to take in string arguments and return a formatted git branch string
 */
export function getBranchName({ type, project, ticketNumber, description }) {
  const branchName = `${type}/${project}-${ticketNumber}-${description}`;

  return branchName;
}
