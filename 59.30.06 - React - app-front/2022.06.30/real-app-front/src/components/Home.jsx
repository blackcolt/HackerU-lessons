import PageHeader from "./common/PageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          Real<i className="bi bi-geo-fill"></i>App Home Page
        </>
      }
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorum explicabo voluptatibus est! Illo laudantium, expedita eveniet architecto tenetur facere!"
    />
  );
};

export default Home;
