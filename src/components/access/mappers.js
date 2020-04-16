export default ({ user, languages, personal }) => ({
  localization: languages.translate,
  name: personal.name,
  token: user.token,
  puid: user.puid,
  client_id: user.client_id,
});
