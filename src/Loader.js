import "./Loader.scss"

/** LoadingSpinner. 
 * 
 * Props:
 * - none.
 * 
 * State:
 * - none.
 * 
 * App -> LoadingSpinner
*/

function Loader() {
  return (
    <div className="Loader">
      <div id="html-spinner"></div>
      <i>Loading...</i>
    </div>
  );
}


export default Loader;