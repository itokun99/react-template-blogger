import React from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { TextField, MultiSelect, MultiSelectOption } from '@components';
import { useLabelList, useSearchPost } from '@hooks';

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

  const labels = searchParams.get('labels') || '';
  const q = searchParams.get('q') || '';

  const selectValue = labels
    ? labels.split(',').map((v, i) => ({ id: i + 1, value: v, text: v }))
    : [];

  const options = createOptions(query.items);

  function onChangeSelect(value: MultiSelectOption[]) {
    const newlabels = value.map(v => v.value).join();
    setSearchParams(v => ({ ...v, labels: newlabels, q }));
  }

  function onBlurSearch(e: React.FocusEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchParams(v => ({ ...v, q: value, labels }));
  }

  function onChangeTextField(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchParams(v => ({ ...v, q: value, labels }));
  }

  function onSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault?.();
    setSearchParams(v => ({ ...v, q, labels }));
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
          onChange={onChangeTextField}
          onBlur={onBlurSearch}
        />
      </div>
      <div className="c-form-group">
        <MultiSelect
          loading={query.isLoading}
          name="labels"
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
