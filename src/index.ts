import tini, { Router } from '@helloandre/tini';
import { tiniSPA, respondJSON } from '@helloandre/tini-extras';

const API_VERSION = 'v1'

tini((router) => {
  const api = new Router(`/api/${API_VERSION}`);
  // some api routes
  api.get('/:name', (req) => ({ params: req.params, query: req.query }));
  router.with(api);

  // allow tiniSPA to try to serve all other content
  router.get('(.*)', tiniSPA({ apiFriendly: true }));

  // override tini's default 404 response to be api-friendly
  router.put('(.*)', () => respondJSON({}, 404));
  router.post('(.*)', () => respondJSON({}, 404));
  router.del('(.*)', () => respondJSON({}, 404));
});
