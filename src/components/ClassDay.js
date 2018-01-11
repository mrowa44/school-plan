import React from 'react';


import ClassListItem from 'components/ClassListItem';

function ClassDay({ classes, groupOne, groupTwo, groupThree }) {
  const filtered = classes.filter((item) => {
    const group = item && item.group;
    return group === groupOne || group === groupTwo || group === groupThree;
  });
  return filtered.map(item => <ClassListItem {...item} key={item.id} />);
}

export default ClassDay;
