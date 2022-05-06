import thereminstrel from "./assets/thereminstrel.png";
import firechat from "./assets/firechat.png";
import iluvhue from "./assets/iluvhue.png";
import foomenu from "./assets/foomenu.png";

import ThereminstrelDescription from "./projects/Thereminstrel";
import ILuvHueDescription from "./projects/iLuvHue";
import FirechatDescription from "./projects/Firechat";
import FoomenuDescription from "./projects/Foomenu";

const projects = [
  {
    name: "Thereminstrel",
    href: "https://thereminstrel.surge.sh",
    thumbnail: thereminstrel,
    Description: ThereminstrelDescription,
  },
  {
    name: "iLuvHue",
    href: "https://iluvhue.surge.sh",
    thumbnail: iluvhue,
    Description: ILuvHueDescription,
  },
  {
    name: "Firechat",
    href: "https://hooked-on-firechat.surge.sh",
    thumbnail: firechat,
    Description: FirechatDescription,
  },
  {
    name: "Foomenu",
    href: "Sorry, no live demo 😞",
    thumbnail: foomenu,
    Description: FoomenuDescription,
  },
];

export { projects };
