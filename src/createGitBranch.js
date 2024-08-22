import child_process from 'child_process';

/**
 * This function exists to take in a git branch name and use a node child process to
 * create a git branch from that branch name.
 *
 * Either stderr or stdout are logged because git can return a successfull stdout as a stderr.
 */
export function createGitBranch(branchName) {
  child_process.exec(
    `git checkout -b ${branchName}`,
    function (error, stdout, stderr) {
      if (error) {
        throw new Error(error);
      }
      console.log('🌳 ', stderr || stdout);
    }
  );
}
