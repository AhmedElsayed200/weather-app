const ShowWeather = (props) => {
  const { response } = props;
  console.log(response);

  return <div>{response}</div>;
};

export default ShowWeather;
