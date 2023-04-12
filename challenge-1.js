const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

const copied = { ...holidays[christmas] };
copied.name = 'X-mas';
copied.date.setHours(0, 0, 0);

// Alert the user to what has been changed before applying the changes to the holidays object
if (copied.id === holidays[christmas].id) {
    console.log('ID change: false');
}

if (copied.name === holidays[christmas].name) {
    console.log('Name change: false');
} else {
    console.log(`Name change: ${copied.name}`);
}

const formattedDate = `${copied.date.getDate().toString().padStart(2, '0')}/${(
    copied.date.getMonth() + 1
)
    .toString()
    .padStart(2, '0')}/${copied.date.getFullYear()}`;
console.log(`Date change: ${formattedDate}`);


const firstHoliday = Object.values(holidays).sort((a, b) => new Date(a.date) - new Date(b.date))[0];
const lastHoliday = Object.values(holidays).sort((a, b) => new Date(b.date) - new Date(a.date))[0];
const randomHoliday = Object.values(holidays)[Math.floor(Math.random() * Object.values(holidays).length)];

console.log(`First holiday: ${new Date(firstHoliday.date).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '/')}`);
console.log(`Last holiday: ${new Date(lastHoliday.date).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '/')}`);
console.log(`Random holiday: ${new Date(randomHoliday.date).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '/')}`);

