interface EventItem {
  name: string;
  date: string;
  timings: string;
  mode: string;
  /** Display label for the venue (address or name). */
  venue: string;
  /** If set, venue is shown as a link to this URL (e.g. Google Maps). */
  venueUrl?: string;
  registrationOpen: boolean;
  registrationLink: string;
  registrationLabel: string;
}

interface EventsContent {
  title: string;
  events: EventItem[];
}

export const eventsContent: EventsContent = {
  title: 'Upcoming Events',
  events: [
    {
      name: 'How Hiring Actually Works (From the Other Side of the Table)',
      date: '5th Apr, 2026',
      timings: '4:00 PM - 6:00 PM',
      mode: 'Offline',
      venue: 'Lotus pond, Road Number 12, MLA Colony, Film Nagar, Hyderabad',
      venueUrl: 'https://maps.app.goo.gl/QZvdomygVRrH68iw8',
      registrationOpen: true,
      registrationLink:
        'https://www.goavo.ai/events/forms/fillup?id=69b2b0b44c6ae6af444e13d6',
      registrationLabel: 'RSVP Open',
    },
  ],
};
