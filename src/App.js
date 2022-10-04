import "./App.css";

function App() {
  return (
    <div className="">
      <div className="px-4 py-2 bg-violet-700 text-4xl font-bold">
        Personas & Storyboarding
      </div>
      <div className="px-4 py-2 flex-col flex-1 basis-0 grow flex-wrap">
        <div className="text-2xl">
          <h2 className="underline">Part 1: Preparation</h2>
          <p className="text-base pb-2">
            {" "}
            I chose my favorite espresso machine as an accessible interface
            because it is currently placed in a common space in the building I
            am living in.
          </p>
          <p className="text-base pb-2">
            And some of the questions I came up with are ...
          </p>
          <div className="text-base">
            <ul>
              <li> - Is the handle in front easy to hold?</li>
              <li> - Is it obvious which of the two buttons to press?</li>
              <li> - Are the sizes of buttons large enough?</li>
              <li> - Are the images on buttons clear enough to identify?</li>
              <li> - Is it easy to open the machine?</li>
              <li> - Is it clear how to turn on/off the machine?</li>
              <li> - Is the size for cup holder adequate?</li>
            </ul>
            <div className="py-4 max-w-sm">
              <p className="text-cyan-400	pb-2 text-lg">
                Here is a brief sketch of the espresso machine I used for this
                project!!
              </p>
              <img src={require("./sketch.jpeg")} alt="" />
            </div>
          </div>
        </div>
        <div className="text-2xl">
          <h2 className="underline">Part 2: Recording Observations</h2>
          <div className="text-base">
            <ul>
              <span className="font-bold py-1 text-cyan-400 text-lg">
                Key Observations
              </span>
              <li>
                - All participants struggled to close the lid using the handle,
                even though they had no trouble opening it
              </li>
              <li>
                - All participants struggled to turn off the power even though
                they turned on the power easily.
              </li>
              <li>
                - Some participants could not immediately tell the difference
                between two buttons.
              </li>
            </ul>
            <span className="font-bold py-1 text-cyan-400 text-lg">
              Questions and Responses
            </span>
            <ol>
              <li> (1) Is the handle in front easy to hold?</li>
              <span>
                {" "}
                - The handle is not hard to hold; however, it could be improved
                by implementing a button or similar UI so that the machine can
                be opened using only one hand.
              </span>
              <li> (2) Is it obvious which of the two buttons to press? </li>
              <span>
                {" "}
                - Not really. Although each of the two buttons have a picture of
                a small or large cup on it, it could be easier if there are
                description in English.
              </span>
              <li> (3) Are the sizes of buttons large enough?</li>
              <span>
                {" "}
                - No. The sizes should be bigger so that it is easier for users
                to press. Moreover, the two buttons could be separated so the
                users won't accidentally press the wrong button.
              </span>
              <li> (4) Is it clear how to turn on/off the machine?</li>
              <span>
                {" "}
                - No. Absolutely not. Users need to press two buttons
                simultaneously to turn off the power, but there is no clue for
                users to figure out how.{" "}
              </span>
              <li> (5) Is the size for cup holder adequate? </li>
              <span>
                - Likely. This machine is to brew espresso rather than
                Americano. So having a small cup holder should not be a big
                concern.{" "}
              </span>
            </ol>
          </div>
        </div>
        <div className="text-2xl">
          <h2 className="underline">Part 3: Personas</h2>
          <div className="text-base">
            Here are two personas I created.
            <img
              src={require("./persona1.jpeg")}
              alt=""
              className="max-w-sm py-2"
            />
            <ul className="py-2">
              <li>
                {" "}
                - This user is a college student and is stressed out with his
                never-ending assignment.
              </li>
              <li>
                {" "}
                - He is struggling to figure out how to set espresso capsules
                into the machine. Moreover, he could not figure out how to turn
                off the machine after he used it, which made him even more
                stressed out.
              </li>
              <li>
                {" "}
                - This persona represents the users of the espresso machine
                because many users are stressed out with their own work and tend
                to be stressed out.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={require("./persona2.jpeg")}
              alt=""
              className="max-w-sm py-2"
            />
          </div>
          <div className="text-base">
            <ul className="py-2">
              <li>
                {" "}
                - This user is a graduate student and is always in rush to go to
                her classes.
              </li>
              <li>
                {" "}
                - She is struggling to figure out how to set espresso capsules
                into the machine. She is also frustrated with unclear (or
                non-existent) instructions on the machine.
              </li>
              <li>
                {" "}
                - This persona represents the users of the espresso machine
                because a lot of users are busy or in a rush when they are about
                to make coffee.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-2xl">
          <h2>Part 4: Storyboards</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
