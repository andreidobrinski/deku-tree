import validator from 'validator';

/**
 * The following function tests a project name for validity.
 * It returns the project name if valid and throws an error is invalid.
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

  const isValidProjectName = validator.isAlphanumeric(projectName);

  if (!isValidProjectName) {
    throw new Error(
      'invalid project name - must use only alphanumeric characters'
    );
  }

  return projectName;
}
