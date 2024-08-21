import child_process from 'child_process';

export function createGitBranch(branchName) {
  child_process.exec(
    `git checkout -b ${branchName}`,
    function (error, stdout, stderr) {
      if (error) {
        throw new Error(error);
      }
      console.log(stderr || stdout);
    }
  );
}
