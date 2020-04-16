import axios from 'axios';

export default axios.create({
  headers: { 'x-ghofi-region': process.env.REGION },
});
