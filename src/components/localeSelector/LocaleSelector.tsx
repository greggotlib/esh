import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Conainter } from './LocaleSelector.style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { dictionary } from 'utils/dictionary';

const LocaleSelector = () => {
  const [lang, setLang] = useState('');

  const changeLanguage = (event: SelectChangeEvent) => {
    const language = event.target.value;
    setLang(language);
    i18n.changeLanguage(language);
  };
  const { i18n } = useTranslation();

  const languageOptions = [
    { value: 'en', label: dictionary.english },
    { value: 'ru', label: dictionary.russian },
  ];

  return (
    <Conainter>
      <FormControl fullWidth>
        <InputLabel>{dictionary.Navbar.language}</InputLabel>
        <Select
          value={lang}
          label='Language'
          aria-label='language selector'
          onChange={changeLanguage}
        >
          {languageOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Conainter>
  );
};

export default LocaleSelector;
