class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return '[' + this.start + ', ' + this.end + ']';
  }
}

const find_employee_free_time = function (schedule) {
  const result = [];
  const timeMap = new Map();
  schedule.forEach((list) => {
    list.forEach((interval) => {
      for (let time = interval.start; time < interval.end; time++) {
        if (!timeMap.has(time)) {
          timeMap.set(time, 1);
        }
      }
    });
  });
  const hours = Array.from(timeMap.keys()).sort();
  let start = 0,
    end = 0;
  for (let i = hours[0]; i <= hours[hours.length - 1]; i++) {
    if (!timeMap.has(i) && start < 1) {
      start = i;
    }
    if (timeMap.has(i) && start > 1) {
      end = i;
      result.push(new Interval(start, end));
      start = 0;
      end = 0;
    }
  }
  return result;
};

input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = 'Free intervals: ';
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = 'Free intervals: ';
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
intervals = find_employee_free_time(input);
result = 'Free intervals: ';
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);
