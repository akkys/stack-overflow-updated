import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import LoadingPage from "./LoadingPage";
import NavigationBar from "./NavigationBar";
import Pagination from "./Pagination";
import TopQuestions from "./TopQuestions";

const Main = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [quesPerPage] = useState(10);
  const [title, setTitle] = useState("Top Questions");

  useEffect(() => {
    const url =
      "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
    async function fetchData() {
      const data = await axios.get(url);
      const quesData = data.data.items;
      setQuestions(quesData);
      setIsLoading(true);
      console.log(questions);
    }
    fetchData();
  }, [isLoading]);

  //To search the Questions from StackOverFlow API
  const formSubmit = async (e) => {
    const searchQue = e.target.elements.searchQue.value;
    e.preventDefault();
    const api_call = `https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&title=${searchQue}&site=stackoverflow`;
    const data = await axios.get(api_call);
    const quesData = data.data.items;
    setQuestions(quesData);
    setIsLoading(true);
    setTitle("Search Results");

    document.title = `Posts containing '${searchQue}' - Stack Overflow`;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexofLastPage = currentPage * quesPerPage;
  const indexofFirstPage = indexofLastPage - quesPerPage;
  const currentPageQue = questions.slice(indexofFirstPage, indexofLastPage);

  return (
    <div>
      <NavigationBar formSubmit={formSubmit} />

      {!isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          <Header
            title={title}
            totalQuestions={questions}
            questions={currentPageQue}
          />
          <TopQuestions questions={currentPageQue} loading={isLoading} />
          <Pagination
            quePerPage={quesPerPage}
            totalQues={questions.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
