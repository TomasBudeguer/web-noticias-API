import './spinner.css'

const Spinner = () => {
  return (
    <section className="d-flex justify-content-center">
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
    </section>
  );
};

export default Spinner;
