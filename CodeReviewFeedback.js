import React, { useState } from "react";

const FeedbackSystem = () => {
  /*  const functionalityList = [
      { nome: "Readabillity", upVote: 0, downVote: 0 },
      { nome: "Performance", upVote: 0, downVote: 0 },
      { nome: "Security", upVote: 0, downVote: 0 },
      { nome: "Documentation", upVote: 0, downVote: 0 },
      { nome: "Testing", upVote: 0, downVote: 0 },
    ] */

  const [functionalityList, setFunctionalityList] = useState([
    { nome: "Readabillity", upVote: 0, downVote: 0 },
    { nome: "Performance", upVote: 0, downVote: 0 },
    { nome: "Security", upVote: 0, downVote: 0 },
    { nome: "Documentation", upVote: 0, downVote: 0 },
    { nome: "Testing", upVote: 0, downVote: 0 },
  ]);

  const countScoreUpVote = (name) => {
    const novalista = functionalityList.map(item => {
      if (name === item.nome) {
        return {
          ...item,
          upVote: item.upVote + 1
        };
      }
      return item;
    });
    setFunctionalityList(novalista);
  }

  const countScoreDownVote = (name) => {
    const novalista = functionalityList.map(item => {
      if (name === item.nome) {
        return {
          ...item,
          downVote: item.downVote + 1
        };
      }
      return item;
    });
    setFunctionalityList(novalista);
  }

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      {functionalityList.map((item, index) => (
        <div className="flex wrap justify-content-center mt-30 gap-30">

          <div className="pa-10 w-300 card " key={item.nome} >
            <h2>{item.nome}</h2>
            <div className="flex my-30 mx-0 justify-content-around">

              <button className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
                onClick={() => countScoreUpVote(item.nome)}>
                👍 Upvote
              </button>

              <button className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
                onClick={() => countScoreDownVote(item.nome)}>
                👎 Downvote
              </button>

            </div>
            <p className="my-10 mx-0"
              data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{item.upVote}</strong>
            </p>
            <p className="my-10 mx-0"
              data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{item.downVote}</strong>
            </p>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default FeedbackSystem;
