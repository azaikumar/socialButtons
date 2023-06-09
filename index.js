const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};
// const buttons = ["Like", "Comment", "Share"];

const element = (
  <div className="bg-image">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-alignment">
      <Button buttonText="Like" className="like" />
      <Button buttonText="Comment" className="comment" />
      <Button buttonText="Share" className="share" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
