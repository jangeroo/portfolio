import React from "react";
import styled from "styled-components";

export default function ILuvHue() {
  return (
    <StyledILuvHue>
      <p>
        I built this game when I was feeling a bit lost and uninspired, wanting
        to get back to practicing my frontend skills, but not knowing what kind
        of project I wanted to build. I was lying in bed playing the original
        game{" "}
        <a href="http://i-love-hue.com/">
          <strong>I ♡ Hue</strong>
        </a>
        , and in the calm and meditative state it always generates for me, it
        occurred to me that it would be a fun thing to build in React!
      </p>
      <p>
        It was indeed fun, and presented several interesting challenges.
        Designing the algorithm to calculate the color values drove me
        particularly crazy! On the one hand, it wasn’t immediately obvious how
        to calculate colours that fade evenly, but when I finally came up with
        an algorithm that I was certain would work, it didn’t seem to. It took
        oven an hour of debugging to track down as single <code>=</code>{" "}
        assignment that should have been a <code>==</code> or <code>===</code>;
        a not so subtle reminder that unless loose equality is necessary, strict
        equality is more useful for catching bugs, even if in this case only
        because <code>===</code> is more visually distinct from <code>=</code>{" "}
        than <code>==</code> is from either!
      </p>
      <p>
        The other challenge was the glowing <win>YOU WIN!</win> notification. At
        first, no matter how much I fiddled with the order of elements and the
        CSS, I could not get the notification to appear on top of the grid of
        blocks; it would always hide out behind, where it was useless since it
        wasn’t visible! This one led on a frustrating but very interesting
        journey through the interplay of absolute positioning and stacking
        contexts. I had started this project before I knew much about CSS
        layout, and I had used <code>position: absolute</code> to control layout
        of the coloured blocks. In debugging the hidden <win>YOU WIN!</win>, I
        learned about how absolutely positioned items are pulled out of the
        document flow, essentially sitting in a new stacking context on top of
        everything else, no matter the DOM order or z-index of any other in-flow
        elements.
      </p>
      <p>
        So a peaceful and meditative game turned into a frustrating and
        ultimately highly satisfying learning opportunity!
      </p>
    </StyledILuvHue>
  );
}

const StyledILuvHue = styled.div`
  win {
    font-weight: bold;
    color: blue;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0px 0px 10px 5px white;
  }
`;
