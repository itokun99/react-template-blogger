import React from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { Button, TextField, MultiSelect, MultiSelectOption } from '@components';
import useLabelList from '../../../hooks/useLabelList';

function createOptions(
  items: { id: string; title: string; count: number; url: string }[]
) {
  return items.map(item => ({
    id: item.id,
    text: item.title,
    value: item.title
  }));
}

function Component() {
  const query = useLabelList();
  const [searchParams, setSearchParams] = useSearchParams();

  const tags = searchParams.get('tags') || '';
  const q = searchParams.get('q') || '';

  const selectValue = tags
    ? tags.split(',').map((v, i) => ({ id: i + 1, value: v, text: v }))
    : [];

  const options = createOptions(query.items);

  function onChangeSelect(value: MultiSelectOption[]) {
    const newTags = value.map(v => v.value).join();
    setSearchParams(v => ({ ...v, tags: newTags, q }));
  }

  function onBlurSearch(e: React.FocusEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchParams(v => ({ ...v, q: value, tags }));
  }

  function onSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault?.();
    setSearchParams(v => ({ ...v, tags, q }));
  }

  return (
    <Form
      onSubmit={onSubmitForm}
      className="c-search-filter border border-slate-300 p-6"
    >
      <div className="c-form-group mb-6">
        <TextField
          name="q"
          type="search"
          placeholder={`Type anything to search...`}
          defaultValue={q || ''}
          onBlur={onBlurSearch}
        />
      </div>
      <div className="c-form-group">
        <MultiSelect
          loading={query.isLoading}
          name="tags"
          type="button"
          value={selectValue}
          options={options}
          onChange={onChangeSelect}
        />
      </div>
    </Form>
  );
}

const SearchAndFilter = React.memo(Component);

export default SearchAndFilter;
