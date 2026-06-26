"use client";

import { useGetCalls } from "@/hooks/useGetCalls";

const UpcomingMeetingLabel = () => {
  const { upcomingCalls, isLoading } = useGetCalls();

  const nextMeeting = [...upcomingCalls].sort(
    (a, b) =>
      new Date(a.state.startsAt!).getTime() -
      new Date(b.state.startsAt!).getTime()
  )[0];

  const label =
    nextMeeting?.state.startsAt &&
    `Upcoming Meeting at ${new Date(nextMeeting.state.startsAt).toLocaleTimeString(
      "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    )}`;

  return (
    <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
      {isLoading ? "\u00A0" : label || "No Scheduled Meeting"}
    </h2>
  );
};

export default UpcomingMeetingLabel;
