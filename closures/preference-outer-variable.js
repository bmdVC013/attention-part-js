function preferenceOuterVariable() {
  let outerVariable = 10;

  function showOuterVariable() {
    console.log(outerVariable);
  }

  outerVariable = 20;

  return showOuterVariable;
}

preferenceOuterVariable()(); // 20
