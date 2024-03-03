import { useState } from "react";

function TestingQuestion() {
  const [chose, setChose] = useState();
  const id = 1;

  return (
    <div>
      <p>
        SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT
        SOME TEXT SOME TEXT SOME TEXT.{" "}
      </p>
      <form
        className="grid grid-cols-2 gap-6 mt-6"
        onChange={(e) => console.log("!!!!!!!!!!", e.target.id)}
      >
        <div>
          <input type="radio" name={`option${id}`} id="1Variant" />
          <label htmlFor="1Variant">VARIANT 1</label>
        </div>
        <div>
          <label htmlFor="1Variant">
            <input type="radio" name={`option${id}`} id="1Variant" />
            VARIANT 2
          </label>
        </div>
        <div>
          <input type="radio" name={`option${id}`} id="1Variant" />
          <label htmlFor="1Variant">VARIANT 3</label>
        </div>
        <div>
          <input type="radio" name={`option${id}`} id="1Variant" />
          <label htmlFor="1Variant">VARIANT 4</label>
        </div>
      </form>
    </div>
  );
}

export default TestingQuestion;
