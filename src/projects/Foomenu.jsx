import React from "react";

export default function Foomenu() {
  return (
    <div>
      <p>
        Foomenu was my group project during my bootcamp. My teammate Alberto
        wanted an app to find the nearest burgers, sorted by rating, price, or
        his list of favourites. Diana was in charge of styling, Alberto built
        the React app, and I built the Express server and backend api.
      </p>
      <p>
        Part of the fun of this project was splitting the functionality into
        user stories and separating the various technical concerns. I
        spearheaded both, drawing on my prior experience working in QA, test
        automation, and Agile coaching (the other two had no development
        experience of any kind prior to the bootcamp).
      </p>
      <p>
        I designed the architecture in layers with clean and simple interfaces
        that were easy to test using mocks that could be swapped with the real
        thing. One such layer was an Express.js backend that fetched and
        simplified data from the Zomato api, which provides restaurant menu data
        that we would use to find the location, price and rating of each burger.
        Due to some limitations Zomato that we didn’t have time to overcome
        during the short duration of the project, we opted for a
        proof-of-concept using Foomato, a simplified RESTful Zomato clone I
        built, also Express.js, with the intention of simply swapping it out and
        plugging in Zomato when the time came.
      </p>
      <p>
        The biggest challenge with this project was keeping the team on the same
        page and the same pace. For this we used <code>git</code> and ensured
        that we were checking in and merging our code as often as possible. The
        other two had never used git and were not always reliable for using it,
        so we ran into several merge conflicts, which I became quite good at
        resolving!
      </p>
      <p>
        In the end, a Portuguese-English language barrier slowed us down
        significantly and the app never came to fruition (so no live demo 😞),
        but it was one of the best learning experiences in terms of
        collaboration and building a greenfield project from the ground up!
      </p>
    </div>
  );
}
