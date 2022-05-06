export default function ThereminstrelDescription() {
  return (
    <div>
      <p>
        Thereminstrel is essentially a virtual theremin, built with the
        intention of providing an easy way to discover the ridiculous joy of
        this odd, and almost magical, instrument! And also because conceptually
        it occurred to me like a relatively simple app to get back into coding
        after a temporary career shift when I wasn’t coding anything at all.
      </p>
      <p>
        One thing I found really fun about this project was providing the user
        with live feedback based on tracking the position of the mouse. I was
        used to components that had relatively discrete effects, not ones with
        real-time continuous interactions.
      </p>
      <p>
        The main challenge with this project was working with the{" "}
        <code>window.AudioContext</code> api. I’d never worked with audio before
        and was unfamiliar with some of the terminology used in the api in this
        context.
        <em>“Oscillator? Gain? What are those?”</em> Now I know!
      </p>
      <p>
        This was also an interesting project for the simple reason that I was
        used to thinking of components as “things” that could be seen or
        interacted with, or in more abstract cases, the logic and wires that tie
        the visual components together. I started out uncertain how to structure
        the components… <em>“Where do I put the code for the AudioContext?”</em>{" "}
        Things became much more obvious when I started to see the sound itself
        as a Tone component that I could pass the frequency and amplitude as{" "}
        <code>props</code>. It was an important shift in paradigm to start to
        see components as literally any aspect of the thing I’m building, not
        just the visual pieces or the wiring behind the scenes.
      </p>
    </div>
  );
}
