import classes from "./List.module.css";

const ListWrapper = (props) => {
  return props.type === "ol" ? (
    <ol className={`${props.className} ${classes.ol}`}>{props.children}</ol>
  ) : (
    <ul className={`${props.className} ${classes.ul}`}>{props.children}</ul>
  );
};

const VList = (props) => {
  return (
    <ListWrapper
      type={props.type}
      className={`${props.className} ${classes.vlist}`}
    >
      {props.children}
    </ListWrapper>
  );
};

const HList = (props) => {
  return (
    <ListWrapper
      type={props.type}
      className={`${props.className} ${classes.hlist}`}
    >
      {props.children}
    </ListWrapper>
  );
};

export {
  VList,
  HList
} 
