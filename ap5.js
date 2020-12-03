const range = n => [...Array(n).keys()]

const times = a => b => a * b;
const plus = a => b => a + b;

const toRows = cs => rs => rs.map(r => cs.map(f => f(r)));

const columns = range(13).map(times);

const rows = range(13);

const table = toRows(columns)(rows);

console.table(table);