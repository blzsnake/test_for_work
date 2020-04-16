import axios from 'axios';

const setLangList = payload => ({
  type: 'SET_LANGS_LIST',
  payload,
});

const setTranslate = payload => ({
  type: 'SET_TRANSLATE',
  payload,
});

export const fetchLangList = () => dispatch => {
  axios.get(`${process.env.API}/i18n/list/profile`)
    .then(data => dispatch(setLangList(data.data)));
};

export const fetchTranslate = locale => dispatch => {
  axios.get(`${process.env.API}/i18n/translation/profile/${locale}`)
    .then(data => dispatch(setTranslate(data.data)));
};
