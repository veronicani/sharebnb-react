import "./Button.scss";

/** Generic button component.
 * 
 * Props:
 * - bsClasses: Bootstrap classes to apply to the button
 * - handleClick: function to call in parent to handle click
 * - label: display text on button
 * 
 * State:
 * - none
 * 
 * { SearchForm, AddPropertyForm } -> Button
 */

function Button({ bsClasses, handleClick, label }) {
  return (
    <button className={`Button ${bsClasses}`} onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button;