
//     let activityArray = schedule.map(function (el) { return el.activity_name; });
//     let startTimeMArray = schedule.map(function (el) { return el.start_time.getMinutes(); });
//     let endTimeMArray = schedule.map(function (el) { return el.end_time.getMinutes(); });
//     let startTimeHArray = schedule.map(function (el) { return el.start_time.getHours(); });
//     let endTimeHArray = schedule.map(function (el) { return el.end_time.getHours(); });
//    // document.getElementById('out').innerHTML = JSON.stringify(startTimeArray);
//     let Hours = [...startTimeHArray, ...endTimeHArray]
//     console.log(Hours)
//     let [min,max] = [Math.min(...Hours), Math.max(...Hours)];
//     let missNumber = Array.from(Array(max-min),(v,i)=>i+min).filter(i=>!Hours.includes(i));
//     console.log(missNumber)
//     let allHours =[...Hours, ...missNumber].sort()
//     console.log(allHours)
//      let uniqeHours= new Set(allHours);
//     console.log(uniqeHours)

const schedule = [{
  "activity_name": "walking",
  "start_time": "2021-11-03T13:39:00",
  "end_time": "2021-11-03T14:15:00"
},
{
  "activity_name": "eating",
  "start_time": "2021-11-03T14:30:00",
  "end_time": "2021-11-03T15:10:00"
},
{
  "activity_name": "sleeping",
  "start_time": "2021-11-03T15:15:00",
  "end_time": "2021-11-03T18:30:00"
}
]
const output = schedule.map(activity => {
  let arr = [];
  let activity_name = activity.activity_name;
  for (let i = new Date(activity.start_time).getHours(); i <= new Date(activity.end_time).getHours(); i++) {
    if (i === new Date(activity.end_time).getHours()) {
      arr.push({ [i]: { [activity_name]: new Date(activity.end_time).getMinutes() } })
    }
    else if (i === new Date(activity.start_time).getHours()) {
      if (new Date(activity.start_time).getHours() === new Date(activity.end_time).getHours()) {
        arr.push({ [i]: { [activity_name]: new Date(activity.end_time).getMinutes() - new Date(activity.start_time).getMinutes() } })
      } 
      else arr.push({ [i]: { [activity_name]: 60 - new Date(activity.start_time).getMinutes() } })
    }
     else arr.push({ [i]: { [activity_name]: "60" } })
   } return arr;
});
console.log(output);
document.getElementById('out').innerHTML = JSON.stringify(output.sort());


























