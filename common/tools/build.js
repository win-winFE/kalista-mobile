/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../../webpack.prod.config';
import { chalkError, chalkSuccess, chalkWarning, chalkProcessing } from './chalkConfig';

process.env.NODE_ENV = 'production';

console.log(chalkProcessing('Generating minified bundle. This will take a moment...'));

webpack(config).run((error, stats) => {
  if (error) {
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(e => console.log(chalkError(e)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalkSuccess('Your app is compiled in production mode in /dev. It\'s ready to roll!'));

  return 0;
});
