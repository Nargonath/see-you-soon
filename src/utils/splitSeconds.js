export default function(totalSeconds) {
  let remainingSec = 0;

  if (totalSeconds < 0) {
    return null;
  }

  const secPerDays = 24 * 60 * 60;
  const secPerHours = secPerDays / 24;
  const secPerMinutes = secPerHours / 60;

  const days = Math.floor(totalSeconds / secPerDays);
  remainingSec = totalSeconds - days * secPerDays;

  const hours = Math.floor(remainingSec / secPerHours);
  remainingSec = remainingSec - hours * secPerHours;

  const minutes = Math.floor(remainingSec / secPerMinutes);
  remainingSec = remainingSec - minutes * secPerMinutes;

  return { days, hours, minutes, seconds: remainingSec };
}
