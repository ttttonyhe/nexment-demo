import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { NexmentContainer } from "nexment";

const App = () => {
  const config = {
    leancloud: {
      appId: "6Kcb9HB1iOR87HUbAvnMyUER-gzGzoHsz",
      appKey: "zf3gAf9CGIHLL8Crctb0sJLV",
      serverURL: "https://leancloud.ouorz.com",
    },
    admin: {
      name: "TonyHe",
      email: "he@holptech.com",
    },
  };
  return (
    <div className="example-container">
      <NexmentContainer config={config} />
      <style>
        {`
        body{
          margin:0px;
        }
        .example-container{
          width: 96%;
          margin: 2%;
          min-height: 100vh;
        }
        @media screen and (min-width:1000px){
          .example-container{
            width:650px;
            margin:0 auto;
            padding: 20px;
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
            min-height: 100vh;
          }
        }
        `}
      </style>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
