function App({ info, items }) {
  const title = info.desc;
  const filteredItems =  Array.from(
      items
  ).unshift(2, 0, filter(info));


}
