let st: any[] = [];
function insert_at_bottom(x: any) {
  if (st.length == 0) {
    st.push(x);
  } else {
    let a = st.pop();
    insert_at_bottom(x);
    st.push(a);
  }
}
function reverse() {
  if (st.length > 0) {
    let x = st.pop();
    reverse();
    insert_at_bottom(x);
  }
}
st.push("1");
st.push("2");
st.push("3");
st.push("4");
console.log(st, " original stack");

reverse();
console.log(st, "reverse stack");
