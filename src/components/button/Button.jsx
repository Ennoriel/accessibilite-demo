import "./button.css";

export function Button(props) {
  return (
    <button class="button" {...props}>
      {props.children}
    </button>
  );
}
