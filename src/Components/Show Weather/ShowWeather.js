const ShowWeather = (props) => {
  const { response } = props;
  //   console.log(response);

  return <div>{response[1]}</div>;
};

export default ShowWeather;
