import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";

import { Videos } from "../components/Videos";

describe("<Videos />", () => {
  const videos = [
    {
      id: { videoId: 123 },
      snippet: {
        title: "Test",
        thumbnails: { title: "thumbnail title", medium: { url: "test.png" } }
      }
    }
  ];

  const watchlist = [
    {
      id: { videoId: 123 },
      snippet: {
        title: "Test",
        thumbnails: { title: "thumbnail title", medium: { url: "test.png" } }
      }
    }
  ];
  it("renders <Videos /> components", () => {
    shallow(<Videos videos={videos} watchlist={watchlist}/>);
  });
});

chai.use(chaiEnzyme());
