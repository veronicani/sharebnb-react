import "./Loader.scss"

/** Loader
 * 
 * Props:
 * - none.
 * 
 * State:
 * - none.
 * 
 * App -> Loader
*/

function Loader() {
  return (
    <div className="Loader">
      <div id="html-spinner"></div>
      <i>Server waking up...</i>
    </div>
  );
}


export default Loader;