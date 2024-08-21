import child_process from 'child_process';

/**
 * This function exists to help cleanup the git operations as part of a test.
 *
 * It accepts the name of the newly created branch and does two things:
 * - switches back to the branch the user started at
 * - deletes the git branch that was created as part of the test
 */
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
