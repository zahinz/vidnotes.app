import { intervalToDuration } from "date-fns";

// format seconds to minutes

export const formatSecondsToMinutes = (seconds) => {
  if (seconds) {
    const formatted = intervalToDuration({
      start: 0,
      end: seconds * 1000,
    });
    return `${formatted.minutes}:${
      formatted.seconds < 10 ? "0" + formatted.seconds : formatted.seconds
    }`;
  } else {
    return "0.00";
  }
};
