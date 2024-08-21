import child_process from 'child_process';

export function cleanupTests(branchName) {
  child_process.execSync(
    `git checkout - && git branch -d ${branchName}`,
    function (error, stdout, stderr) {
      if (error) {
        throw new Error(error);
      }
      console.log(stderr || stdout);
    }
  );
}
