const GROUPS_KEY = 'groups';

export function saveGroups(array) {
  localStorage.setItem(GROUPS_KEY, JSON.stringify(array));
}

export function getGroups() {
  return JSON.parse(localStorage.getItem(GROUPS_KEY)) || [];
}

export function addGroup(group) {
  const groups = getGroups();
  groups.push(group);
  const uniqueGroups = [...new Set(groups)];
  saveGroups(uniqueGroups);
}

export function removeGroup(group) {
  const groups = getGroups();
  const groupIndex = groups.findIndex(item => item === group);
  if (groupIndex > 0) {
    groups.splice(groupIndex, 1);
    saveGroups(groups);
  }
}
