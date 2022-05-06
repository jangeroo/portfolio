export default function FirechatDescription() {
  return (
    <div>
      <p>
        Hooked On Firechat was born of a Firebase workshop called Firechat from
        my coding bootcamp. It’s not the most stylish thing, but it turned out
        to be quite a challenge!
      </p>
      <p>
        At the time of my bootcamp, React had not yet officially released hooks,
        so we mostly learned Class Components, with the occasional tiny
        Functional Component here and there. The level of instruction was also
        too junior to focus on things like proper layering of the architecture
        (i.e. separating UI logic from business logic from datastore logic, etc)
        so the Firebase code was embedded directly into the UI components, which
        was perfectly acceptable for instructional purposes, but bothered my
        sense of separation of concerns, so I decided it was a great opportunity
        to explore the more modern features of React and rewrite it using Hooks!
      </p>
      <p>
        I rewrote it feature by feature, building each component from scratch as
        I went, and then ran into two main challenges. First of all, I wanted to
        simplify the components by extracting out implementation logic, in
        particular with regards to the database, and by dispatching simple
        actions to a reducer. But since reducers should be pure functions, the
        database logic couldn’t live in the reducer, so my first thought was,
        <em>“I’ll just pass in a middleware like I would do with Redux”</em>.
        But of course React’s <code>useReducer</code> doesn’t support
        middleware! After a bit of research, I learned how to build a simple
        higher-order function
        <code>useReducerWithMiddleware</code> to wrap React’s basic{" "}
        <code>useReducer</code> and accomplish what I wanted. First challenge:
        solved!
      </p>
      <p>
        The second challenge involved Firebase’s asynchronous listeners to
        update the message list for the current user whenever another user sent
        a message. There may be an elegant way to solve this, but I got creative
        and passed React’s <code>dispatch</code> function in my action so that
        the Firebase listener could <code>dispatch</code> an action and update
        the state whenever a new message was received. Taking a{" "}
        <code>dispatch</code> function that calls a <code>middlewareFn</code>{" "}
        and passing it to that same <code>middlewareFn</code> to later call the
        passed-in <code>dispatch</code> itself, I admit this smells like a hack
        to me and is not the easiest path to reason about. This sort of defeated
        the purpose of making the code easy to reason about. But while code that
        is well designed is important, I believe that (especially for code that
        is unlikely to be worked on further) code that works is more important!
      </p>
      <p>
        By the end of the rewrite, I’d probably made this simple app much more
        technically complex than necessary. I could have simply wrapped up the
        database logic in a simple wrapper in the component so that at least the
        component was clean and easy to understand. But while the point of this
        project was always to explore what the technology makes possible in the
        context of addressing a lack of separation of concerns, it was also a
        subtle reminder that over-engineering for the sake of a theoretically
        better practice doesn’t always provide an overall net benefit.
      </p>
    </div>
  );
}
