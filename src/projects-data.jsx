import thereminstrel from "./assets/thereminstrel.png";
import firechat from "./assets/firechat.png";
import iluvhue from "./assets/iluvhue.png";

const projects = [
  {
    name: "Thereminstrel",
    href: "https://thereminstrel.surge.sh",
    thumbnail: thereminstrel,
    description: [
      "Thereminstrel is essentially a virtual theramin, built with the intention of providing an easy way to discover the ridiculous joy of this odd, and almost magical, instrument!",
      "...to be continued...",
    ],
  },
  {
    name: "iLuvHue",
    href: "https://iluvhue.surge.sh",
    thumbnail: iluvhue,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat aliquet semper. Ut nec ultricies felis. Fusce aliquet magna a nisi blandit, et scelerisque ante euismod. Integer purus velit, congue id massa eu, rhoncus egestas urna. Morbi nec risus quis odio aliquet molestie. Fusce efficitur pellentesque odio, ut ultrices felis interdum id. Mauris id nulla quis urna tempus luctus. In vel arcu augue. Proin tempus lorem et est ultricies venenatis. Mauris a lacinia mauris, nec porttitor turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat aliquet semper. Ut nec ultricies felis. Fusce aliquet magna a nisi blandit, et scelerisque ante euismod. Integer purus velit, congue id massa eu, rhoncus egestas urna. Morbi nec risus quis odio aliquet molestie. Fusce efficitur pellentesque odio, ut ultrices felis interdum id. Mauris id nulla quis urna tempus luctus. In vel arcu augue. Proin tempus lorem et est ultricies venenatis. Mauris a lacinia mauris, nec porttitor turpis.",
    ],
  },
  {
    name: "Firechat",
    href: "https://hooked-on-firechat.surge.sh",
    thumbnail: firechat,
    description: [
      "Firechat started as a hooks-based rewrite of a Firebase workshop from my coding bootcamp. At the time, React had not yet officially released hooks, so most of what we learned was about Class Components. The level of instruction was also too junior to focus on things like proper layering of the architecture (i.e. separating UI logic from business logic from datastore logic, etc) so the Firebase code was imbedded directly into the UI components, which bothered my sense of separation of concerns.",
      "...to be continued...",
    ],
  },
];

export { projects };
