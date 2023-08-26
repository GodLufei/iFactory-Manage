import { MockMethod } from 'vite-plugin-mock';
import { resultError } from '../_util';
export default [
  {
    url: '/api/product',
    method: 'put',
    statusCode: 200,
    response: () => {
      return resultError();
    },
  },
] as MockMethod[];
