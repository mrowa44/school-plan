import axios from 'axios';
import compact from 'lodash.compact';

const API_PATH = 'https://school-plan-backend.herokuapp.com/data';
const EXAM_REGEX = /exam/i;
const CANCELLED_REGEX = /canceled/i;

function getText(row) {
  return row && row.innerText;
}

function createRowObject(tableRows) {
  const startDate = getText(tableRows[1]);
  if (!startDate) { return null; }
  const comments = getText(tableRows[10]);
  return {
    startDate,
    endDate: getText(tableRows[2]),
    duration: getText(tableRows[3]),
    subject: getText(tableRows[4]),
    form: getText(tableRows[5]),
    group: getText(tableRows[6]),
    place: getText(tableRows[7]),
    lecturer: getText(tableRows[8]),
    passing: getText(tableRows[9]),
    comments,
    isExam: EXAM_REGEX.test(comments),
    isCancelled: CANCELLED_REGEX.test(comments),
    id: Math.ceil(Math.random() * 1000000), // oh god
  };
}

export function parseRows(rows, dates) {
  const dateValues = [...dates].map(dateRow => getText(dateRow).trim().replace(/Date of classes: /, ''));
  const rowsValues = [...rows].map((row) => {
    const tds = row.querySelectorAll('td');
    return createRowObject(tds);
  });
  const compactRows = compact(rowsValues);
  const groupedRows = compactRows.reduce((prev, current) => {
    const hour = Number(current.startDate.split(':')[0]);
    if (hour < prev.hour) {
      // it's next day
      return {
        hour: 0, // reset hour counter
        dateIndex: prev.dateIndex + 1, // move to next day
        rows: [
          ...prev.rows,
          [{ ...current, date: dateValues[prev.dateIndex + 1] }], // new day array
        ],
      };
    }
    // same day
    const currentDayArr = prev.rows.pop() || [];
    return {
      hour, // new max day hour
      dateIndex: prev.dateIndex, // day stays the same
      rows: [...prev.rows, [...currentDayArr, { ...current, date: dateValues[prev.dateIndex] }]],
    };
  }, { hour: 0, rows: [], dateIndex: 0 }).rows;
  return groupedRows;
}

export function fetchData() {
  return axios.get(API_PATH)
    .then(({ data }) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const table = doc.querySelector('table.dane');
      const rows = table.querySelectorAll('.dxgvDataRow_Aqua');
      const dates = table.querySelectorAll("[id^='gridViewPlanyTokow_DXGroupRowExp']");
      return parseRows(rows, dates);
    })
    .catch((error) => {
      console.log('dupa', error);
    });
}
