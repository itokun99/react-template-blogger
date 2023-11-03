import { useMemo } from 'react';
import { useParams, Form } from 'react-router-dom';

import {
  Container,
  Content,
  SimpleLabelList,
  SearchAndFilter,
  SectionTitle
} from '@components';
import { usePostDetail } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';

function Search() {
  const params = useParams();

  return (
    <Container className="px-0">
      <div className="md:flex">
        <div className="relative w-full md:w-4/12">
          <div className="sticky top-20 mb-6 px-6">
            {/* Search */}
            <SearchAndFilter />
          </div>
        </div>
        <div className="w-full md:w-8/12"></div>
      </div>
    </Container>
  );
}

export default Search;
