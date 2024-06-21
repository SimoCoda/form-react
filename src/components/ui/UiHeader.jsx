export const UiHeader = ({ title, subtitle }) => {
  return (
    <div className="container">
      <div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};
