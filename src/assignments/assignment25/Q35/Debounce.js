import { debounce, throttle } from 'lodash';

const handleSearchInput = debounce((query) => {
  fetchSearchResults(query);
}, 500);

const handleScroll = throttle((event) => {
  updateScrollPosition(window.scrollY);
}, 500);