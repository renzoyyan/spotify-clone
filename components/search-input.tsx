'use client';

import { useRouter } from 'next/navigation';
import qs from 'query-string';
import { useEffect, useState } from 'react';

import useDebounce from '@/hooks/use-debounce';
import Input from './input';

type Props = {};

const SearchInput = (props: Props) => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
