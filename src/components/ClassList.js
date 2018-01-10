import React from 'react';

import ClassListItem from 'components/ClassListItem';

class ClassList extends React.Component {
  render() {
    const { groupOne, groupTwo, data } = this.props;
    const classes = data.filter((item) => {
      return item.group === groupOne || item.group === groupTwo;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>time</th>
            <th>subject</th>
            <th>group</th>
            <th>lecturer</th>
            <th>place</th>
          </tr>
        </thead>
        <tbody>
          {classes.map(item => <ClassListItem {...item} />)}
        </tbody>
      </table>
    );
  }
}

export default ClassList;
