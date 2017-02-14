import { match } from 'react-router';
import routes from '../shared/sharedRoutes';

export default function renderView(req, res) {
  const matchOpts = {
    routes,
    location: req.url
  };
  const handleMatchResult = (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
      res.send('Success, that is a route!');
    }
  };

  match(matchOpts, handleMatchResult);
}
