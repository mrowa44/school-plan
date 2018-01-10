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
            <th>start</th>
            <th>end</th>
            <th>duration</th>
            <th>subject</th>
            <th>form</th>
            <th>group</th>
            <th>lecturer</th>
            <th>passing</th>
            <th>place</th>
            <th>comments</th>
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
