/**
 * The following function tests a project name for validity.
 * It returns the project name if valid and throws an error is invalid.
 *
 * The regex string checks to for input that are only alphanumeric.
 * The following is allowed:
 * - lowercase letters a-z
 * - uppercase letters A-Z
 * - number 0-9
 *
 * Anything else is not allowed.
 */
export function validateProjectName(projectName) {
  if (!projectName) {
    throw new Error('must provide a project name');
  }

  if (typeof projectName !== 'string') {
    throw new Error('project name must be a string');
  }

  const regexString = /^[a-zA-Z0-9]+$/;
  const isValidProjectName = regexString.test(projectName);

  if (!isValidProjectName) {
    throw new Error(
      'invalid project name - must use only alphanumeric characters'
    );
  }

  return projectName;
}
