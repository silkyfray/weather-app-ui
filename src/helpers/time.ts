export function MilitaryHourToAMPMFormat(hour: number) {
  if (hour === 0) return "12 am";
  if (hour < 10) return hour + " am";
  if (hour >= 10 && hour <= 12) return hour + " pm";
  if (hour > 12) return hour - 12 + " pm";
}
