import PageHeader from "./common/PageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About Real<i className="bi bi-geo-fill"></i>App
        </>
      }
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorum explicabo voluptatibus est! Illo laudantium, expedita eveniet architecto tenetur facere!"
    />
  );
};

export default About;
