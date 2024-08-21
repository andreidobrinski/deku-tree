export function getBranchName({ type, project, ticketNumber, description }) {
  const branchName = `${type}/${project}-${ticketNumber}-${description}`;

  return branchName;
}
