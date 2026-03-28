/**
 * SAMPLE DATA FILE
 *
 * This is a reference file showing how to structure content data
 * for a new section component. Every section in the project follows
 * this same pattern.
 *
 * Rules:
 *  - One exported const per file
 *  - File name matches the export name (sampleData.ts → sampleData)
 *  - No JSX, no MUI imports, no styling - just plain data
 *  - Use an interface for repeated/complex items
 *  - camelCase for the file name and export name
 */

export interface SampleCardItem {
  title: string;
  description: string;
  tag: string;
}

export const sampleData = {
  sectionTitle: 'Sample Section Title',
  sectionSubtitle:
    'This is a sample subtitle that describes what this section is about. Replace this with your actual content.',
  cards: [
    {
      title: 'Card One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tag: 'Example',
    },
    {
      title: 'Card Two',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tag: 'Demo',
    },
    {
      title: 'Card Three',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      tag: 'Reference',
    },
  ] as SampleCardItem[],
  ctaLabel: 'Get Started',
  ctaHref: '#booking',
};
