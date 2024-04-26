import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  let userResult, photoResult;

  try {
    userResult = await userPromise;
  } catch (error) {
    userResult = error;
  }

  try {
    photoResult = await photoPromise;
  } catch (error) {
    photoResult = error;
  }

  return [
    { status: userResult instanceof Error ? 'rejected' : 'fulfilled', value: userResult },
    { status: photoResult instanceof Error ? 'rejected' : 'fulfilled', value: photoResult },
  ];
}
