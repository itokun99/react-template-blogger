import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import {
  Container,
  Content,
  SearchAndFilter,
  SectionTitle,
  BasePostList
} from '@components';
import { usePostDetail, useSearchPost, useDebounce } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';

function Search() {
  const [searchParams] = useSearchParams();

  const labels = searchParams.get('labels') || '';
  const q = searchParams.get('q') || '';

  const debounceQ = useDebounce(q, 500);
  const debounceLabels = useDebounce(labels, 500);

  const query = useSearchPost({ q: debounceQ, labels: debounceLabels });

  return (
    <Container className="px-0">
      <div className="md:flex">
        <div className="relative w-full md:w-4/12">
          <div className="sticky top-20 mb-6 px-6">
            {/* Search */}
            <SearchAndFilter />
          </div>
        </div>
        <div className="w-full md:w-8/12">
          <BasePostList
            title="Search Result"
            loading={query.isLoading}
            items={query.items}
          />
        </div>
      </div>
    </Container>
  );
}

export default Search;
