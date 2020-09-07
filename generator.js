// Without Generator:

const lifts = ['squat', 'bench', 'deadlift', 'press'];
const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

let currentLiftIndex = 0;

const cycle = [...Array(totalNumSessions)].map(() => ({
  lift: lifts[currentLiftIndex++ % lifts.length],
}));

// With Generator:

function* repeatedArray(arr) {
  let index = 0;
  while (true) {
    yield arr[index++ % arr.length];
  }
}

const lifts = ['squat', 'bench', 'deadlift', 'press'];
const nextLiftGenerator = repeatedArray(lifts);

const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

const cycle = [...Array(totalNumSessions)].map(() => ({
  lift: nextLiftGenerator.next().value,
}));
